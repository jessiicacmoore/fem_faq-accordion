import styled from 'styled-components';
import QuestionAccordionItem from '@/components/QuestionAccordionItem';
import { QUESTIONS, Question as QuestionType } from '@/constants/questions';

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

function QuestionAccordionList() {
  return (
    <StyledList>
      {QUESTIONS.map((item: QuestionType) => (
        <QuestionAccordionItem question={item} key={QuestionAccordionItem.id} />
      ))}
    </StyledList>
  );
}

export default QuestionAccordionList;
