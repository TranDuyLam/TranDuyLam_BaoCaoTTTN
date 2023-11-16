
import httpAxios from '../httpAxios'

function getAll(){
    return httpAxios.get('product/index');

}

function getById(id){
    return httpAxios.get(`product/show/${id}`);

}
function getBySlug(slug){
    return httpAxios.get(`chi-tiet-san-pham/${slug}`);

}

function create(product){

    return httpAxios.post("product/store", product)
}

function update(product,id){
    return httpAxios.post(`product/update/${id}`,product);

}

function remove(id){
    return httpAxios.delete(`product/destroy/${id}`);
}
const productservice = {
    getAll:getAll,
    getBySlug:getBySlug,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default productservice;