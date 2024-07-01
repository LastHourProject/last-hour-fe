export const Container = ({ children, className, ...rest }) => (
  <div
    className={`sm:mx-auto sm:container px-3 md:px-6 ${className}`}
    {...rest}
  >
    {children}
  </div>
);
