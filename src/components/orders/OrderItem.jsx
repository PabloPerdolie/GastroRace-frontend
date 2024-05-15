import { Timer } from "./Timer"

export const OrderItem = ({item}) => {

    const deliveryDate = new Date(item.order_date)
    deliveryDate.setMinutes(deliveryDate.getMinutes() + 30)
    
    return (
            <li className="order-item">
                <div className="order-item-details"> 
                    <h3 className="order-item-date">{item.order_date.toString()}</h3>
                    <h3 className="order-item-timer"><Timer deliveryDate={deliveryDate}/></h3>
                    <h3 className="order-item-status">{item.status}</h3>
                    <p className="order-item-price">{item.sum} руб.</p>
                    <ul className="order-products">
                    {item.products.map((item) => (
                        <li key={item.id}>
                            <h3 className="order-product-name">{item.name}</h3>
                            <p className="order-product-price">{item.price} руб.</p>
                        </li>
                    ))}
                    </ul>
                </div>
            </li>
    )
}