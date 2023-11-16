import { Link } from "react-router-dom";
import { FaPlus,FaEye,FaEdit,FaTrash,FaRegEye } from 'react-icons/fa';
import { useEffect, useState } from "react";
import brandservice from "../../../service/Brandservice";

function BrandList() {
    const [brands, setBrands] = useState([]);
    const [statusdel, setStatusDelete] = useState(0);
  useEffect(function () {
    (async function () {
      await brandservice.getAll().then(function (result) {
        setBrands(result.data.data);
      });
    })();
  }, [statusdel]);
  function brandDelete(id) {
    brandservice.remove(id).then(function (result) {
        alert(result.data.message);
        setStatusDelete(result.data.id);
    });
}
    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                <div className="col-6">
                    <strong className="text-primary">Thương Hiệu</strong>
                </div>
                <div className="col-6 text-end ">
                  <Link className="btn btn-sm btn-success"  to="/admin/brand/create">
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
                        <th style={{width:150}}>Hình</th>
                        <th>Tên Thương Hiệu</th>
                        <th>Slug</th>
                        <th>Chức năng</th>
                        

                    </tr>
                    </thead>
                    <tbody>
                    {brands.map(function(brand,index){
                             return(<tr key={index} > 
                                <td className="text-center">
                                    <input type="checkbox" />
                                </td>
                                <td className="text-center">
                                    <img className="img-fluid" src={brand.image} alt="hinh"/>
                                </td>
                                <td className="text-center">{brand.name}</td>
    
                                <td className="text-center">{brand.slug}</td>
                                <td className="text-center">
                                    <Link to={"/admin/brand/show/"+brand.id} className="btn btn-sm btn-outline-success me-1">
                                        <FaRegEye/>
                                    </Link>
                                    <Link to={"/admin/brand/update/"+brand.id} className="btn btn-sm btn-outline-primary me-1">
                                        <FaEdit/>
                                    </Link>
                                    







                                    <button onClick={() => brandDelete(brand.id)} className="btn btn-sm btn-outline-danger me-1">
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

export default BrandList;