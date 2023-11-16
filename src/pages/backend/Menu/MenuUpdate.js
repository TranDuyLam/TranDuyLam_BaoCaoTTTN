import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import menuservice from "../../../service/Menuservice";


function MenuUpdate() {
    const navigate = useNavigate();
    //Khai bao status
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    
    const { id } = useParams("id");
    //const [menu, setmenu] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservice.getById(id).then(function (result) {
                const tmp = result.data.data;
                //setmenu(tmp);
                setName(tmp.name);
                setSlug(tmp.slug)
            });
        })();
    }, [])
    //Lấy danh sách
    const [menus, setMenus] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservice.getAll().then(function (result) {
                setMenus(result.data.data)
            });
        })();
    }, [])


    async function menuEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var menu = new FormData();
        menu.append("name", name)
        menu.append("slug", slug)

        
        if (image.files.length === 0) {
            menu.append("image", "");
        }
        else {
            menu.append("image", image.files[0]);
        }

        await menuservice.update(menu, id).then(function (res) {
            alert(res.data.message)
            navigate('/admin/menu/', { replace: true });
        });;
    }
    return (
        <form onSubmit={menuEdit} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">Cập nhật thương hiệu</strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/menu" className="btn btn-sm btn-info">
                                Về danh sách
                            </Link>
                        </div>
</div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="col-mb-3">
                                <label htmlFor="name">Tên thương hiệu </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />
                            
                        </div>
                       
                        </div>
                        <div className="col-md-3">

                            
                            <div className="col-mb-3">
                                <label htmlFor="image">Hình đại diện</label>
                                <input type="file" id="image" className="form-control" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default MenuUpdate;