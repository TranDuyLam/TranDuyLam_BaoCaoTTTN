import { Link, useParams } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import userservice from "../../../service/Userservice";
import { useState,useEffect } from "react";
import urlImage from "../../../TranduyLam/config";
function UserShow() {
    const { id } = useParams("id");
    const [user, setUser] = useState([]);
    useEffect(function () {
        (async () => {
            await userservice.getById(id).then((result) => {
                setUser(result.data.data);
            });
        })();
    }, [])
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">Chi tiết người dùng</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/user" className="btn btn-sm btn-info me-2">
                            Về danh sách
                        </Link>
                        <Link
                            className="btn btn-sm btn-primary me-1"
                            to={"/admin/user/update/"+id}
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
                            <td>{user.id}</td>
                        </tr>
                        <tr>
                            <th>Tên người dùng</th>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <th>Hình</th>
                            <td>
                                <img src={user.image} alt="hinh" className="img-fluid" style={{ maxWidth: 200 }} />
                            </td>
                        </tr>
                        <tr>
                            <th>SĐT</th>
                           <td>{user.phone}</td>
                        </tr>
                        <tr>
                            <th>Tên đăng nhập</th>
                           <td>{user.username}</td>
                        </tr>
<tr>
                            <th>Mật khẩu</th>
                           <td>{user.password}</td>
                        </tr>
                        <tr>
                            <th>Địa chỉ</th>
                           <td>{user.address}</td>
                        </tr>
                        <tr>
                            <th>Quyền</th>
                           <td>{user.roles}</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserShow;