import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 250px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid black;
  background-color: white;
  top: 95px;
  right: 67px;
  z-index: 5;
`;
export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

// .empty-message {
//   font-size: 18px;
//   margin: 50px auto;

// button {
//   margin-top: auto;
// }
