export interface CaseStudy {
  id: string;
  title: string;
  challenge: string;
  solution: string;
  results: string;
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "refinery-optimization",
    title: "Refinery Heat Recovery Optimization",
    challenge: "A major oil refinery faced significant energy losses and high operational costs due to inefficient heat exchange systems.",
    solution: "Implementation of custom-designed shell and tube heat exchangers with advanced fouling resistance technology.",
    results: "40% reduction in energy consumption and $2.5M annual cost savings with ROI achieved in 18 months.",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80"
  },
  {
    id: "food-processing",
    title: "Food Processing Plant Upgrade",
    challenge: "Food processing facility required precise temperature control while meeting strict hygiene standards.",
    solution: "Installation of specialized plate heat exchangers with enhanced CIP capabilities and digital monitoring.",
    results: "99.9% temperature accuracy achieved with 30% reduction in maintenance downtime.",
    image: "https://images.unsplash.com/photo-1582593605877-42978c6fd591?auto=format&fit=crop&q=80"
  }
];