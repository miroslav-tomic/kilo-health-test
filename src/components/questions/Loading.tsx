import React from "react";
import styled from "styled-components/macro";

interface LoadingProps {
  display: boolean;
  percent: number;
}

interface WrapperProps {
  open: boolean;
}

interface ProgressProps {
  percent: number;
}

const Loading = ({ display = false, percent }: LoadingProps) => {

  return (
    <LoadingWrapper open={display}>
			<LoadingContent>
				<Label>Analyzing your data...</Label>
				<ProgressWrapper>
					<Progress percent={percent} />
				</ProgressWrapper>
			</LoadingContent>
		</LoadingWrapper>
  );
};

// eslint-disable-next-line import/no-default-export
export default Loading;

const LoadingWrapper = styled.div<WrapperProps>((props) => `
	position: fixed;
	left: 0;
	top: 0;
	display: ${props.open ? 'flex' : 'none'};
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background-color: ${props.theme.colors.mainBg};
`);

const LoadingContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Label = styled.div`
	margin-bottom: ${props => props.theme.spacing.sm * 6}px;
  color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fonts.main + 4}px;
  font-weight: 700;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    font-size: ${props => props.theme.fonts.main}px;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    font-size: ${props => props.theme.fonts.sm}px;
  }
`;

const ProgressWrapper = styled.div`
	border-radius: ${props => props.theme.spacing.xs * 0.5}px;
	width: 400px;
	height: ${props => props.theme.spacing.xs}px;
	background-color: ${props => props.theme.colors.secondary};
	
	@media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    width: 300px;
  }
  
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    width: 250px;
  }
`;

const Progress = styled.div<ProgressProps>((props) => `
	border-radius: ${props.theme.spacing.xs * 0.5}px;
	width: ${props.percent}%;
	height: 100%;
	background-color: ${props.theme.colors.primary};
	transition: 0.5s width;
`);


