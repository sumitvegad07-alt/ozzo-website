import {
  Eye,
  MessageSquare,
  IndianRupee,
  Layers,
  WifiOff,
  ShieldCheck,
  GitBranch,
  MapPin,
  ShoppingCart,
  FileText,
  PieChart,
  Truck,
  Factory,
  HardHat,
  Stethoscope,
  Building2,
  ShoppingBag,
  Sprout,
  Wrench,
  Calculator,
  Route,
  Fingerprint,
  ReceiptText,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Eye,
  MessageSquare,
  IndianRupee,
  Layers,
  WifiOff,
  ShieldCheck,
  GitBranch,
  MapPin,
  ShoppingCart,
  FileText,
  PieChart,
  Truck,
  Factory,
  HardHat,
  Stethoscope,
  Building2,
  ShoppingBag,
  Sprout,
  Wrench,
  Calculator,
  Route,
  Fingerprint,
  ReceiptText,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? Layers;
  return <Cmp className={className} aria-hidden />;
}
