import React, { useState } from "react";

import { QuestionContent, Title, Description, NextButton } from "assets/styles/common";

import MultiQuestionItem from "components/questions/MultiQuestionItem";

interface Props {
  data: any;
  onNext: any;
}

const MultiQuestion = ({ data, onNext }: Props) => {
  const [selected, setSelected] = useState<string[]>([]);

  const onSelect = (value: string) => {
    const flag = selected.includes(value);
    if (flag) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const onClick = () => {
    if (selected.length !== 0) {
      onNext();
    }
  };

  return (
    <QuestionContent>
      <Title>{data.label}</Title>

      {data.description && (
        <Description dangerouslySetInnerHTML={{ __html: data.description }} />
      )}

      {data.options.map((option: any) => (
        <MultiQuestionItem key={option.id} data={option} onClick={onSelect} active={selected.includes(option.value)} />
      ))}

      <NextButton disabled={selected.length === 0} onClick={onClick}>Continue</NextButton>
    </QuestionContent>
  );
};

// eslint-disable-next-line import/no-default-export
export default MultiQuestion;

