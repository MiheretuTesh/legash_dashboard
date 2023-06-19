import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#5DADAA" : "#5DADAA")};
  background-color: ${(props) => (props.border ? "transparent" : "#5DADAA")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#5DADAA" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#1f8783")};
    border: 1px solid #5dadaa;
    color: ${(props) => (props.border ? "#5DADAA" : "#fff")};
  }
`;
