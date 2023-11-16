import { useEffect, useState } from "react";
import productservice from "../../../service/Productservice";
import { Link, useParams } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";


function ProductDetail() {
    const { id } = useParams("id");
    const [product, setProduct] = useState([]);
    useEffect(function () {
        (async () => {
            await productservice.getById(id).then((result) => {
                setProduct(result.data.data);
            });
        })();
    }, [])

    const [products, setCategory] = useState([]);
    useEffect(function () {
      (async function () {
        await productservice.getAll().then(function (result) {
          setCategory(result.data.data);
        });
      })();
    }, []);

    return (
        <>
        <section className="py-3 bg-light">
      <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Category name</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Sub category</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Items
          </li>
        </ol>
      </div>
    </section>
    {/* ========================= SECTION CONTENT ========================= */}
    <section className="section-content bg-white padding-y">
      <div className="container">
        {/* ============================ ITEM DETAIL ======================== */}
        <div className="row">
          <aside className="col-md-6">
            
             
                
              
                    
                    
                      <img src={product.image}/>
                   
                 
               
             
          </aside>
          <main className="col-md-6">
            <article className="product-info-aside">
              <h2 className="title mt-3">{product.name}</h2>
              <div className="rating-wrap my-3">
                <ul className="rating-stars">
                  
                  
                </ul>
                <small className="label-rating text-muted">132 reviews</small>
                <small className="label-rating text-success">
                  {" "}
                  <i className="fa fa-clipboard-check" /> 154 orders{" "}
                </small>
              </div>{" "}
              {/* rating-wrap.// */}
              <div className="mb-3">
                <var className="price h4">{product.price} VND</var>
                <span className="text-muted"></span>
              </div>{" "}
              {/* price-detail-wrap .// */}
              <p>
              Nước tăng lực Sting, với vị ngon sảng khoái, cùng công thức có chứa taurine, inositol, vitamin B, kết hợp cùng nhân sâm, mang đến cho bạn nguồn năng lượng mạnh mẽ, để biến mỗi ngày của bạn thành một cuộc phiêu lưu kỳ thú{" "}
              </p>
              <dl className="row">
                <dt className="col-sm-3">Công ty sản xuất</dt>
                <dd className="col-sm-9">
                  <a href="#">Pepsico</a>
                </dd>
                <dt className="col-sm-3">Article number</dt>
                <dd className="col-sm-9">596 065</dd>
                <dt className="col-sm-3">Guarantee</dt>
                <dd className="col-sm-9">2 year</dd>
                <dt className="col-sm-3">Delivery time</dt>
                <dd className="col-sm-9">3-4 days</dd>
                <dt className="col-sm-3">Availabilty</dt>
                <dd className="col-sm-9">in Stock</dd>
              </dl>
              <div className="form-row  mt-4">
                <div className="form-group col-md flex-grow-0">
                  <div className="input-group mb-3 input-spinner">
                    <div className="input-group-prepend">
                      <button
                        className="btn btn-light"
                        type="button"
                        id="button-plus"
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={1}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-light"
                        type="button"
                        id="button-minus"
                      >
                        {" "}
                        −{" "}
                      </button>
                    </div>
                  </div>
                </div>{" "}
                {/* col.// */}
                <div className="form-group col-md">
                  <a href="#" className="btn  btn-primary">
                    <i className="fas fa-shopping-cart" />{" "}
                    <span className="text">Add to cart</span>
                  </a>
                  <a href="#" className="btn btn-light">
                    <i className="fas fa-envelope" />{" "}
                    <span className="text">Contact supplier</span>
                  </a>
                </div>{" "}
                {/* col.// */}
              </div>{" "}
              {/* row.// */}
            </article>{" "}
            {/* product-info-aside .// */}
          </main>{" "}
          {/* col.// */}
        </div>{" "}
        {/* row.// */}
        {/* ================ ITEM DETAIL END .// ================= */}
      </div>{" "}
      {/* container .//  */}
    </section>
    {/* ========================= SECTION CONTENT END// ========================= */}
    {/* ========================= SECTION  ========================= */}
    


    <div className="row">
      <div className="col-lg-12 text-center pt-3">
        <h4>Sản phẩm cùng thương hiệu</h4>
      </div>
    </div>

      <div className="row">
      {products.map(function(narT,index){
        if(product.brand_id==narT.brand_id){
                        return <>
                          <div className="product-item border">


<Link to={"/chi-tiet-san-pham/"+narT.id}>
  
                 <img  width={100} height={100}              src={narT.image}/>  
               </Link>
                       



                        </div>


                        
                        </>
        }
                    })}


    </div>


    <div className="row">
      <div className="col-lg-12 text-center pt-3">
        <h4>Sản phẩm cùng doanh mục</h4>
      </div>
    </div>

      <div className="row">
      {products.map(function(narT,index){
        if(product.category_id==narT.category_id){
                        return <>
                        <div className="product-item border">


<Link to={"/chi-tiet-san-pham/"+narT.id}>
                 <img  width={100} height={100}              src={narT.image}/>   
               </Link>
                       



                        </div>


                        
                        </>
        }
                    })}


    </div>


    </>
    );
}

export default ProductDetail;