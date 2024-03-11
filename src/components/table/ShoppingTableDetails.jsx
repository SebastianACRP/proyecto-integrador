import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartContext from "../../contexts/ShoppingCartContext";
import { CURRENCY } from "../../constanst/general";
import "./shoppingTableDetails.scss";
import Button from "../button/Button";

const ShoppingTableDetails = () => {
    const { getTotal, shoppingCartCounter, emptyShoppingCart, shoppingCart } = useContext(ShoppingCartContext);
    const [ orderSent, setOrderSent ] = useState(false);

    const handleConfirmPurchase = () => {
        setOrderSent(true);
        emptyShoppingCart("shoppingCart");

        // Disminuir la cantidad de stock en localStorage para cada producto comprado
        shoppingCart.forEach((product) => {
            const storedStock = localStorage.getItem(`product_${product.id}_stock`);
            if (storedStock !== null) {
                const updatedStock = parseInt(storedStock) - product.amount;
                localStorage.setItem(`product_${product.id}_stock`, updatedStock);
            }
        });
    };

    return (
        <div className="shoppingCart__resume">
            <div className="shoppingCart__resume--title">
                Resumen de compra
            </div>
            <div className="table__body__items">
                <div className="item table__body__items--total">
                    <p >Total: </p>
                    <span className="grid-item-right">{CURRENCY} {(getTotal().toFixed(2))}</span>
                </div>
            </div>
            <div className="shoppingCart__resume--btn">
                {orderSent && (
                    <div className="shoppingCart__order-sent">
                        <p>Pedido enviado</p>
                    </div>
                )}
                {shoppingCartCounter() > 0 && !orderSent ? (
                    <Button
                        as={NavLink}
                        to="/"
                        type="button"
                        color="success"
                        onClick={handleConfirmPurchase}>
                        Confirmar Compra
                    </Button>
                ) : (
                    <Button
                        as="button"
                        type="button"
                        color="success"
                        disabled>
                        Confirmar Compra
                    </Button>
                ) }
                <Button
                    component={NavLink}
                    type="button"
                    color="danger"
                    onClick={()=> emptyShoppingCart("shoppingCart")} >
           Vaciar Carrito
                </Button>
            </div>
        </div>
    );
};

export default ShoppingTableDetails;