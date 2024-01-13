import { createSlice } from "@reduxjs/toolkit";
import { getCatData, getDogData } from "./api/animals";


const initialState = {
    status: 'idel',
    fact: '',
    img: '',
    refresh: false,
    category: 'Dogs',
    loading: true
};


export const customReducer = createSlice({

    name: "AnimalFatcs",
    initialState,

    reducers: {

        refreshPage: (state, action) => {
            state.refresh = !state.refresh;
        },

        changeAnimal: (state, action) => {
            state.category = action.payload.val;
        }

    },

    extraReducers(builder) {
        builder
            .addCase(getCatData.pending, (state) => {
                state.status = "Loading";
                state.loading = true;
            })

            .addCase(getCatData.fulfilled, (state, action) => {
                state.status = "Fulfilled";
                state.fact = action.payload.facts;
                state.img = action.payload.img;
                state.loading = false;
            })

            .addCase(getCatData.rejected, (state, action) => {
                state.status = "Rejected";
                state.loading = false;
                console.log(action.error.message);
            })


            // Fetching Data From 

            .addCase(getDogData.pending, (state) => {
                state.status = "Loading";
                state.loading = true;
            })

            .addCase(getDogData.fulfilled, (state, action) => {
                state.status = "Fulfilled";
                state.fact = action.payload.facts;
                state.img = action.payload.img;
                state.loading = false;
            })

            .addCase(getDogData.rejected, (state, action) => {
                state.status = "Rejected";
                state.loading = false;
                console.log(action.error.message);
            });
    }
});

export const { refreshPage, changeAnimal } = customReducer.actions;

export default customReducer.reducer;
