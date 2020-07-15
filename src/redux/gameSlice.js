import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    id:"",
    name: "",
    socket: "",
  },
  reducers: {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    changeId: (state, action) => {
      state.id += action.payload;
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
    joinRoom: (state,action) => {
      state.id = action.payload[0];
      state.name = action.payload[1];
    },
    joinLobby: (state,action) => {
      state.socket = action.payload;
    }
  },
});

export const { changeId, changeName, joinRoom, joinLobby } = gameSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
//export const incrementAsync = amount => dispatch => {
//  setTimeout(() => {
//    dispatch(incrementByAmount(amount));
//  }, 1000);
//};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectId = state => state.game.id;

export const selectName = state => state.game.name;

export const selectSocket = state => state.game.socket;

export default gameSlice.reducer;
