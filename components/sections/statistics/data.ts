export interface Statistic {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export const statistics: Statistic[] = [
  {
    id: "installations",
    value: 5000,
    suffix: "+",
    label: "Global Installations"
  },
  {
    id: "efficiency",
    value: 98,
    suffix: "%",
    label: "Average Efficiency Rate"
  },
  {
    id: "countries",
    value: 45,
    suffix: "",
    label: "Countries Served"
  },
  {
    id: "experience",
    value: 25,
    suffix: "+",
    label: "Years of Experience"
  }
];