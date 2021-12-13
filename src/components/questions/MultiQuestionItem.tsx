import React from "react";
import styled from "styled-components/macro";

import tick from "assets/images/tick.svg";

interface Props {
  data: any;
  active: boolean;
  onClick: any;
}

interface ImgProps {
  size: number;
}

interface WrapperProps {
  active: boolean;
}

const MultiQuestionItem = ({ data, active, onClick }: Props) => {

  return (
    <Wrapper active={active} onClick={() => onClick(data.value)}>
			<ItemLeft>
				{data.custom && (
          <ItemImage src={`/images/questions/${data.custom.icon}.png`} size={data.custom.iconSize} />
        )}

        <ItemLabel>
					{data.label}
				</ItemLabel>
			</ItemLeft>
      {!active && (<InActiveRight />)}
      {active && (
        <ActiveRight>
          <RightIcon src={tick} alt="right-icon" />
        </ActiveRight>
      )}
		</Wrapper>
  );
};

// eslint-disable-next-line import/no-default-export
export default MultiQuestionItem;

const Wrapper = styled.div<WrapperProps>((props) => `
 	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: ${props.theme.spacing.sm}px;
	border-radius: ${props.theme.spacing.sm}px;
	border: 1.5px solid ${props.active ? props.theme.colors.primary : props.theme.colors.border};
	padding: ${props.theme.spacing.sm * 2.5}px;
	width: 100%;
	max-width: 400px;
	cursor: pointer;

	&: hover {
		border: 1.5px solid ${props.theme.colors.primary};
	}
	
	@media screen and (max-width: ${props.theme.breakpoints.sm}px) {
    padding: ${props.theme.spacing.sm * 1.5}px;
  }
	
`);

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

const InActiveRight = styled.div`
  display: block;
  border-radius: 50%;
 	width: ${props => props.theme.fonts.main}px;
	height: ${props => props.theme.fonts.main}px;
	background-color: ${props => props.theme.colors.secondary};
`;

const ActiveRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
 	width: ${props => props.theme.fonts.main}px;
	height: ${props => props.theme.fonts.main}px;
	background-color: ${props => props.theme.colors.primary};
`;

const RightIcon = styled.img`
	width: ${props => props.theme.fonts.main - 6}px;
	height: ${props => props.theme.fonts.main - 6}px;
`;


