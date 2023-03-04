
import styled from 'styled-components';

export const Form = styled.form`
width: 500px;
display: flex;
flex-direction: column;
gap: 20px;
`
export const InputName = styled.label`
font-size: 24px;
font-weight: 500;
`
export const Input = styled.input`
max-width: 360px;
`
export const AddContact = styled.button`
width: 200px;
height: 30px;
font-size: 18px;
background-color: #E6E6FA;
  border: 0;
  border-radius: .5rem;
  box-sizing: border-box;
  color: #9932CC;
  width: 200px:
  font: 400 "Roboto";
  line-height: 1rem;
  padding: 3px .5rem;
  text-align: center;
  text-decoration: none;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    background-color: #FFF0F5;
  }
  &:focus-visible {
    box-shadow: none;
  }
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;
    
