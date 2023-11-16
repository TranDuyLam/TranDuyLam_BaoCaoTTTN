import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import brandservice from "../../../service/Brandservice";


function BrandUpdate() {
    const navigate = useNavigate();
    //Khai bao status
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    
    const { id } = useParams("id");
    //const [brand, setbrand] = useState([]);
    useEffect(function () {
        (async function () {
            await brandservice.getById(id).then(function (result) {
                const tmp = result.data.data;
                //setbrand(tmp);
                setName(tmp.name);
                setSlug(tmp.slug)
            });
        })();
    }, [])
    //Lấy danh sách
    const [brands, setBrands] = useState([]);
    useEffect(function () {
        (async function () {
            await brandservice.getAll().then(function (result) {
                setBrands(result.data.data)
            });
        })();
    }, [])


    async function brandEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var brand = new FormData();
        brand.append("name", name)
        brand.append("slug", slug)

        
        if (image.files.length === 0) {
            brand.append("image", "");
        }
        else {
            brand.append("image", image.files[0]);
        }

        await brandservice.update(brand, id).then(function (res) {
            alert(res.data.message)
            navigate('/admin/brand/', { replace: true });
        });;
    }
    return (
        <form onSubmit={brandEdit} method="post">
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
                            <Link to="/admin/brand" className="btn btn-sm btn-info">
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

export default BrandUpdate;