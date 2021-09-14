import axios from "axios";

const baseUrl = "http://localhost:3001/products"

const getProducts = async () => {
    const response = await axios.get(baseUrl + "/products");
    return response.data;
};

const getCart = async () => {
    const response = await axios.get(baseUrl + "/cart");
    return response.data;
};

export default { getProducts, getCart };