import { createSlice, current } from "@reduxjs/toolkit";
import { createFeatureSelector } from "@ngrx/store";
import { goodsReceiptNoteInterface, ListInputProductInterface, productinbillInterface } from "./store.model";

const counterSlice = createSlice({

  name: "counter",
  initialState: {
    ListInputProduct: [] as ListInputProductInterface[],
    listGoodsReceiptNote: [] as any,
    goodsReceiptNote: {
      goodsReceiptNoteTypeId: 2,
      createModel: [{
        batches: []
      }] as any,
      invoiceId: 0,
      isFull: true
    }
  },
  reducers: {
    goodReceiptNote: (state, action) => {
      state.goodsReceiptNote = action.payload
      console.log(action.payload)
    },
    resetState: (state, action) => {
      state.ListInputProduct = [],
      state.listGoodsReceiptNote = [],
      state.goodsReceiptNote = {
        goodsReceiptNoteTypeId: 2,
        createModel: [{
          batches: []
        }],
        invoiceId: 0,
        isFull: true
      }
    },
    addProductToListInput: (state, action) => {
      state.ListInputProduct = action.payload
      console.log(state.ListInputProduct)
    },
    addgoodsReceiptNote: (state, action) => {
      state.listGoodsReceiptNote = action.payload
      console.log(state.listGoodsReceiptNote);
    },
  }
});

const {
  reducer,
  actions: {
    addProductToListInput,
    addgoodsReceiptNote,
    resetState,
    goodReceiptNote,

  },
  name
} = counterSlice;

export default counterSlice.reducer;
export {
  name,
  addProductToListInput,
  addgoodsReceiptNote,
  resetState,
  goodReceiptNote,
};

export const selectFeature = createFeatureSelector<ReturnType<typeof reducer>>(
  name
);
