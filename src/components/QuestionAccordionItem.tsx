import { useState } from 'react';
import styled from 'styled-components';
import { Question as QuestionType } from '../constants/questions';

type StyledAccordionPanelProps = {
  $isOpen: boolean;
};

const StyledAccordionPanel = styled.div<StyledAccordionPanelProps>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

function QuestionAccordionItem({ question }: { question: QuestionType }) {
  const [isOpen, setIsOpen] = useState(false);
  const headingId = `question${question.id}-heading`;
  const contentId = `question${question.id}-content`;

  return (
    <li>
      <h2 id={headingId}>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-controls={contentId}
          aria-expanded={isOpen}
        >
          <span>{question.question}</span>
        </button>
      </h2>
      <StyledAccordionPanel
        id={contentId}
        aria-labelledby={headingId}
        role="region"
        $isOpen={isOpen}
      >
        <p>A: {question.answer}</p>
      </StyledAccordionPanel>
    </li>
  );
}

export default QuestionAccordionItem;
