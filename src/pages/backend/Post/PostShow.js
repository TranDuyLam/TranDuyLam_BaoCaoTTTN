import { Link, useParams } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import postservice from "../../../service/Postservice";
import { useState,useEffect } from "react";
import urlImage from "../../../TranduyLam/config";
function PostShow() {
    const { id } = useParams("id");
    const [post, setPost] = useState([]);
    useEffect(function () {
        (async () => {
            await postservice.getById(id).then((result) => {
                setPost(result.data.data);
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
                        <Link to="/admin/post" className="btn btn-sm btn-info me-2">
                            Về danh sách
                        </Link>
                        <Link
                            className="btn btn-sm btn-primary me-1"
                            to={"/admin/post/update/"+id}
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
                            <td>{post.id}</td>
                        </tr>
                        <tr>
                            <th>topic_id</th>
                            <td>{post.topic_id}</td>
                        </tr>
                        <tr>
                            <th>title</th>
                            <td>{post.title}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{post.slug}</td>
                        </tr>
                        <tr>
                            <th>chú thích</th>
                            <td>{post.detail}</td>
                        </tr>
                        <tr>
                            <th>Hình</th>
                            <td>
                                <img src={post.image} alt="hinh" className="img-fluid" style={{ maxWidth: 200 }} />
                            </td>
                        </tr>
                        <tr>
                            <th>type</th>
                            <td>{post.type}</td>
                        </tr>
                        <tr>
                            <th>metakey</th>
                           <td>{post.metakey}</td>
                        </tr>
<tr>
                            <th>metadesc</th>
                           <td>{post.metadesc}</td>
                        </tr>
                        <tr>
                            <th>created_at</th>
                           <td>{post.created_at}</td>
                        </tr>
                        <tr>
                            <th>updated_at</th>
                           <td>{post.updated_at}</td>
                        </tr>
                        <tr>
                            <th>created_by</th>
                           <td>{post.created_by}</td>
                        </tr>
                        <tr>
                            <th>updated_by</th>
                           <td>{post.updated_by}</td>
                        </tr>
                        <tr>
                            <th>status</th>
                           <td>{post.status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PostShow;