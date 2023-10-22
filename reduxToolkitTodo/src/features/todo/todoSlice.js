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
    reducers:{ //'state' it gives the access of current initialstate properties and values.
        addTodo: (state, action) => {},
        removeTodo:(state, action) => {}
    }
})