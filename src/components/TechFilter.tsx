import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Filter, X } from "lucide-react";

export interface FilterOptions {
  periods: Array<'past' | 'present' | 'future'>;
  categories: Array<'web' | 'mobile' | 'ai' | 'blockchain' | 'iot' | 'quantum' | 'ar-vr'>;
}

interface TechFilterProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  onClearAll: () => void;
}

const periodLabels = {
  past: 'Passé',
  present: 'Présent',
  future: 'Futur'
};

const categoryLabels = {
  web: 'Web',
  mobile: 'Mobile',
  ai: 'IA',
  blockchain: 'Blockchain',
  iot: 'IoT',
  quantum: 'Quantique',
  'ar-vr': 'AR/VR'
};

export function TechFilter({ filters, onFilterChange, onClearAll }: TechFilterProps) {
  const togglePeriod = (period: 'past' | 'present' | 'future') => {
    const newPeriods = filters.periods.includes(period)
      ? filters.periods.filter(p => p !== period)
      : [...filters.periods, period];
    onFilterChange({ ...filters, periods: newPeriods });
  };

  const toggleCategory = (category: 'web' | 'mobile' | 'ai' | 'blockchain' | 'iot' | 'quantum' | 'ar-vr') => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    onFilterChange({ ...filters, categories: newCategories });
  };

  const hasActiveFilters = filters.periods.length > 0 || filters.categories.length > 0;

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-primary" />
            Filtres
          </CardTitle>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearAll}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4 mr-1" />
              Effacer
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Periods */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Période</h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(periodLabels).map(([period, label]) => (
              <Badge
                key={period}
                variant={filters.periods.includes(period as any) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/80 transition-colors"
                onClick={() => togglePeriod(period as any)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-3">Catégorie</h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(categoryLabels).map(([category, label]) => (
              <Badge
                key={category}
                variant={filters.categories.includes(category as any) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/80 transition-colors"
                onClick={() => toggleCategory(category as any)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}