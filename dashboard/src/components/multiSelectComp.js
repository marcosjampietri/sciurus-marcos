import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { incRowAction, decRowAction } from "../actions/filterAction";

const MultiSelect = () => {
  //dispatch buttons
  const dispatch = useDispatch();

  //access rootReducer
  {
    /* const { yearnum, isLoding } = useSelector((state) => state.overview); */
  }

  const [checked, setChecked] = useState("checked");

  const handleCheck = (e) => {
    setChecked(e.target.value);
  };

  const incRow = () => {
    dispatch(incRowAction());
  };
  const decRow = () => {
    dispatch(decRowAction());
  };

  return (
    <Block>
      <Mode>CHECKBOX MODE </Mode>
      <Container>
        <Label>ONE YEAR</Label>
        <Checkbox type="checkbox" value={checked} onChange={handleCheck} />
        <Checkmark className="checkmark"></Checkmark>
      </Container>
      <Container>
        <Label>SOME YEARS</Label>
        <Checkbox type="checkbox" value={checked} onChange={handleCheck} />
        <Checkmark className="checkmark"></Checkmark>
      </Container>
      <Container>
        <Label>N YEARS</Label>
        <Checkbox type="checkbox" value={checked} onChange={handleCheck} />
        <Checkmark className="checkmark"></Checkmark>
      </Container>
    </Block>
  );
};

export default MultiSelect;

const Block = styled.div`
  height: 100%;
`;

const Mode = styled.h3`
  font-family: arial;
  color: #2d33e2;
  padding: 10px 20px 40px 20px;
  margin: 0px;
`;

const Container = styled.label`
  display: flex;
  align-content: space-around;

  // display: flex;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  :hover > .checkmark {
    transition: 0.2s;
    transform: scale(0.99);
    box-shadow: -1px -1px 5px #7e7e7e, 2px 3px 2px #fff,
      inset -1px -1px 5px #7e7e7e;
    background-image: linear-gradient(#d4d4d4 0%, #ababab 90%);
  }
`;

const Checkmark = styled.span`
  /* Create a custom checkbox */
  position: absolute;
  top: 0;
  left: 0;
  height: 35px;
  width: 180px;
  border-radius: 20px;
  border: 1px solid #8f9092;
  background-image: linear-gradient(#fff 0%, #d8d9db 90%);
  transition: 0.3s;
  box-shadow: -1px -1px 5px #7e7e7e, 2px 3px 2px #fff, inset 0px 0px 0px #7e7e7e;

  /* Create the checkmark/indicator (hidden when not checked) */
  :after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Style the checkmark/indicator */
  :after {
    left: 20px;
    top: 6px;
    width: 5px;
    height: 15px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const Checkbox = styled.input`
  /* Hide the browser's default checkbox */
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  /* When the checkbox is checked, add a blue background */
  :checked ~ .checkmark {
    background-image: linear-gradient(
    #00c2ff 0%,
    #162eda 90%);
  }

  /* Show the checkmark when checked */
  :checked ~ .checkmark: after {
    display: block;
  }
`;

const Label = styled.h4`
  position: relative;
  top: -50px;
  left: 0px;
  color: hsla(0, 0%, 38%, 1);
  font-size: 0.9em;
  padding: 10px;
  text-shadow: 0px 1px 1px #fff;
  font-family: arial;
  z-index: 1;
`;
