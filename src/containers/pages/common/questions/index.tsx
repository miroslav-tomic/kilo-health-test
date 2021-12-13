import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components/macro";

import { init, edit, postAnswers } from "store/question/actions";

import Layout from "containers/layout/questions";
import SingleQuestion from "./types/single";
import MultiQuestion from "./types/multi";
import InfoQuestion from "./types/info";
import InputQuestion from "./types/input";

import Loading from "components/questions/Loading";

interface QuestionPageProps {
  init: any;
  edit: any;
  postAnswers: any;
  isPosting: boolean;
  answers: any;
  questions: any;
}

const QuestionPage = ({ init, edit, postAnswers, isPosting, answers, questions }: QuestionPageProps) => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [percent, setPercent] = useState(20);

  const questionId = Number(id);
  const data = questions.questions ? questions.questions[questionId] : {};
  const type = data.type;
  const idEnd = questionId === questions.questions?.length - 1;

  useEffect(() => {
    if (!questions.questions) {
      history.push('/');
    }
  });

  const onNext = (value: any) => {
    if (idEnd) {
      // TODO choose localstorage and redux-store
      setTimeout(() => setPercent(80), 500);

      // const sendData = answers;

      let answersString = localStorage.getItem('questionAnswers');
      const sendData = JSON.parse(answersString || '{}');

      postAnswers(sendData).then(() => {
        setPercent(100);
        init();
        localStorage.clear();
        history.push('/dashboard');
      }).catch(() => {
        history.push(`/questions/${questionId}`);
      });
    } else {
      // TODO choose localstorage and redux-store
      edit({ [data.key]: value });
      // const newData = { ...answers, [data.key]: value };

      let answersString = localStorage.getItem('questionAnswers');
      const originData = JSON.parse(answersString || '{}');
      const newData = { ...originData, [data.key]: value };
      localStorage.setItem('questionAnswers', JSON.stringify(newData));

      history.push(`/questions/${questionId + 1}`);
    }
  };

  return (
    <Layout id={questionId}>
			{!isPosting && (
        <QuestionWrapper>
					{type === 'single' && (<SingleQuestion data={data} onNext={onNext} />)}
          {type === 'multiple' && (<MultiQuestion data={data} onNext={onNext} />)}
          {type === 'info' && (<InfoQuestion data={data} onNext={onNext} />)}
          {type === 'input' && (<InputQuestion data={data} onNext={onNext} />)}
				</QuestionWrapper>
      )}

      <Loading display={isPosting} percent={percent} />
		</Layout>
  );
};

const mapStateToProps = (state: any) => ({
  questions: state.question.questions,
  isPosting: state.question.isPosting,
  answers: state.question.answers,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
  {
    init, edit, postAnswers
  },
  dispatch
);

// eslint-disable-next-line import/no-default-export
export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);

const QuestionWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	max-width: 700px;
`;
