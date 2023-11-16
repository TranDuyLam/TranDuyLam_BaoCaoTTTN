import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import productsaleservice from "../../../service/Productsaleservice";


function ProductsaleUpdate() {
    const navigate = useNavigate();
    //Khai bao status
    const [name, setName] = useState('');
    const [detail, setDetail] = useState('');
    const [brand_id, setBrandId] = useState('');
    const [category_id, setCategoryId] = useState('');

    const [price, setPrice] = useState('');
    const [price_sale, setPrice_sale] = useState('');
    const { id } = useParams("id")
    //const [productsale, setproductsale] = useState([]);
    useEffect(function () {
        (async function () {
            await productsaleservice.getById(id).then(function (result) {
                const tmp = result.data.data;
                //setproductsale(tmp);
                setName(tmp.name);
                setPrice(tmp.price);
                setPrice_sale(tmp.price_sale);
                setDetail(tmp.detail);
                setCategoryId(tmp.category_id);
                setBrandId(tmp.brand_id);

            });
        })();
    }, [])
    //Lấy danh sách
    const [productsales, setProductsales] = useState([]);
    useEffect(function () {
        (async function () {
            await productsaleservice.getAll().then(function (result) {
                setProductsales(result.data.data)
            });
        })();
    }, [])


    async function productsaleEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var productsale = new FormData();
       productsale.append("brand_id",brand_id)
       productsale.append("category_id",category_id)

        productsale.append("name", name)
       productsale.append("detail",detail)
       productsale.append("price",price)
       productsale.append("price_sale",price_sale)

        
        if (image.files.length === 0) {
            productsale.append("image", "");
        }
        else {
            productsale.append("image", image.files[0]);
        }

        await productsaleservice.update(productsale, id).then(function (res) {
            alert(res.data.message)
            navigate('/admin/productsale/', { replace: true });
        });;
    }
    return (
        <form onSubmit={productsaleEdit} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">Cập nhật sản phẩm</strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/productsale" className="btn btn-sm btn-info">
                                Về danh sách
                            </Link>
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

export default ProductsaleUpdate;