import {
  combineReducers,
  combineSlices,
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
let initialdata = {
  data: [],
  status: "",
  error: "",
};
let initialmenulist = {
  item: [],
  noitem: [],
};
export let fetchdata = createAsyncThunk("fetch/data", async () => {
  try {
    let res = await fetch("http://localhost:8000/TablesDetails");
    let responce = await res.json();
    return responce;
  } catch (e) {
    throw e;
  }
});
let userslicefetch = createSlice({
  name: "table",
  initialState: initialdata,
  extraReducers: (builder) => {
    builder
      .addCase(fetchdata.pending, (state, action) => {
        state.status = "fetching data..";
      })
      .addCase(fetchdata.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchdata.rejected, (state, action) => {
        state.error = "data not found ";
        state.data = [];
        state.status = "data not found";
      });
  },
});
let userslicelist = createSlice({
  name: "menulist",
  initialState: initialmenulist,
  reducers: {
    ADD: (state, action) => {
      state.item.push(action.payload);
    },
    DELETE: (state, action) => {
      state.item = state.item.filter((item) => item !== action.payload);
      state.noitem = state.noitem.filter((noitem) => noitem !== action.payload);
    },
    ADDNOITEM: (state, action) => {
      state.noitem.push(action.payload);
    },

    EDIT: (state, action) => {
      const { index, newItem } = action.payload;
      state.item[index] = newItem;
    },
  },
});
let rootRedusere = combineReducers({
  tables: userslicefetch.reducer,
  list: userslicelist.reducer,
});
let store = configureStore({
  reducer: {
    user: rootRedusere,
  },
});
export default store;
export const { ADD, ADDNOITEM, DELETE, EDIT } = userslicelist.actions;
