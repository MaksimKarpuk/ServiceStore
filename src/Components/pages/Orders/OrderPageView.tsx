import React from "react";
import style from "./styles.module.scss";

interface IOrderPageViewProps {
  order: JSX.Element;
  orders: string[];
}

const OrderPageView = ({ order, orders }: IOrderPageViewProps) => {
  return (
    <div className={style.container}>
      {orders.length === 0 && (
        <div className={style.emptyOrders}>
          Заказы отсутствуют. Заказа можно добавить на главной странице заполнив
          форму.
        </div>
      )}
      {order}
    </div>
  );
};

export default OrderPageView;
