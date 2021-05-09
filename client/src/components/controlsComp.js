import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { incRowAction, decRowAction } from "../actions/filterAction";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineX } from "react-icons/hi";
import MultiSelect from "./multiSelectComp";
import SingleSelect from "./singleSelectComp";
import Btn7 from "./btn7";
import Btn12 from "./btn12";

const ControlPan = () => {
  //dispatch buttons
  const dispatch = useDispatch();

  //access rootReducer
  const { yearnum, isLoding } = useSelector((state) => state.overview);
  const incRow = () => {
    dispatch(incRowAction());
  };
  const decRow = () => {
    dispatch(decRowAction());
  };

  const iconStyle = {
    fontSize: "32px",
    transform: "rotate(90deg)",
  };

  return (
    <Block>
      <Title>DATA PAID</Title>
      <Container>
        <CurrentMode>
          <Btn12 modeName={"MULTI SELECTION"} />
          <MultiSelect />
        </CurrentMode>
        <Fix>
          <Tab className="tab">
            <GiHamburgerMenu style={iconStyle} />
            {/* <div>SWITCH MODE</div> */}
          </Tab>
          <SelectorMode className="selectormode">
            <Btn7 reads={"SLIDER MODE"} />
            <Btn7 reads={"RADIO MODE"} />
          </SelectorMode>
        </Fix>
      </Container>
    </Block>
  );
};

export default ControlPan;

const Block = styled.div`
  border: 1px solid #b9bde7;
  max-width: 700px;
  border-radius: 10px;
  padding: 10px;
  background-color: #f8f8f8;
`;

const Title = styled.h2`
  font-family: "arial black";
  font-size: 30px;
  padding: 0px 30px;
  margin: 0px;
  color: #1848e1;
`;
const Container = styled.div`
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  border-radius: 20px;
`;

const CurrentMode = styled.div`
  border-radius: 10px;
  padding: 15px;
  grid-column: 1;
  grid-row: 1;
  box-shadow: inset -2px 3px 10px hsla(228, 76%, 47%, 0.5);
`;

const Fix = styled.div`
  position: relative;
  grid-column: 1;
  grid-row: 1;
  transition: 0.3s;
  transform: translate(80%);
  pointer-events: none;

  :hover > .selectormode {
    transition: 0.6s;
    opacity: 1;
    width: 80%;
    transform: translate(-100%);
    z-index: 3;
  }
  :hover > .tab {
    transition: 0.6s;
    transform: translate(-400%);
    opacity: 0;
  }
  :hover > div {
    transition: 0.6s;
    cursor: pointer;
  }
`;

const Tab = styled.div`
  position: absolute;
  pointer-events: all;

  top: 20px;
  background-color: #f8f8f8;
  // border: 2px outset lightgray;
  border-right: none;
  border-radius: 50px 0px 0px 50px;
  font-size: 0.5em;
  opacity: 1;
  width: calc(20% + 1px);
  height: 70px;

  transition: 0.3s;

  box-shadow: -5px 4px 6px hsla(228, 76%, 47%, 0.5);

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SelectorMode = styled.div`
  // border-radius: 20px;
  position: absolute;
  left: 20%;
  pointer-events: all;
  -webkit-transform: translate(-100%, 0);

  height: 100%;
  width: 0%;
  background-color: white;
  box-shadow: inset 1px 0px 0px 1px hsla(228, 76%, 47%, 0.5);
  transition: 0.3s;
  opacity: 0;
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
