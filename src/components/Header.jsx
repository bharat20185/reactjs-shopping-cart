import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const {totalQuantity} = useSelector(state => state.cart);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" style={{paddingLeft: '1rem'}} to="/">FakeShop</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink activeClassName="active" className="nav-link" to="/">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/cart">Cart ({totalQuantity})</NavLink>
                    </li>
                </ul>               
            </div>
        </nav>
    )
}

export default Header;