import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import categoryservice from "../../../service/Categoryservice";


function CategoryUpdate() {
    const navigate = useNavigate();
    //Khai bao status
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    
    const { id } = useParams("id");
    //const [category, setcategory] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getById(id).then(function (result) {
                const tmp = result.data.category;
                //setcategory(tmp);
                setName(tmp.name);
                setSlug(tmp.slug)
            });
        })();
    }, [])
    //Lấy danh sách
    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getAll().then(function (result) {
                setCategorys(result.data.data)
            });
        })();
    }, [])


    async function categoryEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var category = new FormData();
        category.append("name", name)
        category.append("slug", slug)

        
        if (image.files.length === 0) {
            category.append("image", "");
        }
        else {
            category.append("image", image.files[0]);
        }

        await categoryservice.update(category, id).then(function (res) {
            alert(res.data.message)
            navigate('/admin/category/', { replace: true });
        });;
    }
    return (
        <form onSubmit={categoryEdit} method="post">
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
                            <Link to="/admin/category" className="btn btn-sm btn-info">
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

export default CategoryUpdate;