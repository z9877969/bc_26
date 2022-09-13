const style = {
  display: "flex",
  minWidth: "940px",
  justifyContent: "space-around",
  paddingLeft: "20px",
  paddingRight: "20px",
};

const Container = ({ children, title }) => {
  const bgImgUrl = "https://...";
  return (
    <div style={{ ...style, backgroundImage: `url(${bgImgUrl})` }}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};

export default Container;
