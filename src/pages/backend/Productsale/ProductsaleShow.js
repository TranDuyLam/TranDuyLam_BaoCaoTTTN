import { Link, useParams } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import productsaleservice from "../../../service/Productsaleservice";
import { useState,useEffect } from "react";
import urlImage from "../../../TranduyLam/config";
function ProductsaleShow() {
    const { id } = useParams("id");
    const [productsale, setProductsale] = useState([]);
    useEffect(function () {
        (async () => {
            await productsaleservice.getById(id).then((result) => {
                setProductsale(result.data.data);
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
                        <Link to="/admin/productsale" className="btn btn-sm btn-info me-2">
                            Về danh sách
                        </Link>
                        <Link
                            className="btn btn-sm btn-primary me-1"
                            to={"/admin/productsale/update/"+id}
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
                            <td>{productsale.id}</td>
                        </tr>
                        <tr>
                            <th>category_id</th>
                            <td>{productsale.category_id}</td>
                        </tr><tr>
                            <th>brand_id</th>
                            <td>{productsale.brand_id}</td>
                        </tr>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <td>{productsale.name}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{productsale.slug}</td>
                        </tr>
                        <tr>
                            <th>Hình</th>
                            <td>
                                <img src={productsale.image} alt="hinh" className="img-fluid" style={{ maxWidth: 200 }} />
                            </td>
                        </tr>
                        <tr>
                            <th>Giá gốc</th>
                           <td>{productsale.price}</td>
                        </tr>
                        <tr>
                            <th>Giá bán</th>
                           <td>{productsale.price_sale}</td>
                        </tr>
                        <tr>
                            <th>chú thích</th>
                           <td>{productsale.detail}</td>
                        </tr>
                        <tr>
                            <th>metakey</th>
                           <td>{productsale.metakey}</td>
                        </tr>
<tr>
                            <th>metadesc</th>
                           <td>{productsale.metadesc}</td>
                        </tr>
                        <tr>
                            <th>created_at</th>
                           <td>{productsale.created_at}</td>
                        </tr>
                        <tr>
                            <th>updated_at</th>
                           <td>{productsale.updated_at}</td>
                        </tr>
                        <tr>
                            <th>created_by</th>
                           <td>{productsale.created_by}</td>
                        </tr>
                        <tr>
                            <th>updated_by</th>
                           <td>{productsale.updated_by}</td>
                        </tr>
                        <tr>
                            <th>status</th>
                           <td>{productsale.status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductsaleShow;