import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const foodsStore = createSlice(
    {
        name: "foods",
        initialState: {
            foods: []
        },
        reducers: {
            setFoodsList: (state, action) => {
                state.foods = action.payload
            }
        }
    }
);
const {setFoodsList} = foodsStore.actions;

const fetchFoodsList = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const res = await fetch(" http://localhost:3004/takeaway");
            console.log(res, 'res')
            dispatch(setFoodsList(res.data))
        };

    }
}

export {fetchFoodsList}

const foodsReducer = foodsStore.reducer;

export default foodsReducer;