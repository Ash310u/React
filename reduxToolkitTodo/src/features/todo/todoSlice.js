import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos:[{
        id:1,
        title:'Hello World'
    }],
}

export const todoSlice = createSlice({
    name:'todos',
    initialState,
    // A slice reducer is the reducer responsible for handling actions and updating the data for a given slice.
    reducers:{ //'state' it gives the access of current initialstate properties and values.
        addTodo: (state, action) => {},
        removeTodo:(state, action) => {}
    }
})