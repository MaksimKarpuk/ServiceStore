import React, { useCallback, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../../redux/reducers/store";
import OrderPageView from "./OrderPageView";

interface IStote {
  orders: [];
  feedbacks: [];
  loading: boolean;
  feedbackVesible: boolean;
}
interface IState {
  store: IStote;
}

const OrderPage: FC = () => {
  const dispatch = useDispatch();
  const orders: [] = useSelector((state: IState) => state.store.orders);
  const deleteItem = useCallback((id: number) => {
    dispatch(store.actions.deleteOrder(id));
  }, []);

  return <OrderPageView deleteItem={deleteItem} orders={orders} />;
};

export default OrderPage;
