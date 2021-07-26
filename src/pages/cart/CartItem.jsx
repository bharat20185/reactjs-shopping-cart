import {useDispatch} from 'react-redux';
import { CartActions } from '../../store/reducers/CartReducer';

const CartItem = (props) => {
    const dispatch = useDispatch();
    const {id, name, price, totalPrice, quantity} = props;

    const handleAddItem = () => {
        dispatch(CartActions.addItem({
            id,
            title: name,
            price
        }));
    }

    const handleRemoveItem = () => {
        dispatch(CartActions.removeItem(id))
    }

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{totalPrice}</td>
            <td>
                <button type="button" className="btn btn-danger" onClick={handleRemoveItem}>-</button>
                <button type="button" className="btn btn-primary ml-2" onClick={handleAddItem}>+</button>
            </td>
        </tr>
    )
}

export default CartItem;