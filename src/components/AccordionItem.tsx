import { useState } from 'react';
import styled from 'styled-components';
import AccordionButton from './AccordionButton';
import AccordionPanel from './AccordionPanel';
import { Question as QuestionType } from '../constants/questions';

type AccordionItemProps = {
  question: QuestionType;
};

const StyledAccordionItem = styled.li`
  & + li {
    border-top: ${({ theme }) => `1px solid ${theme.colors.lightGray}`};
  }
`;

function AccordionItem({
  question: { id, question, answer },
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const headingId = `question${id}-heading`;
  const contentId = `question${id}-content`;

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  return (
    <StyledAccordionItem>
      <h2 id={headingId}>
        <AccordionButton
          toggleAccordion={toggleAccordion}
          isOpen={isOpen}
          controls={contentId}
          text={question}
        />
      </h2>
      <AccordionPanel id={contentId} labelledBy={headingId} isOpen={isOpen} text={answer} />
    </StyledAccordionItem>
  );
}

export default AccordionItem;
