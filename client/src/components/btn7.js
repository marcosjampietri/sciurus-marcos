import styled from "styled-components";

const Btn7 = ({ reads, somProp }) => {
  return (
    <Block>
      <Btn7Styled>
        <span>{reads}</span>
      </Btn7Styled>
        <div>{somProp}Maybe insert an icon</div>
    </Block>
  );
};

export default Btn7;

const Block = styled.button`
  width: 100%;
  height: 100%;
  // margin: 40px auto;
  background-color: transparent;
  text-align: center;
`;

const Btn7Styled = styled.button`
  width: 100%;
  height: 100%;
  color: #fff;
  border-radius: 5px;
  // padding: 10px 25px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  // margin: 20px;

  background: linear-gradient(
    0deg,
    #0050ff 0%,
    #021af9 100%
  );
  line-height: 42px;
  padding: 0;
  border: none;

  span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;

  }
  :before,
  :after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    background: #0050ff;
    box-shadow: ˝ -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
      -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
      7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }
  :before {
    height: 0%;
    width: 2px;
  }
  :after {
    width: 0%;
    height: 2px;
  }
  :hover {
    color: #0050ff;
    background: transparent;
  }
  :hover:before {
    height: 100%;
  }
  :hover:after {
    width: 100%;
  }
  span:before,
  span:after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    background: #0050ff;
    box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
      -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
      7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }
  span:before {
    width: 2px;
    height: 0%;
  }
  span:after {
    height: 2px;
    width: 0%;
  }
  span:hover:before {
    height: 100%;
  }
  span:hover:after {
    width: 100%;
  }
`;
