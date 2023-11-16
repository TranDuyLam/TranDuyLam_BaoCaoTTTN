import { useState } from "react";
import { Link } from "react-router-dom";
import productservice from "../../../service/Productservice";

function ProductCreate() {
    const [category_id, setCategoryId] = useState('');
    const [brand_id, setBrandId] = useState('');

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [price_sale, setPrice_sale] = useState('');
    const [detail, setDetail] = useState('');


    async function productStore(event){
        event.preventDefault();
        const product={
            category_id:category_id,
            brand_id:brand_id,
            detail:detail,
            name:name,
            price:price,
            price_sale:price_sale
        }
        await productservice.create(product).then(function(res){
            alert(res.data.message)
        })
    }

    return (
        <form onSubmit={productStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm sản phẩm
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit"className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/product" className="btn btn-sm btn-info">Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                        <div className="md-3">
                                <label htmlFor="category_id">category_id</label>
                                <input onChange={(e) => setCategoryId(e.target.value)} type="text" name="category_id" value={category_id} className="form-control" />
                            </div><div className="md-3">
                                <label htmlFor="brand_id">brand_id</label>
                                <input onChange={(e) => setBrandId(e.target.value)} type="text" name="brand_id" value={brand_id} className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="name">Tên sản phẩm</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="detail">Chú thích</label>
                                <textarea onChange={(e) => setDetail(e.target.value)} name="detail" value={detail} className="form-control"></textarea>
                            </div>

                            <div className="md-3">
                                <label htmlFor="price">Giá gốc</label>
                                <textarea onChange={(e) => setPrice(e.target.value)} name="price" value={price} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="price_sale">Giá bán</label>
                                <textarea onChange={(e) => setPrice_sale(e.target.value)} name="price_sale" value={price_sale} className="form-control"></textarea>
                            </div>


                        </div>
                        <div className="col-md-3">
                            
                            
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

export default ProductCreate;