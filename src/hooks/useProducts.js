import useLocalStorage from "./useLocalStorage.js";
import { useContext } from "react";
import ShoppingCartContext from "../contexts/ShoppingCartContext.jsx";

import { burgers } from "../data/data.js";

const useProducts = () => {
    const { items, setItem } = useLocalStorage({ products: burgers });
    const { removeProductFromCart } = useContext( ShoppingCartContext );

    const normalizeValue = (value = "") => {
        return value
            .toLowerCase()
            .trim()
            .replace("á", "a")
            .replace("é", "e")
            .replace("í", "i")
            .replace("ó", "o")
            .replace("ú", "u");
    };

    const searchProducts = (text) => {
        const preparedText = normalizeValue(text);

        return items.products.filter((burger) => {
            const preparedBurger = normalizeValue(burger.name);

            if (preparedText.length === 0 || preparedBurger.includes(preparedText)) {
                return burger;
            }
        });
    };

    const generateId = () => {
        let maxId = 0;

        items.products.forEach((item) => {
            if (item.id > maxId) {
                maxId = item.id;
            }
        });

        return maxId + 1;
    };

    const createSchema = (values) => {
        return {
            id: values.id ?? generateId(),
            name: values.name ?? "",
            description: values.description ?? "",
            image: values.image ?? "/images/home/products/img0001.jpg",
            stock: Number(values.stock) ?? 0,
            price: Number(values.price) ?? 0,
            isPromotion: values.isPromotion ?? false,
        };
    };

    const createProduct = (values) => {
        setItem("products", [ ...items.products, createSchema(values) ]);
    };

    const updateProduct = (values) => {
        const index = items.products.findIndex((item) => item.id === values.id);
        const products = items.products.toSpliced(index, 1, createSchema(values));
        setItem("products", products);
    };

    const removeProduct = (id) => {
        // Eliminar el producto de la lista de productos
        const productsWithoutThisProduct = items.products.filter((item) => item.id !== id);
        setItem("products", productsWithoutThisProduct);

        // Eliminar el producto del carrito si está presente
        removeProductFromCart(id);

        // Si deseas actualizar el stock en localStorage, aquí puedes hacerlo también
        // Ejemplo: localStorage.setItem(`product_${id}_stock`, updatedStock);
    };

    return {
        products: items.products,
        searchProducts,
        createProduct,
        updateProduct,
        removeProduct,
    };
};

export default useProducts;