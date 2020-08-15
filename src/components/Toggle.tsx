import React from "react";
import { ReactComponent as MoonIcon } from "../icons/moon.svg";
import { ReactComponent as SunIcon } from "../icons/sun.svg";
import styled from "styled-components";

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;

    &.sun,
    &.moon {
      &.show {
        transform: translateY(0);
      }
      &.hide {
        transform: translateY(100px);
      }
    }
  }
`;

export interface ToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <>
      <ToggleContainer onClick={toggleTheme}>
        <SunIcon className={`sun ${isLight ? "show" : "hide"}`} />
        <MoonIcon className={`moon ${isLight ? "hide" : "show"}`} />
      </ToggleContainer>
    </>
  );
};

export default Toggle;
