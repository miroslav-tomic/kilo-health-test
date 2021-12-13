import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";

import { getQuestionList } from "store/question/actions";

import Layout from "containers/layout";

import Logo from "assets/images/logo.png";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

interface LandingProps {
	getQuestionList: any;
}

const Landing = ({ getQuestionList }: LandingProps) => {
	const history = useHistory();

	const gotoQuestion = () => {
		getQuestionList().then(() => {
			history.push("/questions/0");
		})
	};

	return (
		<Layout>
			<Content>
				<LeftSide>
					<Title>Get back in shape</Title>
					<NextButton onClick={gotoQuestion}>Start The Quiz</NextButton>
				</LeftSide>

				<LogoImage src={Logo} onClick={gotoQuestion} />
			</Content>
		</Layout>
	);
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
	{
		getQuestionList
	},
	dispatch
);

// eslint-disable-next-line import/no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(Landing);

const Content = styled.div`
	display: flex;
	align-items: center;
	
	@media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-right: ${props => props.theme.spacing.sm * 4}px;
	
	@media screen and (max-width: ${props => props.theme.breakpoints.lg}px) {
    margin-right: ${props => props.theme.spacing.sm * 3}px;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    margin-right: ${props => props.theme.spacing.sm * 2}px;
  }
	
	@media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    margin-right: 0;
  }
`;

const Title = styled.div`
	color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fonts.xl}px;
  font-weight: 700;
  text-align: center;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.xxl}px) {
    font-size: ${props => props.theme.fonts.title}px;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.xl}px) {
    font-size: ${props => props.theme.fonts.xlg}px;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}px) {
    font-size: ${props => props.theme.fonts.lg}px;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    font-size: ${props => props.theme.fonts.md}px;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    font-size: ${props => props.theme.fonts.xlg}px;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.xs}px) {
    font-size: ${props => props.theme.fonts.lg}px;
  }
`;

const NextButton = styled.div((props) => `
	margin-top: ${props.theme.spacing.sm * 3.5}px;
	padding: ${props.theme.spacing.sm * 1.5}px;
	border-radius: ${props.theme.spacing.sm}px;
	width: 100%;
	max-width: 270px;
	color: white;
  font-size: ${props.theme.fonts.main}px;
  text-align: center;
  background-color: ${props.theme.colors.primary};
  cursor: pointer;
  
  &: hover {
    opacity: 0.8;
  }
  
  @media screen and (max-width: ${props.theme.breakpoints.lg}px) {
  	margin-top: ${props.theme.spacing.sm * 2}px;
    padding: ${props.theme.spacing.sm}px;
    max-width: 200px;
  }
  
  @media screen and (max-width: ${props.theme.breakpoints.md}px) {
  	margin-top: ${props.theme.spacing.sm}px;
  	padding: ${props.theme.spacing.xs}px;
  	max-width: 150px;
    font-size: ${props.theme.fonts.sm}px;
  }
  
  @media screen and (max-width: ${props.theme.breakpoints.sm}px) {
    display: none;
  }
`);

const LogoImage = styled.img`
	width: ${props => props.theme.spacing.sm * 90}px;
	height: ${props => props.theme.spacing.sm * 75}px;
	
	@media screen and (max-width: ${props => props.theme.breakpoints.xxl}px) {
    width: ${props => props.theme.spacing.sm * 70}px;
    height: ${props => props.theme.spacing.sm * 65}px;
  }
	
	@media screen and (max-width: ${props => props.theme.breakpoints.xl}px) {
    width: ${props => props.theme.spacing.sm * 60}px;
    height: ${props => props.theme.spacing.sm * 50}px;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.lg}px) {
    width: ${props => props.theme.spacing.sm * 50}px;
    height: ${props => props.theme.spacing.sm * 40}px;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    width: ${props => props.theme.spacing.sm * 40}px;
    height: ${props => props.theme.spacing.sm * 30}px;
  }
	
	@media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    width: ${props => props.theme.spacing.sm * 50}px;
  	height: ${props => props.theme.spacing.sm * 40}px;
  	order: -1;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.xs}px) {
    width: ${props => props.theme.spacing.sm * 35}px;
    height: ${props => props.theme.spacing.sm * 30}px;
  }
`;
