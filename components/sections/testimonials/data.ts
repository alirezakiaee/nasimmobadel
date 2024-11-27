export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "The efficiency gains we've seen since implementing ThermalTech's heat exchangers have been remarkable. Their expertise and support throughout the process were invaluable.",
    name: "Sarah Chen",
    title: "Chief Operations Officer, Global Energy Corp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    id: "2",
    quote: "ThermalTech's custom solutions helped us optimize our processing plant's thermal efficiency while reducing maintenance costs significantly.",
    name: "Michael Rodriguez",
    title: "Plant Manager, Industrial Solutions Ltd",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    id: "3",
    quote: "Their innovative approach to heat exchanger design and commitment to quality has made them our preferred supplier for all our thermal management needs.",
    name: "Emily Thompson",
    title: "Technical Director, Advanced Manufacturing Inc",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  }
];