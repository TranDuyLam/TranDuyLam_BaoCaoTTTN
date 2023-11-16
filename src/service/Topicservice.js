import httpAxios from '../httpAxios'

function getAll(){
    return httpAxios.get('topic/index');

}

function getById(){


}

function create(topic){
    return httpAxios.post("topic/store", topic)
}
function update(id){


}

function remove(id){

}
const Topicservice = {
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default Topicservice;