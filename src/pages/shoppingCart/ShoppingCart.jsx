import { useContext, useState } from "react";
/*import useProducts from "../../hooks/useProducts";*/
import { NavLink } from "react-router-dom";
import { Box, IconButton, Table, TableContainer, TableBody, TableCell, TableHead, TableRow, Paper } from "@mui/material";
import InputField from "../../components/form/inputField/InputField";
import { useFormik } from "formik";
import "./shoppingCart.scss";

import ShoppingCartContext from "../../contexts/ShoppingCartContext";

import Button from "../../components/button/Button";
import Alert from "../../components/alert/Alert";

import DeleteIcon from "@mui/icons-material/Delete";

const ShoppingCart = () => {
    const { shoppingCart, calculateTotal, removeCartProduct, removeAllCartProducts, buyCartProducts } = useContext(ShoppingCartContext);
    const [ openAlert, setOpenAlert ] = useState(false);
    /*const { updateStock } = useProducts();*/

    const buy = () => {
        /*updateStock(shoppingCart);*/
        buyCartProducts();
        setOpenAlert(true);
    };

    const formik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
        },
    });

    return (
        <Box className="shopping-cart">
            <Box
                component="section"
                className="shopping-cart__section">
                <h3>Carrito De Compras</h3>

                <TableContainer component={Paper}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Producto</TableCell>
                                <TableCell>Cantidad</TableCell>
                                <TableCell>Precio</TableCell>
                                <TableCell>Subtotal</TableCell>
                                <TableCell>Eliminar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {shoppingCart?.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.amount}</TableCell>
                                    <TableCell>{`$${Number(item.price).toFixed(2)}`}</TableCell>
                                    <TableCell>{`$${Number(item.totalPrice).toFixed(2)}`}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => removeCartProduct(item.id)}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={5}>{`TOTAL: $${calculateTotal().toFixed(2)}`}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box className="shopping-cart__client">
                    <InputField
                        label="Nombre y apellido"
                        name="fullname"
                        size="small"
                        variant="outlined"
                        value={formik.values.fullname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                        errorMessage={formik.touched.fullname && formik.errors.fullname}
                        inputProps={{ maxLength: 25 }}/>

                    <InputField
                        label="E-mail"
                        name="email"
                        size="small"
                        variant="outlined"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        errorMessage={formik.touched.email && formik.errors.email}
                        inputProps={{ maxLength: 50 }}/>
                </Box>

                <Box className="shopping-cart__section__button-group">
                    <Button
                        type="button"
                        onClick={() => buy()}>
                        Comprar
                    </Button>
                    <Button
                        component={NavLink}
                        to={"/"}
                        color="danger"
                        onClick={() => removeAllCartProducts()}>
                            Cancelar
                    </Button>
                    <Alert
                        openAlert={openAlert}
                        setOpenAlert={setOpenAlert}
                        message="La compra se procesó correctamente"
                        navigateUrl="/"/>
                </Box>
            </Box>
        </Box>
    );
};

export default ShoppingCart;