import { createSlice } from "@reduxjs/toolkit";

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: initialStateCustomer,
  reducers: {
    createCustomer: {
      prepare(name, nationalID) {
        return {
          payload: { name, nationalID, createAt: new Date().toISOString() },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.name;
        state.nationalID = action.payload.nationalID;
        state.createAt = action.payload.createAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export default customerSlice.reducer;

export const { createCustomer, updateName } = customerSlice.actions;
/*
export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
      };

    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
}

export function createCustomer(fullName, nationalID) {
  return { type: "customer/createCustomer", payload: { fullName, nationalID } };
}

export function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}
*/
