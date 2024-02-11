import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers:{
        // write all functions here related to users
        addUser(state, action){},
        removeUser(state, action){},
        updateUser(state, action){},
    }

})

export default userSlice.reducer;