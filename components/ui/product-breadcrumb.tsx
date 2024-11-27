import Link from "next/link";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface ProductBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function ProductBreadcrumb({ items, className }: ProductBreadcrumbProps) {
  return (
    <nav className={cn("flex", className)} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href}>
            <div className="flex items-center">
              <span className="mx-2.5 text-muted-foreground">/</span>
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium",
                  index === items.length - 1
                    ? "text-foreground cursor-default pointer-events-none"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={index === items.length - 1 ? "page" : undefined}
              >
                {item.label}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}