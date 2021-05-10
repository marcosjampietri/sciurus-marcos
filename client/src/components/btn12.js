import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";


import { multiAction, singleAction } from "../actions/modeAction";


const Btn12 = () => {
  const dispatch = useDispatch();

  const changeMode = () => {
    dispatch(singleAction());
  };
  const { modeName, currentComp } = useSelector((state) => state.mode);
  return (
    <Block>
      <Btn12Styled onClick={changeMode}>
        <span>CHANGE MODE </span>
        <span>{modeName}</span>
      </Btn12Styled>
    </Block>
  );
};

export default Btn12;

const Block = styled.div`
  margin: 5px 0px 70px 10px;
  background-color: transparent;
  text-align: center;
`;

const Btn12Styled = styled.button`
  width: 100%;
  height: 100%;
  color: #fff;
  border-radius: 5px;
  // padding: 10px 25px;
  font-family: "arial black";
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  position: relative;
  right: 20px;
  bottom: 20px;
  border: none;
  box-shadow: none;
  line-height: 60px;
  -webkit-perspective: 900px;
  perspective: 900px;
  perspective-origin: -0.2%;

  span {
    background: rgb(0, 128, 254);
    background: linear-gradient(
      0deg,
      rgba(0, 143, 255, 1) 0%,
      rgba(2, 69, 251, 1) 100%
    );
    display: block;
    position: absolute;
    width: 50%;
    height: 60px;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin: 0;
    text-align: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.63s;
    transition: all 0.63s;
  }
  span:nth-child(1) {
    background: rgb(0, 128, 254);
    background: linear-gradient(
      0deg,
      rgba(0, 143, 255, 1) 0%,
      rgba(2, 69, 251, 1) 100%
    );
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
    -webkit-transform: rotateX(90deg);
    -moz-transform: rotateX(90deg);
    transform: rotateX(90deg);
    -webkit-transform-origin: 50% 50% -30px;
    -moz-transform-origin: 50% 50% -30px;
    transform-origin: 50% 50% -30px;
  }
  span:nth-child(2) {
    background: rgb(0, 128, 254);
    background: linear-gradient(
      0deg,
      rgba(0, 143, 255, 1) 0%,
      rgba(2, 69, 251, 1) 100%
    );
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transform-origin: 50% 50% -30px;
    -moz-transform-origin: 50% 50% -30px;
    transform-origin: 50% 50% -30px;
  }
  :hover span:nth-child(1) {
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    transform: rotateX(0deg);
  }
  :hover span:nth-child(2) {
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    color: transparent;
    -webkit-transform: rotateX(-90deg);
    -moz-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
  }
`;
