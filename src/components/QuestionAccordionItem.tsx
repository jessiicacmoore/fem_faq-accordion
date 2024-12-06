import { useState } from 'react';
import styled from 'styled-components';
import { Question as QuestionType } from '../constants/questions';

const StyledAccordionItem = styled.li`
  & + li {
    border-top: ${({ theme }) => `1px solid ${theme.colors.lightGray}`};
  }
`;

const StyledAccordionButton = styled.button`
  display: block;
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  text-align: left;
  font-weight: ${({ theme }) => theme.font.weightAccordionButton};
  font-size: ${({ theme }) => theme.font.sizeAccordionButton};
  color: ${({ theme }) => theme.colors.text};
`;

const StyledAccordionPanel = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.5;
`;

function QuestionAccordionItem({ question }: { question: QuestionType }) {
  const [isOpen, setIsOpen] = useState(false);
  const headingId = `question${question.id}-heading`;
  const contentId = `question${question.id}-content`;

  return (
    <StyledAccordionItem>
      <h2 id={headingId}>
        <StyledAccordionButton
          onClick={() => setIsOpen((prev) => !prev)}
          aria-controls={contentId}
          aria-expanded={isOpen}
        >
          <span>{question.question}</span>
        </StyledAccordionButton>
      </h2>
      <StyledAccordionPanel
        id={contentId}
        aria-labelledby={headingId}
        role="region"
        $isOpen={isOpen}
      >
        <p>A: {question.answer}</p>
      </StyledAccordionPanel>
    </StyledAccordionItem>
  );
}

export default QuestionAccordionItem;
