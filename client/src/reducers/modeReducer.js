import MultiSelect from "../components/multiSelectComp";

const initState = {
    modeName: "",
    currentComp: null,
};

export const modeReducer = (state = initState, action) => {
    switch (action.type) {
        case "MULTI_SLCT":
            return {
                ...state,
                modeName: "Multi Selection",
                currentComp: MultiSelect,
            };
        case "SINGLE_SLCT":
            return {
                ...state,
                modeName: "Single Selection",
            };
        case "SLIDER_SLCT":
            return {
                ...state,
                modeName: "Slider Selection",
            };
        default:
            return {
                ...state,
            };
    }
};
