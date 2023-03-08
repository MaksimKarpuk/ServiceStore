import React from "react";
import style from "./styles.module.scss";

interface IOrderPageViewProps {
  deleteItem: Function;
  orders: [];
}
interface IOrder {
  id: number;
  name: string;
  region: string;
  city: string;
  phone: string;
  radio: string;
  checkboxes: [];
  checbox: string;
}

const OrderPageView = ({ deleteItem, orders }: IOrderPageViewProps) => {
  return (
    <div className={style.container}>
      {orders.length === 0 && (
        <div className={style.emptyOrders}>
          Заказы отсутствуют. Заказа можно добавить на главной странице заполнив
          форму.
        </div>
      )}
      <div className={style.orders}>
        {orders.map((order: IOrder) => (
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
    </div>
  );
};

export default OrderPageView;
