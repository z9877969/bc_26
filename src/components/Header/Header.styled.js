import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: ${({theme}) => theme.colors.bgColor};
  padding: 15px 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: ${({theme}) => theme.border.radius[2]}px;
`;

export const Image = styled.img.attrs({
  alt: "logo",
})``;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfoWrapper = styled(InfoWrapper)`
  & .user-name {
    width: 65px;
    height: 65px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 44px;
    background-color: #fff;
    border-radius: 50%;
  }

  & .user-email {
    font-size: 28px;
    color: bisque;
  }
`;

export const CartInfoWrapper = styled(InfoWrapper)`
  & button {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
