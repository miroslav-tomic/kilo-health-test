import React from "react";

import { QuestionContent, Title, Description } from "assets/styles/common";

import SingleQuestionItem from "components/questions/SingleQuestionItem";

interface Props {
  data: any;
  onNext: any;
}

const SingleQuestion = ({ data, onNext }: Props) => {
  return (
    <QuestionContent>
			<Title>{data.label}</Title>

      {data.description && (
        <Description dangerouslySetInnerHTML={{ __html: data.description }} />
      )}

      {data.options.map((option: any) => (
        <SingleQuestionItem key={option.id} data={option} onClick={onNext} />
      ))}
		</QuestionContent>
  );
};

// eslint-disable-next-line import/no-default-export
export default SingleQuestion;
