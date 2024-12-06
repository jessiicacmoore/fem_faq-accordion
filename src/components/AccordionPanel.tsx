import { useRef } from 'react';
import { motion } from 'motion/react';
import styled from 'styled-components';
import { useManageFocusableElements } from '../hooks/useManageFocusableElements';

type AccordionPanelProps = {
  id: string;
  labelledBy: string;
  isOpen: boolean;
  text: string;
};

const StyledAccordionPanel = styled(motion.div)`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.5;
  overflow: hidden;
`;

const SHOW = {
  opacity: 1,
  height: 'auto',
};

const HIDE = {
  opacity: 0,
  height: 0,
};

function AccordionPanel({ id, labelledBy, isOpen, text }: AccordionPanelProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useManageFocusableElements(panelRef, isOpen);

  return (
    <StyledAccordionPanel
      ref={panelRef}
      id={id}
      aria-labelledby={labelledBy}
      role="region"
      aria-hidden={!isOpen}
      initial={HIDE}
      animate={isOpen ? SHOW : HIDE}
    >
      <p>{text}</p>
    </StyledAccordionPanel>
  );
}

export default AccordionPanel;
