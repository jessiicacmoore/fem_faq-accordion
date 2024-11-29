import React from 'react';
import styled from 'styled-components';
import mobileImg from '@/assets/background-pattern-mobile.svg';

type ContainerProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${({ theme }) =>
    `url("${mobileImg}"), linear-gradient(to right, ${theme.colors.secondary}, ${theme.colors.secondary})`};
  background-repeat: no-repeat;
  background-size: contain;
`;

const StyledContainer = styled.div`
  width: 85vw;
  max-width: 640px;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadow.lg};
`;

function Container({ children, ...props }: ContainerProps) {
  return (
    <StyledWrapper>
      <StyledContainer {...props}>{children}</StyledContainer>
    </StyledWrapper>
  );
}

export default Container;
