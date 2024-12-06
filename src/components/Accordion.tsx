import styled from 'styled-components';
import AccordionItem from './AccordionItem';
import { QUESTIONS, Question as QuestionType } from '../constants/questions';

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

function Accordion() {
  return (
    <StyledList>
      {QUESTIONS.map((item: QuestionType) => (
        <AccordionItem question={item} key={item.id} />
      ))}
    </StyledList>
  );
}

export default Accordion;
