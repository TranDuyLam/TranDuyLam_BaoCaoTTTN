
import httpAxios from '../httpAxios'

function getAll(){
    return httpAxios.get('khach/index');

}

function getById(id){
    return httpAxios.get(`khach/show/${id}`);

}

function create(khach){

    return httpAxios.post("khach/store", khach)
}

function update(khach,id){
    return httpAxios.post(`khach/update/${id}`,khach);

}

function remove(id){
    return httpAxios.delete(`khach/destroy/${id}`);
}
const khachservice = {
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default khachservice;