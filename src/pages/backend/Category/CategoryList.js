import { Link } from "react-router-dom";
import { FaPlus,FaEye,FaEdit,FaTrash,FaRegEye } from 'react-icons/fa';
import { useEffect, useState } from "react";
import categoryservice from "../../../service/Categoryservice";

function CategoryList() {
    const [categorys, setCategorys] = useState([]);
    const [statusdel, setStatusDelete] = useState(0);
  useEffect(function () {
    (async function () {
      await categoryservice.getAll().then(function (result) {
        setCategorys(result.data.data);
      });
    })();
  }, [statusdel]);
  function categoryDelete(id) {
    categoryservice.remove(id).then(function (result) {
        alert(result.data.message);
        setStatusDelete(result.data.id);
    });
}
    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                <div className="col-6">
                    <strong className="text-primary">Danh mục</strong>
                </div>
                <div className="col-6 text-end ">
                  <Link className="btn btn-sm btn-success"  to="/admin/category/create">
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
                        <th>Tên Danh mục</th>
                        <th>Slug</th>
                        <th>Chức năng</th>
                        

                    </tr>
                    </thead>
                    <tbody>
                    {categorys.map(function(category,index){
                             return(<tr key={index} > 
                                <td className="text-center">
                                    <input type="checkbox" />
                                </td>
                                
                                <td className="text-center">{category.name}</td>
    
                                <td className="text-center">{category.slug}</td>
                                <td className="text-center">
                                    <Link to={"/admin/category/show/"+category.id} className="btn btn-sm btn-outline-success me-1">
                                        <FaRegEye/>
                                    </Link>
                                    <Link to={"/admin/category/update/"+category.id} className="btn btn-sm btn-outline-primary me-1">
                                        <FaEdit/>
                                    </Link>
                                    <button onClick={() => categoryDelete(category.id)} className="btn btn-sm btn-outline-danger me-1">
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

export default CategoryList;