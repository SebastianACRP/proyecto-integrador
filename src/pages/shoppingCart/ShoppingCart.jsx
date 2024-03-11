import { Box } from "@mui/material";
import "./shoppingCart.scss";
import ShoppingCartContext from "../../contexts/ShoppingCartContext";
import { useContext } from "react";
import ShoppingTable from "../../components/table/ShoppingTable";
import ShoppingTableDetails from "../../components/table/ShoppingTableDetails";

const ShoppingCart = () => {
    const { shoppingCart } = useContext(ShoppingCartContext);

    return (
        <Box className="shoppingCart__container">
            <h2 className="shoppingCart__container__title">Carrito de compras</h2>
            <Box className="shoppingCart">
                <ShoppingTable products={shoppingCart}>
                </ShoppingTable>
                <ShoppingTableDetails/>
            </Box>
        </Box>
    );
};

export default ShoppingCart;