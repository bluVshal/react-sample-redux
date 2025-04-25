import { configureStore, createAsyncThunk , createSlice } from "@reduxjs/toolkit";

export const fetchJoke = createAsyncThunk('joke/fetch', async() => {
    const response = await fetch('https://icanhazdadjoke.com/',{
        headers: {Accept: 'application/json'}
    })
    const data = await response.json();
    return data.joke
});

const jokeSlice = createSlice({
    name: "joke",
    initialState: {
        value: "",
        status: "idle",
    },
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(fetchJoke.pending, state => {
            state.status = 'loading';
        })
        .addCase(fetchJoke.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.value = action.payload;
        })
        .addCase(fetchJoke.rejected, state => {
            state.status = 'failed';
            state.value = 'Failed to fetch joke';
        })
    }
});

const counterSlice = createSlice({
    name:'counter',
    initialState: 0,
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1,
        reset : () => 0,
    },
});


export const { increment, decrement, reset } = counterSlice.actions;

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        joke: jokeSlice.reducer,
    },
});

export default store;