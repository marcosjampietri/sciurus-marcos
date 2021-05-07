import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as d3 from "d3";
import AnimatedBar from "./components/AnimatedBarHooks";
import ControlPan from "./components/controlsComp";
import { initAction } from "./actions/filterAction";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initAction());
    }, [dispatch]);

    //access rootReducer
    const { yearnum, isLoding } = useSelector((state) => state.overview);

    const generateData = (value, length = yearnum) =>
        d3.range(length).map((item, index) => ({
            index: index,
            date: index,
            value:
                value === null || value === undefined ? Math.random() * 100 : value,
        }));

    const [data, setData] = useState(generateData());
    const changeData = () => {
        setData(generateData());
        // setData(generateData(null, Math.floor(Math.random() * 10 + 1)));
    };

    return (
        <div className="App">
            <div>
                <AnimatedBar
                    data={data}
                    width={500}
                    height={300}
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                />
            </div>

            <div>
                <button onClick={changeData}>Generate Data</button>
            </div>

            <ControlPan />
            <a href='https://github.com/marcosjampietri/sciurus-marcos'
                target='_blank'
                rel='noreferrer'>CODE ON GITHUB</a>
        </div>
    );
}

export default App;
