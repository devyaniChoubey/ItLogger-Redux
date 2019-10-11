import {
    TECHS_ERROR,
    SET_LOADING,
    DELETE_TECH,
    ADD_TECH,
    GET_TECHS
} from './types';

//Get techs
export const getTechs = () => async dispatch => {
    try {
        setLoading()

        const res = await fetch('http://localhost:5000/techs');

        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }
}

//Add Techs
export const addTech = (tech) => async dispatch => {
    try {
        setLoading()

        const res = await fetch('http://localhost:5000/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json();

        dispatch({
            type: ADD_TECH,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }
}

//Delete Techs
export const deleteTechs = (id) => async dispatch => {
    try {
        setLoading();

        await fetch(`http://localhost:5000/techs/${id}`, {
            method: "DELETE"
        })

        dispatch({
            type: DELETE_TECH,
            payload: id
        })

    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }
}

//Setloading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}