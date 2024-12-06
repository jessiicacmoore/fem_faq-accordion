import styled from 'styled-components';
import plusIcon from '../assets/icon-plus.svg';
import minusIcon from '../assets/icon-minus.svg';

type AccordionButtonProps = {
  toggleAccordion: () => void;
  controls: string;
  isOpen: boolean;
  text: string;
};

const StyledAccordionButton = styled.button`
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  text-align: left;
  font-weight: ${({ theme }) => theme.font.weightAccordionButton};
  font-size: ${({ theme }) => theme.font.sizeAccordionButton};
  color: ${({ theme }) => theme.colors.text};
`;

function AccordionButton({
  toggleAccordion,
  controls,
  isOpen,
  text,
}: AccordionButtonProps) {
  const icon = isOpen ? minusIcon : plusIcon;
  return (
    <StyledAccordionButton
      onClick={toggleAccordion}
      aria-controls={controls}
      aria-expanded={isOpen}
    >
      <span>{text}</span>
      <img src={icon} alt="" aria-hidden="true" />
    </StyledAccordionButton>
  );
}

export default AccordionButton;
