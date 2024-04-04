import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../../helper/helper";

const initialState = {
  selectedItems: [],
  itemCounter: 0,
  total: 0,
  checkOut: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((i) => i.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.total = sumPrice(state.selectedItems);
        state.itemCounter = sumQuantity(state.selectedItems);
        state.checkOut = false;
      }
    },
    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (i) => i.id !== action.payload.id
      );
      state.selectedItems = newSelectedItems;
      state.total = sumPrice(state.selectedItems);
      state.itemCounter = sumQuantity(state.selectedItems);
    },
    increase: (state, action) => {
      const increaseIndex = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItems[increaseIndex].quantity++;
      state.total = sumPrice(state.selectedItems);
      state.itemCounter = sumQuantity(state.selectedItems);
    },
    decrease: (state, action) => {
        const decreaseIndex = state.selectedItems.findIndex(
          (i) => i.id === action.payload.id
        );
        state.selectedItems[decreaseIndex].quantity--;
        state.total = sumPrice(state.selectedItems);
        state.itemCounter = sumQuantity(state.selectedItems);
      },
      chechOut:(state)=>{
        state.selectedItems=[];
        state.checkOut=true;
        state.itemCounter=0;
        state.total=0;
    }
  },
});

export default  cartSlice.reducer;
export const {decrease,increase,addItem,removeItem,chechOut}=cartSlice.actions;