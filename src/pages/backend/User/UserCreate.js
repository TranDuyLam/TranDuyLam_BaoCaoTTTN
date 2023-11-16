import { useState } from "react";
import { Link } from "react-router-dom";
import userservice from "../../../service/Userservice";

function UserCreate() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [roles, setRoles] = useState('');


    
    async function userStore(event){
        event.preventDefault();
        const user={
            name:name,
            email:email,
            password:password,
            username:username,
            phone:phone,
            address:address,
            roles:roles
        }
        await userservice.create(user).then(function(res){
            alert(res.data.data)
        })
    }

    return (
        <form onSubmit={userStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm Người dùng
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit"className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/user" className="btn btn-sm btn-info">Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Tên Người dùng</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="email">Email</label>
                                <textarea onChange={(e) => setEmail(e.target.value)} name="email" value={email} className="form-control"></textarea>
                            </div>

                            <div className="md-3">
                                <label htmlFor="password">Mật khẩu</label>
                                <textarea onChange={(e) => setPassword(e.target.value)} name="password" value={password} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="username">Tên đăng nhập</label>
                                <textarea onChange={(e) => setUsername(e.target.value)} name="username" value={username} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="phone">SDT</label>
                                <textarea onChange={(e) => setPhone(e.target.value)} name="phone" value={phone} className="form-control"></textarea>
                            </div><div className="md-3">
                                <label htmlFor="address">Địa chỉ</label>
                                <textarea onChange={(e) => setAddress(e.target.value)} name="address" value={address} className="form-control"></textarea>
                            </div><div className="md-3">
                                <label htmlFor="roles">Quyền</label>
                                <textarea onChange={(e) => setRoles(e.target.value)} name="roles" value={roles} className="form-control"></textarea>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </form>
    );
}

export default UserCreate;