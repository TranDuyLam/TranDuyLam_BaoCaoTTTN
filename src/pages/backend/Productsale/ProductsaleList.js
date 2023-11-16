import { Link } from "react-router-dom";
import { FaPlus,FaEye,FaEdit,FaTrash,FaRegEye } from 'react-icons/fa';
import { useEffect, useState } from "react";
import productsaleservice from "../../../service/Productsaleservice";

function ProductsaleList() {
    const [productsales, setProductsales] = useState([]);
  useEffect(function () {
    (async function () {
      await productsaleservice.getAll().then(function (result) {
        setProductsales(result.data.data);
      });
    })();
  }, []);

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                <div className="col-6">
                    <strong className="text-primary">Sản Phẩm</strong>
                </div>
                <div className="col-6 text-end ">
                  <Link className="btn btn-sm btn-success"  to="/admin/productsale/create">
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
                        <th>Tên Sản phẩm</th>
                        <th>Slug</th>
                        <th>Giá gốc</th>
                        <th>Giá bán</th>
                        <th>Chức năng</th>
                        

                    </tr>
                    </thead>
                    <tbody>
                    {productsales.map(function(productsale,index){
                             return(<tr key={index} > 
                                <td className="text-center">
                                    <input type="checkbox" />
                                </td>
                               
                                <td className="text-center">{productsale.name}</td>
    
                                <td className="text-center">{productsale.price_sale}</td>
                                
                                <td className="text-center">
                                    <Link to={"/admin/productsale/show/"+productsale.id} className="btn btn-sm btn-outline-success me-1">
                                        <FaRegEye/>
                                    </Link>
                                    <Link to={"/admin/productsale/update/"+productsale.id} className="btn btn-sm btn-outline-primary me-1">
                                        <FaEdit/>
                                    </Link>

                                </td>
                                </tr>);
                    })}
                    </tbody>
                </table>
               
             </div>
        
        

        </div>
     );
}

export default ProductsaleList;