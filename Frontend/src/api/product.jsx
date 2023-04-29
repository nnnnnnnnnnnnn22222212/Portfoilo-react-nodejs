import instance from "./instance";

const getAllProduct = () => 
{
    return instance.get('/api/products');
}

const getOneProduct = () => 
{
    return instance.get('/api/products/' + _id);
}

const addProduct= (product) => {
    return instance.post('/api/products', product);
}
const updateProduct = (product) => {
    return instance.put('/api/products/' + product._id, product);
}
const deleteProduct = (id) => {
    return instance.delete('/api/products/' + id);
}

export { getAllProduct, getOneProduct, addProduct, updateProduct, deleteProduct }