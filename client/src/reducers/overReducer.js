const initState = {
    isLonding: true,
    yearnum: 10,
};

export const overReducer = (state = initState, action) => {
    switch (action.type) {
        case "INC_ROW":
            return {
                ...state,
                yearnum: state.yearnum + 5,
            };
        case "DEC_ROW":
            return {
                ...state,
                yearnum: state.yearnum - 5,
            };
        default:
            return {
                ...state,
            };
    }
};
