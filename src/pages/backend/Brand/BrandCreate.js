import { useState } from "react";
import { Link } from "react-router-dom";
import brandservice from "../../../service/Brandservice";

function BrandCreate() {
    const [name, setName] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [metakey, setMetakey] = useState('');
    const [slug, setSlug] = useState('');

    const [parent_id, setParentId] = useState(0);
    const [sort_order, setSortOrder] = useState(0);
    const [status, setStatus] = useState(1);
    async function brandStore(event){
        event.preventDefault();
        const brand={
            name:name,
            slug:slug,
            metadesc:metadesc,
            metakey:metakey,
            parent_id:parent_id,
            sort_order:sort_order,
            status:status
        }
        await brandservice.create(brand).then(function(res){
            alert(res.data.message)
        })
    }

    return (
        <form onSubmit={brandStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm thương hiệu
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit"className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/brand" className="btn btn-sm btn-info">Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Tên thương hiệu</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>
                            <div className="md-3">
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

export default BrandCreate;