import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCatData = createAsyncThunk("CatsData", async () => {

    try {
        const facts = await axios.get("https://catfact.ninja/fact").then((res) => {
            return res.data.fact;
        });

        const img = await axios.get("https://api.thecatapi.com/v1/images/search").then((res) => {
            return res.data[0].url;
        });


        const res = {
            facts,
            img
        };
        return res;
    } catch (error) {
        console.log(error);

    }
});


export const getDogData = createAsyncThunk("DogsData", async () => {

    const facts = await axios.get("https://catfact.ninja/fact").then((res) => {
        return res.data.fact;
    });


    const img = await axios.get("https://api.thedogapi.com/v1/images/search").then((res) => {
        return res.data[0].url;
    });


    const res = {
        facts,
        img
    };
    return res;
});