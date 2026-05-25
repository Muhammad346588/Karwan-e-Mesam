import { cn } from "../../lib/utils";

const Button = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-emerald-700 text-white hover:bg-emerald-800",
    outline: "border border-emerald-700 text-emerald-700 hover:bg-emerald-50",
    ghost: "hover:bg-slate-100 text-slate-700",
  };

  return (
    <button className={cn(baseStyle, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export { Button };
