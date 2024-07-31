import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: [],
    allCount: 0
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addInBasket(state, action){
      const availability = state.posts.find(p => p.id === action.payload.id);
      
      if(availability){
        const have = state.posts.findIndex(p => p.id === action.payload.id);
        state.posts[have].count++;
        state.allCount++;
      } else {
        state.posts.push({
          ...action.payload,
          count: 1
        })
        state.allCount++;
      }
    },
    deleteFromBasket(state, action){
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.payload)
      }
    }
  }
});

export const {addInBasket, deleteFromBasket} = basketSlice.actions

export default basketSlice.reducer;