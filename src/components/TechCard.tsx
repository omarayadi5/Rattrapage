import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export interface Technology {
  id: string;
  name: string;
  description: string;
  year: number;
  period: 'past' | 'present' | 'future';
  category: 'web' | 'mobile' | 'ai' | 'blockchain' | 'iot' | 'quantum' | 'ar-vr';
  impact: 'low' | 'medium' | 'high';
  image?: string;
}

interface TechCardProps {
  technology: Technology;
}

const categoryColors = {
  web: 'bg-tech-blue/20 text-tech-blue border-tech-blue/30',
  mobile: 'bg-tech-cyan/20 text-tech-cyan border-tech-cyan/30',
  ai: 'bg-primary/20 text-primary border-primary/30',
  blockchain: 'bg-tech-pink/20 text-tech-pink border-tech-pink/30',
  iot: 'bg-tech-purple/20 text-tech-purple border-tech-purple/30',
  quantum: 'bg-primary-glow/20 text-primary-glow border-primary-glow/30',
  'ar-vr': 'bg-accent/20 text-accent border-accent/30'
};

const periodColors = {
  past: 'bg-muted/50 text-muted-foreground',
  present: 'bg-primary/20 text-primary',
  future: 'bg-gradient-future text-foreground'
};

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

export function TechCard({ technology }: TechCardProps) {
  return (
    <Card className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg group-hover:text-primary transition-colors">
            {technology.name}
          </CardTitle>
          <Badge variant="outline" className={categoryColors[technology.category]}>
            {categoryLabels[technology.category]}
          </Badge>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className={periodColors[technology.period]}>
            {periodLabels[technology.period]}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {technology.year}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {technology.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}