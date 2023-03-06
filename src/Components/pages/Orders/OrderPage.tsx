import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../../redux/reducers/store";
import OrderPageView from "./OrderPageView";
import style from "./styles.module.scss";

// interface IOrderPage {
//   orders: Array<string>;
//   feedbacks: Array<string>;
//   loading: boolean;
//   feedbackVesible: boolean;
// }

const OrderPage = () => {
  const dispatch = useDispatch();

  const deleteItem = useCallback((id: number) => {
    dispatch(store.actions.deleteOrder(id));
  }, []);

  const orders: string[] = useSelector((state: any) => state.store.orders);
  const order = (
    <div className={style.orders}>
      {orders.map((order: any) => (
        <div className={style.order} key={order.id}>
          <div className={style.order__title}>Заказ № {order.id}</div>
          <div className={style.order__info}>
            Заявитель: {order.name}. Адрес: {order.region} область, город{" "}
            {order.city}
          </div>
          <div className={style.order__phone}>
            Ваш номер телефона: {order.phone}
          </div>
          <div className={style.order__delivery}>
            Способ оплаты: {order.radio}
          </div>
          <div className={style.order__service}>
            <div className={style.order__service_title}>
              Дополнительные услуги:
            </div>
            <ul className={style.order__service_item}>
              {order.checkboxes.map((service: string, index: number) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <div
            className={style.order__deleteBtn}
            onClick={() => deleteItem(order.id)}
          >
            Удалить заказ
          </div>
        </div>
      ))}
    </div>
  );
  return <OrderPageView order={order} orders={orders} />;
};

export default OrderPage;
