import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: JSON.parse(localStorage.getItem("orders")) || [],
  feedbacks: JSON.parse(localStorage.getItem("feedbacks")) || [],
  loading: false,
  feedbackVesible: false,
};

export const store = createSlice({
  name: "store",
  initialState,
  reducers: {
    setOrder(state, { payload }) {
      state.orders.push(payload);
      state.orders.forEach((element, index) => {
        element.id = index + 1;
      });
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
    deleteOrder(state, { payload }) {
      state.orders = state.orders.filter((order) => order.id !== payload);
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
    setLoading(state, { payload }) {
      state.loading = payload;
    },
    setFeedback(state, { payload }) {
      state.feedbacks.push(payload);
      state.feedbackVesible = false;
      localStorage.setItem("feedbacks", JSON.stringify(state.feedbacks));
    },
    deleteFeedback(state, { payload }) {
      state.feedbacks = state.feedbacks.filter(
        (fb, index) => index !== payload
      );
      localStorage.setItem("feedbacks", JSON.stringify(state.feedbacks));
    },
    setVisibleArea(state) {
      state.feedbackVesible = true;
    },
  },
});
export default store.reducer;
