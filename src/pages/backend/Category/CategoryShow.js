import { Link, useParams } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import categoryservice from "../../../service/Categoryservice";
import { useState,useEffect } from "react";
function CategoryShow() {
    const { id } = useParams("id");
    const [category, setCategory] = useState([]);
    useEffect(function () {
        (async () => {
            await categoryservice.getById(id).then((result) => {
                setCategory(result.data.category);
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
                        <Link to="/admin/category" className="btn btn-sm btn-info me-2">
                            Về danh sách
                        </Link>
                        <Link
                            className="btn btn-sm btn-primary me-1"
                            to={"/admin/category/update/"+id}
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
                            <td>{category.id}</td>
                        </tr>
                        <tr>
                            <th>Tên thương hiệu</th>
                            <td>{category.name}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{category.slug}</td>
                        </tr>
                        <tr>
                            <th>Hình</th>
                            <td>
                                <img src={category.image} alt="hinh" className="img-fluid" style={{ maxWidth: 200 }} />
                            </td>
                        </tr>
                        <tr>
                            <th>sort_order</th>
                           <td>{category.sort_order}</td>
                        </tr>
                        <tr>
                            <th>metakey</th>
                           <td>{category.metakey}</td>
                        </tr>
<tr>
                            <th>metadesc</th>
                           <td>{category.metadesc}</td>
                        </tr>
                        <tr>
                            <th>created_at</th>
                           <td>{category.created_at}</td>
                        </tr>
                        <tr>
                            <th>updated_at</th>
                           <td>{category.updated_at}</td>
                        </tr>
                        <tr>
                            <th>created_by</th>
                           <td>{category.created_by}</td>
                        </tr>
                        <tr>
                            <th>updated_by</th>
                           <td>{category.updated_by}</td>
                        </tr>
                        <tr>
                            <th>status</th>
                           <td>{category.status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CategoryShow;