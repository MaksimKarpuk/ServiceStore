import React, { FC } from "react";
import style from "./styles.module.scss";

interface IOrderPageViewProps {
  deleteItem: (id: number) => void;
  orders: IOrder[];
}
interface IOrder {
  id: number;
  name: string;
  region: string;
  city: string;
  phone: string;
  radio: string;
  checkboxes: string[];
  checbox: string;
}

const OrderPageView: FC<IOrderPageViewProps> = (props) => {
  return (
    <div className={style.container}>
      {props.orders.length === 0 && (
        <div className={style.emptyOrders}>
          Заказы отсутствуют. Заказа можно добавить на главной странице заполнив
          форму.
        </div>
      )}
      <div className={style.orders}>
        {props.orders.map((order: IOrder) => (
          <div className={style.order} key={order.id}>
            <div className={style.order__title}>Заказ № {order.id}</div>
            <div className={style.order__info}>
              Заявитель: {order.name}. Адрес: {order.region} область, город
              {order.city}
            </div>
            <div className={style.order__phone}>
              Ваш номер телефона: {order.phone}
            </div>
            <div className={style.order__delivery}>
              Способ оплаты: {order.radio}
            </div>
            {order.checkboxes && (
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
            )}
            <div
              className={style.order__deleteBtn}
              onClick={() => props.deleteItem(order.id)}
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
