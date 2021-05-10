import MultiSelect from "../components/multiSelectComp";

const initState = {
    modeName: "",
};

export const modeReducer = (state = initState, action) => {
    switch (action.type) {
        case "MULTI_SLCT":
            return {
                ...state,
                modeName: "MultiSelect",
                currentComp: MultiSelect,

            };
        case "SINGLE_SLCT":
            return {
                ...state,
                modeName: "SingleSelect",
            };
        case "SLIDER_SLCT":
            return {
                ...state,
                modeName: "SliderSelect",
            };
        default:
            return {
                ...state,
            };
    }
};
