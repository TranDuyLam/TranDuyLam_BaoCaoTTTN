import { Link } from "react-router-dom";
import { FaPlus,FaEye,FaEdit,FaTrash,FaRegEye } from 'react-icons/fa';
import { useEffect, useState } from "react";
import userservice from "../../../service/Userservice";

function UserList() {
    const [users, setUsers] = useState([]);
    const [statusdel, setStatusDelete] = useState(0);

  useEffect(function () {
    (async function () {
      await userservice.getAll().then(function (result) {
        setUsers(result.data.data);
      });
    })();
  }, [statusdel]);
  function userDelete(id) {
    userservice.remove(id).then(function (result) {
        alert(result.data.message);
        setStatusDelete(result.data.id);
    });
}
    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                <div className="col-6">
                    <strong className="text-primary">Người dùng</strong>
                </div>
                <div className="col-6 text-end ">
                  <Link className="btn btn-sm btn-success"  to="/admin/user/create">
                    <FaPlus/> Thêm
                    </Link>
                </div>
                </div>
                
             </div>
            

             <div className="card-body">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Mật khẩu</th>
                        <th>Tên đăng nhập</th>
                        <th>Chức năng</th>
                        

                    </tr>
                    </thead>
                    <tbody>
                    {users.map(function(user,index){
                             return(<tr key={index} > 
                                <td className="text-center">
                                    <input type="checkbox" />
                                </td>
                                <td className="text-center">{user.name}
                                    
                                </td>
                                <td className="text-center">{user.email}</td>
    
                                <td className="text-center">{user.password}</td>
                                <td className="text-center">{user.username}</td>

                                <td className="text-center">
                                    <Link to={"/admin/user/show/"+user.id} className="btn btn-sm btn-outline-success me-1">
                                        <FaRegEye/>
                                    </Link>
                                    <Link to={"/admin/user/update/"+user.id} className="btn btn-sm btn-outline-primary me-1">
                                        <FaEdit/>
                                    </Link>
                                    <button onClick={() => userDelete(user.id)} className="btn btn-sm btn-outline-danger me-1">
                                        <FaTrash/>
                                    </button>
                                </td>
                                </tr>);
                    })}
                    </tbody>
                </table>
               
             </div>
        
        

        </div>
     );
}

export default UserList;