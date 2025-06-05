import { createSlice } from "@reduxjs/toolkit";
import toprated from "../hooks/toprated";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowplayingmovies:null,
        trailervideo:null,
        mostpopularmovies:null,
        topratedmovies:null,
        upcomingmovies:null,
    },
    reducers:{
        addmovies:(state,action)=>{
            state.nowplayingmovies=action.payload;

        },
        addtrailer:(state,action)=>{
            state.trailervideo=action.payload;
        },
        addpopularmovies:(state,action)=>{
            state.mostpopularmovies=action.payload;
        },
        addtopratedmovies:(state,action)=>{
            state.topratedmovies=action.payload;
        },
        addupcomingmovies:(state,action)=>{
            state.upcomingmovies=action.payload;
        }

    }
})

export const {addmovies,addtrailer,addpopularmovies,addtopratedmovies,addupcomingmovies}=movieSlice.actions
export default movieSlice.reducer;