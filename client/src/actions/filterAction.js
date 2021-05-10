export const initAction = () => async (dispatch) => {
    dispatch({
        type: "INIT_DATA",
    });
};
export const incRowAction = () => async (dispatch) => {
    dispatch({
        type: "INC_ROW",
    });
};

export const decRowAction = () => async (dispatch) => {
    dispatch({
        type: "DEC_ROW",
    });
};
