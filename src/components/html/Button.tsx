/**In this video we will learn how to wrap html elements and
 * create custom components which can be used in react application
 * if we're building a design sysytem or even a regular react app
 * without relying on a UI compnent library it is common to create
 * basic element like buttons and inputs with our own styling
 *
 */

type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;
//Omit takes an object type and remove the specified properties
//Omit helps us to tell TypeScript  to leave out the children type 
// from the html element type 

// Omitting props is somethig we will come across when building 
// design system or component from scratch 
export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};
