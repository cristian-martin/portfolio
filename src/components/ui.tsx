import type { ReactNode } from "react";

export function SpecCard({ title, items }: { title?: string; items: [string, string][] }) {
  return (
    <div className="border border-black divide-y divide-gray-200">
      {title && (
        <div className="px-5 py-3 text-xs uppercase tracking-widest bg-black text-white">{title}</div>
      )}
      {items.map(([k, v]) => (
        <div key={k} className="px-5 py-4">
          <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1.5">{k}</p>
          <p className="text-sm leading-snug">{v}</p>
        </div>
      ))}
    </div>
  );
}

export function SectionLabel({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`text-xs uppercase tracking-widest mb-4 ${dark ? "text-gray-400" : "text-gray-500"}`}>
      {children}
    </p>
  );
}

export function Tag({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`text-xs px-2 py-1 border ${
        dark ? "border-gray-600 text-gray-400" : "border-black text-black"
      }`}
    >
      {children}
    </span>
  );
}

export function Button({
  href,
  children,
  variant = "solid",
  dark = false,
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  dark?: boolean;
  external?: boolean;
}) {
  const base = "inline-block px-6 py-3 text-sm uppercase tracking-widest transition-colors";
  const styles = dark
    ? variant === "solid"
      ? "bg-white text-black hover:bg-gray-200"
      : "border border-white text-white hover:bg-white hover:text-black"
    : variant === "solid"
      ? "bg-black text-white hover:bg-gray-800"
      : "border border-black text-black hover:bg-black hover:text-white";
  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
