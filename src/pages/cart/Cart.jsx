import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = (props) => {
    const {items} = useSelector(state => state.cart);
    return (
        <>
        <h1>Cart</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => <CartItem key={item.id} {...item} />)}
            </tbody>
        </table>
        </>
    )
}

export default Cart;