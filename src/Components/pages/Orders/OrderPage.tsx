import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../../redux/reducers/store";
import OrderPageView from "./OrderPageView";

const OrderPage = () => {
  const dispatch = useDispatch();
  const orders: [] = useSelector((state: any) => state.store.orders);
  const deleteItem = useCallback((id: number) => {
    dispatch(store.actions.deleteOrder(id));
  }, []);

  return <OrderPageView deleteItem={deleteItem} orders={orders} />;
};

export default OrderPage;
