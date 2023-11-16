
import httpAxios from '../httpAxios'

function getAll(){
    return httpAxios.get('productsale/index');

}



function create(productsale){

    return httpAxios.post("productsale/store", productsale)
}

function update(productsale,id){
    return httpAxios.post(`productsale/update/${id}`,productsale);

}

function remove(id){
    return httpAxios.delete(`productsale/destroy/${id}`);
}
const productsaleservice = {
    getAll:getAll,

    create:create,
    update:update,
    remove:remove
}
export default productsaleservice;