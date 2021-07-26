import React from 'react';
import { useDispatch } from 'react-redux';
import {CartActions} from '../../store/reducers/CartReducer';

const ProductItem = (props) => {
    const dispatch = useDispatch();
    const handleAddCart = () => {
        dispatch(CartActions.addItem({
            id: props.id,
            title: props.title,
            price: props.price
        }));
    }
    return (
        <div className="col-3 p-2">
            <div className="card">
                <img src={props.image} alt={props.title} className="img-fluid rounded m-2" style={{height: '20rem'}} />
                <div className="card-header">
                    <div className="truncate">{props.title}</div>
                </div>
                <div className="card-body">
                    <p>Price: {props.price}</p>
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-primary" onClick={handleAddCart}>Add Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;