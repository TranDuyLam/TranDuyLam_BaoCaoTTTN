import { Link, useParams } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import productservice from "../../../service/Productservice";
import { useState,useEffect } from "react";
import urlImage from "../../../TranduyLam/config";
function ProductShow() {
    const { id } = useParams("id");
    const [product, setProduct] = useState([]);
    useEffect(function () {
        (async () => {
            await productservice.getById(id).then((result) => {
                setProduct(result.data.data);
            });
        })();
    }, [])
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">Chi tiết sản phẩm</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/product" className="btn btn-sm btn-info me-2">
                            Về danh sách
                        </Link>
                        <Link
                            className="btn btn-sm btn-primary me-1"
                            to={"/admin/product/update/"+id}
                        >
                            Sửa <FaEdit />
                        </Link>
                        <button className="btn btn-sm btn-danger">
                            Xóa <FaTrash />
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th style={{ width: 200 }}>Tên trường</th>
                            <th>Giá trị</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{product.id}</td>
                        </tr>
                        <tr>
                            <th>category_id</th>
                            <td>{product.category_id}</td>
                        </tr><tr>
                            <th>brand_id</th>
                            <td>{product.brand_id}</td>
                        </tr>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <td>{product.name}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{product.slug}</td>
                        </tr>
                        <tr>
                            <th>Hình</th>
                            <td>
                                <img src={product.image} alt="hinh" className="img-fluid" style={{ maxWidth: 200 }} />
                            </td>
                        </tr>
                        <tr>
                            <th>Giá gốc</th>
                           <td>{product.price}</td>
                        </tr>
                        <tr>
                            <th>Giá bán</th>
                           <td>{product.price_sale}</td>
                        </tr>
                        <tr>
                            <th>chú thích</th>
                           <td>{product.detail}</td>
                        </tr>
                        <tr>
                            <th>metakey</th>
                           <td>{product.metakey}</td>
                        </tr>
<tr>
                            <th>metadesc</th>
                           <td>{product.metadesc}</td>
                        </tr>
                        <tr>
                            <th>created_at</th>
                           <td>{product.created_at}</td>
                        </tr>
                        <tr>
                            <th>updated_at</th>
                           <td>{product.updated_at}</td>
                        </tr>
                        <tr>
                            <th>created_by</th>
                           <td>{product.created_by}</td>
                        </tr>
                        <tr>
                            <th>updated_by</th>
                           <td>{product.updated_by}</td>
                        </tr>
                        <tr>
                            <th>status</th>
                           <td>{product.status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductShow;