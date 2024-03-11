import useLocalStorage from "../hooks/useLocalStorage";
import PropTypes from "prop-types";

import ShoppingCartContext from "./ShoppingCartContext";

const ShoppingCartProvider = (props) => {
    const { children } = props;
    const { items, setItem } = useLocalStorage({ shoppingCart: [] });

    const getProductCart = (id) => {
        return items.shoppingCart.find((item) => item.id === id);
    };

    const removeProductFromCart = (productId) => {
        const productToRemove = items.shoppingCart.find((product) => product.id === productId);
        if (productToRemove) {
            const currentStock = localStorage.getItem(`product_${productId}_stock`) || 0;
            const updatedStock = parseInt(currentStock) + productToRemove.amount;
            localStorage.setItem(`product_${productId}_stock`, updatedStock);

            // Eliminar el producto del carrito
            const updatedCart = items.shoppingCart.filter((product) => product.id !== productId);
            setItem("shoppingCart", updatedCart);
        }
    };

    const shoppingCartCounter = () => {

        let total = 0;

        items?.shoppingCart?.forEach((product) => {
            total += product.amount;
        });

        return total;
    };

    const getTotal = () => {
        const total = items?.shoppingCart?.reduce((accumulator, product) => {
            return accumulator + (product.price * product.amount);
        }, 0);

        return total || 0; // Devuelve 0 si no hay elementos en el carrito de compras
    };

    const addProductCart = (product) => {
        const productQueEstaEnLS = getProductCart(product.id);
        if (productQueEstaEnLS) {
            // cuando existe en LS
            product.amount = productQueEstaEnLS.amount+1;
            console.log({ productQueEstaEnLS });
            const index = items.shoppingCart.findIndex((item) => item.id === product.id);
            const products = items.shoppingCart.toSpliced(index, 1, product);
            setItem("shoppingCart", products);

        } else {
            // cuando no existe en LS
            product.amount = 1;
            setItem("shoppingCart", [ ...items.shoppingCart, product ]);
        }
    };

    const removeProductCart = (product) => {

        const productQueEstaEnLS = getProductCart(product.id);

        if (productQueEstaEnLS && productQueEstaEnLS.amount > 1) {
            //Si  existe y el amount es mayor a 1 en LocalStorage, le resto 1
            product.amount = productQueEstaEnLS.amount - 1;
            const index = items.shoppingCart.findIndex((item) => item.id === product.id);
            const products = items.shoppingCart.toSpliced(index, 1, product);
            setItem("shoppingCart", products);

        }else{
            //Si el amount es 1, borro el producto del carrito
            const productsUpdated = items.shoppingCart.filter((item) => item.id != product.id);
            setItem("shoppingCart", productsUpdated);
        }

    };

    const emptyShoppingCart = () => {
        items.shoppingCart.forEach((product) => {
            const currentStock = localStorage.getItem(`product_${product.id}_stock`) || 0;
            const updatedStock = parseInt(currentStock) + product.amount;
            localStorage.setItem(`product_${product.id}_stock`, updatedStock);
        });
        setItem("shoppingCart", []);
        console.info("Carrito vaciado correctamente.");
    };

    return (
        <ShoppingCartContext.Provider
            value={{
                shoppingCart: items.shoppingCart,
                getProductCart,
                addProductCart,
                removeProductCart,
                shoppingCartCounter,
                emptyShoppingCart,
                getTotal,
                removeProductFromCart,
            }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShoppingCartProvider;