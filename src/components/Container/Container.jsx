const wrapperStyles = {
  display: "flex",
  flexWrap: "wrap",
  minWidth: "940px",
  justifyContent: "space-around",
  paddingLeft: "20px",
  paddingRight: "20px",
};

const titleStyles = {
  textAlign: "center",
  margin: 0,
  padding: "16px 0",
};

const Container = ({ children, title }) => {
  return (
    <div style={wrapperStyles}>
      {title && <h2 style={titleStyles}>{title}</h2>}
      {children}
    </div>
  );
};

export default Container;
