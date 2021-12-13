import styled from "styled-components/macro";

interface ButtonProps {
  disabled: any;
}

export const QuestionContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: ${props => props.theme.spacing.sm * 2}px;
	width: 100%;
	
	@media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    align-items: flex-start;
  }
`;

export const NextButton = styled.div<ButtonProps>((props) => `
	margin-top: ${props.theme.spacing.sm * 2}px;
	padding: ${props.theme.spacing.sm * 1.5}px;
	border-radius: ${props.theme.spacing.sm}px;
	width: 100%;
	max-width: 400px;
	color: ${props.disabled ? props.theme.colors.disabledText : 'white'};
  font-size: ${props.theme.fonts.main}px;
  text-align: center;
  background-color: ${props.disabled ? props.theme.colors.disabled : props.theme.colors.primary};
  cursor: pointer;
  
  &: hover {
    opacity: 0.8;
  }
  
  @media screen and (max-width: ${props.theme.breakpoints.sm}px) {
    padding: ${props.theme.spacing.sm}px;
    font-size: ${props.theme.fonts.sm}px;
  }
`);

export const Title = styled.div`
	margin-bottom: ${props => props.theme.spacing.sm * 4}px;
	color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fonts.title}px;
  font-weight: 700;
  text-align: center;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.xxl}px) {
    font-size: ${props => props.theme.fonts.title}px;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}px) {
    font-size: ${props => props.theme.fonts.xlg}px;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    font-size: ${props => props.theme.fonts.lg}px;
    text-align: start;
    margin-bottom: ${props => props.theme.spacing.sm * 2}px;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.xs}px) {
    font-size: ${props => props.theme.fonts.md}px;
  }
`;

export const Description = styled.div`
	margin-bottom: ${props => props.theme.spacing.sm * 5}px;
	color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fonts.main}px;
  text-align: center;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    margin-bottom: ${props => props.theme.spacing.sm * 3}px;
    font-size: ${props => props.theme.fonts.sm}px;
    text-align: start;
  }
`;
