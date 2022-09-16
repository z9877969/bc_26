import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  width: 330px;
  padding: 0;
  margin: 0;
  margin-left: 30px;
  background-color: ${(props) => {
    return props.color;
  }};
  display: grid;
  grid-template-columns: repeat(1, 300px);

  grid-gap: 15px;

  @media screen and (min-width: 768px) {
    width: 620px;
    grid-template-columns: repeat(2, 300px);
    grid-gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 930px;
    grid-template-columns: repeat(3, 300px);
    grid-gap: 15px;
  }
`;

export const Item = styled.li`
  margin: 0;
  padding: 5px;
  background-color: #212121;
  overflow: hidden;
`;

export const Price = styled.span`
  ${(props) => {
    return props.isSmallPrice && "font-weight: bold; color: red;";
  }} /* color:  */
  font-size: ${(props) => props.fontSize}px
`;
