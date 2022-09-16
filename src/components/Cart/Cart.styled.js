import styled from "styled-components";

export const CartWrapper = styled.div`
  
  position: absolute;
  top: 0;
  left: 100%;
  width: 400px;
  min-height: 500px;
  background-color: darkslategray;
  /* overflow-y: scroll; */
  padding: 20px 15px 30px;
  border-radius: ${props => props.theme.border.radius[3]}px;
  z-index: 25;
  transition: transform 0.5s linear;

  ${(props) => {
    return props.isCartOpen && "transform: translateX(-100%)"  
  }}
`;
