import PropTypes from "prop-types";
import { CURRENCY } from "../../constanst/general.js";
import "./shoppingTable.scss";
import { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import ShoppingCartContext from "../../contexts/ShoppingCartContext.jsx";

const ShoppingTable = ({ products }) => {
    const { removeProductFromCart } = useContext(ShoppingCartContext);

    return (
        <div className="table-container">
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Importe</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.length > 0 ? (
                        products.map((product) => (
                            <tr key={product.id}>
                                <td className="product-cell">
                                    {product.name}
                                </td>
                                <td className="amount-cell">
                                    {product.amount}
                                </td>
                                <td>{CURRENCY}{product.price.toFixed(2)}</td>
                                <td>{CURRENCY}{(product.price * product.amount).toFixed(2)}</td>
                                <td><DeleteIcon
                                    className="delete-icon"
                                    onClick={() => removeProductFromCart(product.id)}
                                /></td>
                            </tr>
                        ))
                    ) : (
                        <tr className="empty-cart">
                            <td colSpan={4}>El carrito está vacío</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

//localStorage.clear();

ShoppingTable.propTypes = {
    products: PropTypes.array,
};

export default ShoppingTable;