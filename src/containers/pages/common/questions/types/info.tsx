import React from "react";
import styled from "styled-components/macro";

import { QuestionContent, Title, Description, NextButton } from "assets/styles/common";

interface Props {
  data: any;
  onNext: any;
}

const InfoQuestion = ({ data, onNext }: Props) => {
  return (
    <QuestionContent>
			<Title>{data.label}</Title>

      {data.description && (
        <Description dangerouslySetInnerHTML={{ __html: data.description }} />
      )}

      {data.image && (
        <InfoImage />
      )}

      {data.bottoms && data.bottoms.map((text: string, index: number) => (
        <BottomDescription key={index} dangerouslySetInnerHTML={{ __html: text }} />
      ))}

      <NextButton disabled={false} onClick={() => onNext('info confirm')}>Continue</NextButton>
		</QuestionContent>
  )
};

// eslint-disable-next-line import/no-default-export
export default InfoQuestion;

const BottomDescription = styled.div`
	margin: ${props => props.theme.spacing.sm * 2}px 0;
	color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fonts.main}px;
  text-align: center;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    margin: ${props => props.theme.spacing.sm}px 0;
    font-size: ${props => props.theme.fonts.sm}px;
    text-align: start;
  }
`;

const InfoImage = styled.img`
  margin-bottom: ${props => props.theme.spacing.sm * 2}px;
  width: 100%;
  min-height: ${props => props.theme.spacing.sm * 30}px;
`;
