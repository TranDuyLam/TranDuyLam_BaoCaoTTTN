
import httpAxios from '../httpAxios.js'

function getAll(){
    return httpAxios.get('menu/index');

}

function getById(id){
    return httpAxios.get(`menu/show/${id}`);

}

function create(Menu){

    return httpAxios.post("menu/store", Menu)
}

function update(Menu,id){
    return httpAxios.post(`menu/update/${id}`,Menu);

}

function remove(id){
    return httpAxios.delete(`menu/destroy/${id}`);
}
const menuservice = {
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default menuservice;