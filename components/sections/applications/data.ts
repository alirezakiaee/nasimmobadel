export interface Application {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const applications: Application[] = [
  {
    id: "oil-gas",
    title: "Oil & Gas",
    description: "Process cooling and heating solutions for refineries and petrochemical plants",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80"
  },
  {
    id: "power-generation",
    title: "Power Generation",
    description: "Efficient heat transfer solutions for power plants and energy facilities",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80"
  },
  {
    id: "chemical",
    title: "Chemical Processing",
    description: "Specialized heat exchangers for chemical manufacturing processes",
    image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?auto=format&fit=crop&q=80"
  },
  {
    id: "food-beverage",
    title: "Food & Beverage",
    description: "Sanitary heat exchangers for food processing applications",
    image: "https://images.unsplash.com/photo-1582593605877-42978c6fd591?auto=format&fit=crop&q=80"
  },
  {
    id: "hvac",
    title: "HVAC",
    description: "Climate control solutions for commercial and industrial buildings",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80"
  },
  {
    id: "marine",
    title: "Marine",
    description: "Corrosion-resistant heat exchangers for maritime applications",
    image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&q=80"
  }
];