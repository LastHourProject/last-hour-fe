export const Button = ({ children, className, type, onClick }) => (
  <button onClick={onClick} type={type} className={className}>
    {children}
  </button>
);
