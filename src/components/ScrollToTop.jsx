import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <StyledButton onClick={scrollToTop}>
          <div className="arrow">
          <svg viewBox="0 0 384 512" className="svgIcon">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
          </div>
          <span className="button-text">Back to Top</span>
        </StyledButton>
      )}
    </>
  );
};

const StyledButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &:hover {
    width: 160px;
    border-radius: 50px;
    background-color: rgb(181, 160, 255);
  }

  &:hover .arrow .svgIcon {
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  &:hover .button-text {
    font-size: 14px;
    opacity: 1;
    transition-delay: 0.2s;
  }

  .button-text {
    position: absolute;
    left: 60px;
    font-size: 0;
    color: white;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  .arrow .svgIcon {
    width: 14px;
    height: 14px;
    fill: white;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
`;

export default ScrollToTopButton;
