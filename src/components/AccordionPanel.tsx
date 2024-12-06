import styled from 'styled-components';

type AccordionPanelProps = {
  id: string;
  labelledBy: string;
  isOpen: boolean;
  text: string;
};

const StyledAccordionPanel = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.5;
`;

function AccordionPanel({ id, labelledBy, isOpen, text }: AccordionPanelProps) {
  return (
    <StyledAccordionPanel
      id={id}
      aria-labelledby={labelledBy}
      role="region"
      $isOpen={isOpen}
    >
      <p>{text}</p>
    </StyledAccordionPanel>
  );
}

export default AccordionPanel;
