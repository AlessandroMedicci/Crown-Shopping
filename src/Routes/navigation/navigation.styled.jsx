import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding-top: 25px;
  padding-left: 15px;
`;

export const NavLinks = styled.div`
  padding-top: 25px;
  padding-right: 5px;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
