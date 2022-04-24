import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BasicHTMLTextAreaProps } from "../../common/types";
import { bottomMargin, horizontalMargin, secondaryText } from "../../common/styles";

export default function CardTextArea({ children, value, onInput, onChange, ...rest }: BasicHTMLTextAreaProps) {
  const [scrollHeight, setScrollHeight] = useState(0);
  const ref = useRef<HTMLTextAreaElement>(null);

  const updateScrollHeight = () => {
    if (ref.current == null) {
      return;
    }

    setScrollHeight(ref.current.scrollHeight);
  };

  useEffect(() => {
    updateScrollHeight();
  }, [value]);

  return (
    <TextArea
      {...rest}
      ref={ref}
      value={value}
      onInput={(e) => {
        onInput?.call(null, e);
        updateScrollHeight();
      }}
      onChange={(e) => {
        onChange?.call(null, e);
        updateScrollHeight();
      }}
      scrollHeight={scrollHeight}
    >
      {children}
    </TextArea>
  );
}

const TextArea = styled.textarea<{ scrollHeight: number }>`
  border: none;
  padding: 0;
  min-height: 55px;
  height: ${({ scrollHeight }) => `${scrollHeight}px`};
  resize: none;

  ${secondaryText}
  ${horizontalMargin} 
  ${bottomMargin}
`;
