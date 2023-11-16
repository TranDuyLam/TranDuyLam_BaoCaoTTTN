import { Link } from "react-router-dom";
import { FaPlus,FaEye,FaEdit,FaTrash,FaRegEye } from 'react-icons/fa';
import { useEffect, useState } from "react";
import menuservice from "../../../service/Menuservice";

function MenuList() {
    const [menus, setMenus] = useState([]);
    const [statusdel, setStatusDelete] = useState(0);

  useEffect(function () {
    (async function () {
      await menuservice.getAll().then(function (result) {
        setMenus(result.data.data);
      });
    })();
  }, [statusdel]);
  function menuDelete(id) {
    menuservice.remove(id).then(function (result) {
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
                  <Link className="btn btn-sm btn-success"  to="/admin/menu/create">
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
                    {menus.map(function(menu,index){
                             return(<tr key={index} > 
                                <td className="text-center">
                                    <input type="checkbox" />
                                </td>
                                <td className="text-center">{menu.name}
                                    
                                </td>


                                <td className="text-center">
                                    <Link to={"/admin/menu/show/"+menu.id} className="btn btn-sm btn-outline-success me-1">
                                        <FaRegEye/>
                                    </Link>
                                    <Link to={"/admin/menu/update/"+menu.id} className="btn btn-sm btn-outline-primary me-1">
                                        <FaEdit/>
                                    </Link>
                                    <button onClick={() => menuDelete(menu.id)} className="btn btn-sm btn-outline-danger me-1">
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

export default MenuList;