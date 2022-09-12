const Container = ({ children, title }) => {
//   console.log("children :>> ", children);
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};

export default Container;
