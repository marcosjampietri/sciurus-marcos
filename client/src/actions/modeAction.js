export const multiAction = () => async (dispatch) => {
    dispatch({
        type: "MULTI_SLCT",
    });
};
export const singleAction = () => async (dispatch) => {
    dispatch({
        type: "SINGLE_SLCT",
    });
};


