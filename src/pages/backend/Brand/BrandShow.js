import { Link, useParams } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import brandservice from "../../../service/Brandservice";
import { useState,useEffect } from "react";
import urlImage from "../../../TranduyLam/config";
function BrandShow() {
    const { id } = useParams("id");
    const [brand, setBrand] = useState([]);
    useEffect(function () {
        (async () => {
            await brandservice.getById(id).then((result) => {
                setBrand(result.data.data);
            });
        })();
    }, [])
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">Chi tiết thương hiệu</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/brand" className="btn btn-sm btn-info me-2">
                            Về danh sách
                        </Link>
                        <Link
                            className="btn btn-sm btn-primary me-1"
                            to={"/admin/brand/update/"+id}
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
                            <td>{brand.id}</td>
                        </tr>
                        <tr>
                            <th>Tên thương hiệu</th>
                            <td>{brand.name}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{brand.slug}</td>
                        </tr>
                        <tr>
                            <th>Hình</th>
                            <td>
                                <img src={brand.image} alt="hinh" className="img-fluid" style={{ maxWidth: 200 }} />
                            </td>
                        </tr>
                        <tr>
                            <th>sort_order</th>
                           <td>{brand.sort_order}</td>
                        </tr>
                        <tr>
                            <th>metakey</th>
                           <td>{brand.metakey}</td>
                        </tr>
<tr>
                            <th>metadesc</th>
                           <td>{brand.metadesc}</td>
                        </tr>
                        <tr>
                            <th>created_at</th>
                           <td>{brand.created_at}</td>
                        </tr>
                        <tr>
                            <th>updated_at</th>
                           <td>{brand.updated_at}</td>
                        </tr>
                        <tr>
                            <th>created_by</th>
                           <td>{brand.created_by}</td>
                        </tr>
                        <tr>
                            <th>updated_by</th>
                           <td>{brand.updated_by}</td>
                        </tr>
                        <tr>
                            <th>status</th>
                           <td>{brand.status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BrandShow;