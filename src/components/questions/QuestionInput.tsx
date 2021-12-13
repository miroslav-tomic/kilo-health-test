import React from "react";
import styled from "styled-components/macro";

interface Props {
  value: string;
  setValue: any;
  placeholder?: any
}

const QuestionInput = ({ value, setValue, placeholder }: Props) => {

  return (
    <Input placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

// eslint-disable-next-line import/no-default-export
export default QuestionInput;

const Input = styled.input`
 	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: ${props => props.theme.spacing.sm * 2}px;
	outline: none;
	border: none;
	border-radius: ${props => props.theme.spacing.sm}px;
	padding: ${props => props.theme.spacing.sm * 2}px;
	width: 100%;
	max-width: 400px;
	background-color: ${props => props.theme.colors.secondary};
	color: ${props => props.theme.colors.mainText};
	placeholder-color: ${props => props.theme.colors.disabledText};
	font-size: ${props => props.theme.fonts.main + 2}px;

	cursor: pointer;

	&: hover {
		border: 1.5px solid ${props => props.theme.colors.primary};
		box-shadow: 0 0 10px ${props => props.theme.colors.border};
	}
	
	&: focus {
    border: 1.5px solid ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.mainBg};
    box-shadow: 0 0 10px ${props => props.theme.colors.border};
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    padding: ${props => props.theme.spacing.sm * 1.5}px;
  }
`;


