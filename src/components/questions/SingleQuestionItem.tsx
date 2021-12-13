import React from "react";
import styled from "styled-components/macro";

import arrowRight from "assets/images/arrowRight.svg";

interface Props {
  data: any;
  onClick: any;
}

interface ImgProps {
  size: number;
}

const SingleQuestionItem = ({ data, onClick }: Props) => {

  return (
    <Wrapper onClick={() => onClick(data.value)}>
			<ItemLeft>
				{data.custom && (
          <ItemImage src={`/images/questions/${data.custom.icon}.png`} size={data.custom.iconSize} />
        )}

        <ItemLabel>
					{data.label}
				</ItemLabel>
			</ItemLeft>
			<RightIcon src={arrowRight} alt="right-icon" />
		</Wrapper>
  );
};

// eslint-disable-next-line import/no-default-export
export default SingleQuestionItem;

const Wrapper = styled.div`
 	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: ${props => props.theme.spacing.sm}px;
	border-radius: ${props => props.theme.spacing.sm}px;
	border: 1.5px solid ${props => props.theme.colors.border};
	padding: ${props => props.theme.spacing.sm * 2.5}px;
	width: 100%;
	max-width: 400px;
	cursor: pointer;

	&: hover {
		border: 1.5px solid ${props => props.theme.colors.primary};
	}
	
	@media screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    padding: ${props => props.theme.spacing.sm * 1.5}px;
  }
`;

const ItemLeft = styled.div`
 	display: flex;
	align-items: center;
`;

const ItemImage = styled.img<ImgProps>((props) => `
	margin-right: ${props.size / 4}px;
	width: ${props.size}px;
	height: ${props.size}px;
`);

const ItemLabel = styled.div`
 	color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fonts.main}px;
  font-weight: 700;
`;

const RightIcon = styled.img`
	width: ${props => props.theme.fonts.main}px;
	height: ${props => props.theme.fonts.main}px;
`;


