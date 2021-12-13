import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router";

import { MOCK_DATA } from "constants/mock-data";
import angleLeft from "assets/images/angleLeft.svg";

interface LayoutProps {
  children?: any;
  id?: number;
}

const QuestionLayout = ({ children, id }: LayoutProps) => {
  const history = useHistory();
  const length = MOCK_DATA.data.questions.length;

  const goBack = () => {
    history.goBack();
  };

  return (
    <Wrapper>
			<Header>
				<BackButton onClick={goBack}>
					<LeftIcon src={angleLeft} alt="back-icon" /> Back
				</BackButton>

				<DisplayStatus><b>{id ? 1 + id : 0}</b> of {length}</DisplayStatus>
			</Header>

			<Container>
				{children}
			</Container>
		</Wrapper>
  );
};

// eslint-disable-next-line import/no-default-export
export default QuestionLayout;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	background: ${props => props.theme.colors.mainBg};
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0;
	border-bottom: 2px solid ${props => props.theme.colors.secondary};
	padding: ${props => props.theme.spacing.sm * 1.5}px ${props => props.theme.spacing.sm * 20}px;
	width: 100%;
	background: ${props => props.theme.colors.mainBg};
	box-shadow: 0 0 20px ${props => props.theme.colors.secondary};

	@media screen and (max-width: ${props => props.theme.breakpoints.xxl}px) {
		padding: ${props => props.theme.spacing.sm * 1.5}px ${props => props.theme.spacing.sm * 18}px;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.xl}px) {
    padding: ${props => props.theme.spacing.sm * 1.5}px ${props => props.theme.spacing.sm * 15}px;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}px) {
    padding: ${props => props.theme.spacing.sm * 1.5}px ${props => props.theme.spacing.sm * 12}px;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    padding: ${props => props.theme.spacing.sm * 1.5}px ${props => props.theme.spacing.sm * 6}px;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    padding: ${props => props.theme.spacing.sm * 1.5}px ${props => props.theme.spacing.sm * 4}px;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.xs}px) {
    padding: ${props => props.theme.spacing.sm * 1.5}px ${props => props.theme.spacing.sm * 2}px;
  }
`;

const BackButton = styled.div`
	display: flex;
	align-items: center;
	border-radius: ${props => props.theme.spacing.xs}px;
	padding: ${props => props.theme.spacing.sm * 1.5}px;
	color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fonts.main}px;
  font-weight: 700;
  background: ${props => props.theme.colors.mainBg};
  cursor: pointer;
  
  &: hover {
  	background: ${props => props.theme.colors.disabled};
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.xl}px) {
    padding: ${props => props.theme.spacing.sm}px;
  }
`;

const LeftIcon = styled.img`
	margin-right: ${props => props.theme.spacing.sm * 2}px;
	width: ${props => props.theme.fonts.main}px;
	height: ${props => props.theme.fonts.main}px;
	
	@media screen and (max-width: ${props => props.theme.breakpoints.xxl}px) {
    margin-right: ${props => props.theme.spacing.sm * 1.5}px;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.xl}px) {
    margin-right: ${props => props.theme.spacing.sm}px;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}px) {
    margin-right: ${props => props.theme.spacing.xs}px;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    margin-right: ${props => props.theme.spacing.xs * 0.5}px;
  }
`;

const DisplayStatus = styled.div`
	color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fonts.main}px;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1;
	overflow-y: auto;
`;
