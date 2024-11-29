import starIcon from '@/assets/icon-star.svg';
import styled from 'styled-components';

type TitleProps = React.HtmlHTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};

const StyledH1 = styled.h1`
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.font.weightHeading};
  margin-block: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
`;

function Title({ children, ...props }: TitleProps) {
  return (
    <StyledH1 {...props}>
      <img src={starIcon} alt="" />
      <span>{children}</span>
    </StyledH1>
  );
}

export default Title;
