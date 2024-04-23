import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ShoppingCartContext from "../contexts/ShoppingCartContext.jsx";
import { PRODUCTS_URL } from "../constants/api.js";

const useProducts = () => {
    const { removeCartProduct } = useContext(ShoppingCartContext);
    const [ response, setResponse ] = useState({});
    const [ products, setProducts ] = useState([]);

    const searchProducts = async (params) => {
        const queryParams = new URLSearchParams(params);
        const url = queryParams.size > 0 ? `${PRODUCTS_URL}?${queryParams.toString()}` : PRODUCTS_URL;

        return await axios.get(url)
            .then((res) => {
                setResponse(res);
                setProducts(res.data?.data);
                return res.data;
            });
    };

    useEffect(() => {
        searchProducts({});
    }, []);

    const createProduct = async (values) => {
        return await axios.post(PRODUCTS_URL, values)
            .then((res) => {
                setResponse(res);
                return res.data;
            });
    };

    const updateProduct = async (values) => {
        return await axios.put(`${PRODUCTS_URL}/${values.id}`, values)
            .then((res) => {
                setResponse(res);
                return res.data;
            });
    };

    /* const updateStock = async (products) => {

        for (const product of products) {
            const newStock = product.stock - product.amount;

            try {
                await axios.patch(`${PRODUCTS_URL}/${product.id}`, { newStock: newStock })
                    .then((res) => {
                        setResponse(res);
                    });

            } catch (error) {
                console.error(`Error actualizando producto ${product.id}:`, error);
            }

        }

    };*/

    const removeProduct = async (id) => {
        return await axios.delete(`${PRODUCTS_URL}/${id}`)
            .then((res) => {
                setResponse(res);
                removeCartProduct(id);
                searchProducts({});
                return res.data;
            });
    };

    const uploadProductImage = async (file) => {
        const options = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        return await axios.post(`${PRODUCTS_URL}/upload`, { file }, options)
            .then((res) => {
                setResponse(res);
                return res.data;
            });
    };

    return {
        products,
        response,
        searchProducts,
        createProduct,
        updateProduct,
        //updateProductStock,
        removeProduct,
        uploadProductImage,
        /*updateStock,*/
    };
};

export default useProducts;