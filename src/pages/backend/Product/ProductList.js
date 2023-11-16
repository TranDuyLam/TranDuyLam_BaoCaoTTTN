import { Link } from "react-router-dom";
import { FaPlus,FaEye,FaEdit,FaTrash,FaRegEye } from 'react-icons/fa';
import { useEffect, useState } from "react";
import productservice from "../../../service/Productservice";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [statusdel, setStatusDelete] = useState(0);
  useEffect(function () {
    (async function () {
      await productservice.getAll().then(function (result) {
        setProducts(result.data.data);
      });
    })();
  }, [statusdel]);
  function productDelete(id) {
    productservice.remove(id).then(function (result) {
        alert(result.data.message);
        setStatusDelete(result.data.id);
    });
}
    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                <div className="col-6">
                    <strong className="text-primary">Sản Phẩm</strong>
                </div>
                <div className="col-6 text-end ">
                  <Link className="btn btn-sm btn-success"  to="/admin/product/create">
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
                    {products.map(function(product,index){
                             return(<tr key={index} > 
                                <td className="text-center">
                                    <input type="checkbox" />
                                </td>
                                <td className="text-center">
                                    <img className="img-fluid" src={product.image} alt="hinh"/>
                                </td>
                                <td className="text-center">{product.name}</td>
    
                                <td className="text-center">{product.slug}</td>
                                <td className="text-center">{product.price}</td>
                                <td className="text-center">{product.price_sale}</td>
                                
                                <td className="text-center">
                                    <Link to={"/admin/product/show/"+product.id} className="btn btn-sm btn-outline-success me-1">
                                        <FaRegEye/>
                                    </Link>
                                    <Link to={"/admin/product/update/"+product.id} className="btn btn-sm btn-outline-primary me-1">
                                        <FaEdit/>
                                    </Link>
                                    <button onClick={() => productDelete(product.id)} className="btn btn-sm btn-outline-danger me-1">
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

export default ProductList;