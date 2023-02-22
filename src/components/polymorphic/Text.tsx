/**
 * It is something we don't need unless we're building a
 * component library or a design system for our project at work
 *
 */

type TextOwnProps = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: React.ElementType;
};

export const Text = ({ size, color, children, as }: TextOwnProps) => {
  const Component = as || "div";
  return <Component className={`class-with-${size}-${color}`}>{children}</Component>;
 };
