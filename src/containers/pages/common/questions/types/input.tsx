import React, { useState } from "react";
import styled from "styled-components/macro";

import { QuestionContent, Title, NextButton } from "assets/styles/common";

import QuestionInput from "components/questions/QuestionInput";

interface Props {
  data: any;
  onNext: any;
}

const InputQuestion = ({ data, onNext }: Props) => {
  const [value, setValue] = useState('');
  const onClick = () => {
    if (value !== '') {
      onNext(value);
    }
  };

  return (
    <InputContent>
			<Title>{data.label}</Title>

      <QuestionInput placeholder={data.inputLabel} value={value} setValue={setValue} />

      <NextButton disabled={value === ''} onClick={onClick}>Next</NextButton>
		</InputContent>
  )
};

// eslint-disable-next-line import/no-default-export
export default InputQuestion;

const InputContent = styled(QuestionContent)`
	margin-bottom: ${props => props.theme.spacing.sm * 10}px;
`;
