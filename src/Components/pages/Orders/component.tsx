import React from "react";
import style from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../../redux/reducers/store";

function OrderPage() {
  const dispatch = useDispatch();
  const deleteItem = (id: number) => {
    dispatch(store.actions.deleteOrder(id));
  };
  const orders: any = useSelector((state: any) => state.store.orders);
  const order = (
    <div className={style.orders}>
      {orders.map((order: any, index: number) => (
        <div className={style.order}>
          <div className={style.order__title}>Заказ № {index + 1}</div>
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
  return (
    <div className={style.container}>
      {orders.length === 0 && <div className={style.emptyOrders}>Заказы отсутствуют</div>}
      {order}
    </div>
  );
}

export default OrderPage;
