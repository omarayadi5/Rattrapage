import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TechCard } from "@/components/TechCard";
import { TechFilter, FilterOptions } from "@/components/TechFilter";
import { technologies } from "@/data/technologies";
import { ChevronDown, Sparkles, Clock, Zap } from "lucide-react";
import techHeroImage from "@/assets/tech-hero.jpg";

const Index = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    periods: [],
    categories: []
  });

  const clearAllFilters = () => {
    setFilters({ periods: [], categories: [] });
  };

  const stats = useMemo(() => {
    const past = technologies.filter(t => t.period === 'past').length;
    const present = technologies.filter(t => t.period === 'present').length;
    const future = technologies.filter(t => t.period === 'future').length;
    return { past, present, future };
  }, []);

  // Filtrage dynamique des technologies
  const filteredTechnologies = useMemo(() => {
    return technologies.filter(tech => {
      // Filtre période
      const periodMatch =
        filters.periods.length === 0 || filters.periods.includes(tech.period);

      // Filtre catégorie
      const categoryMatch =
        filters.categories.length === 0 || filters.categories.includes(tech.category);

      return periodMatch && categoryMatch;
    });
  }, [filters, technologies]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${techHeroImage})` }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-16">
          <div className="animate-slide-in-up">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-tech bg-clip-text text-transparent mb-6 animate-glow-pulse leading-loose">
              Évolution Technologique
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Explorez le voyage fascinant des technologies qui ont façonné notre monde,
              celles qui le transforment aujourd'hui, et celles qui définiront notre avenir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-tech hover:shadow-glow transition-all duration-300 group"
                onClick={() => document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-float" />
                Découvrir les Technologies
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-gradient-to-br from-muted/50 to-background border-border/50 hover:shadow-tech transition-all duration-300">
              <CardContent className="p-8">
                <Clock className="w-12 h-12 mx-auto mb-4 text-tech-blue" />
                <h3 className="text-3xl font-bold text-tech-blue mb-2">{stats.past}</h3>
                <p className="text-muted-foreground">Technologies du Passé</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gradient-to-br from-primary/10 to-background border-primary/30 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <Zap className="w-12 h-12 mx-auto mb-4 text-primary animate-glow-pulse" />
                <h3 className="text-3xl font-bold text-primary mb-2">{stats.present}</h3>
                <p className="text-muted-foreground">Technologies Actuelles</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-gradient-future/20 border-tech-cyan/30 hover:shadow-tech transition-all duration-300">
              <CardContent className="p-8">
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-tech-cyan animate-float" />
                <h3 className="text-3xl font-bold text-tech-cyan mb-2">{stats.future}</h3>
                <p className="text-muted-foreground">Technologies Futures</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-tech bg-clip-text text-transparent">
              Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Filtrez et explorez les technologies par période et catégorie
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <TechFilter
                filters={filters}
                onFilterChange={setFilters}
                onClearAll={clearAllFilters}
              />
            </div>

            {/* Technologies Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTechnologies.map((tech, index) => (
                  <div 
                    key={tech.id} 
                    className="animate-slide-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <TechCard technology={tech} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-card/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            Explorez l'évolution technologique - Du passé vers l'avenir
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;