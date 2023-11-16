import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Productservice from "../../../service/Productservice";
import ProductItem from "../../../components/frontend/Productitem";
import Postservice from "../../../service/Postservice";


function SP() {
    const [products, setCategory] = useState([]);
  useEffect(function () {
    (async function () {
      await Productservice.getAll().then(function (result) {
        setCategory(result.data.data);
      });
    })();
  }, []);
  
  const [posts, setPost] = useState([]);
  useEffect(function () {
    (async function () {
      await Postservice.getAll().then(function (result) {
        setPost(result.data.data);
      });
    })();
  }, []);


  return (
    
    <section className="section-products">
      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="//theme.hstatic.net/1000161013/1000407503/14/slider_1.jpg?v=343" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="//theme.hstatic.net/1000161013/1000407503/14/slider_4.jpg?v=343" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="//theme.hstatic.net/1000161013/1000407503/14/slider_2.jpg?v=343" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8 col-lg-6">
            <div className="header">
              <h2>Tất cả sản Phẩm</h2>
            </div>
          </div>
          <div className="row" >
            {products.map(function(product,index){
                             return( 
                                 <div className="col-sm-3 mb-3"  >
        <div className="product-item border">
            <div className="product-image">
                <Link to={"/chi-tiet-san-pham/"+product.slug}>
                <img className="img-fluid" src={product.image} alt="hinh"/>
               </Link>
            </div>
            <div className="product-name p-2">
                <h3 className="text-center fs-4">{product.name}</h3>
            </div>
            <div className="product-pice p-2 fs-4 ">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-danger fs-4">{product.price_sale}<sup>$</sup></strong>
                    </div>
                    <div className="col-6 text-end">
                        <del className="text fs-4">{product.price}</del><sup>$</sup>
                    </div></div>
            </div>
            <div className="link-detail">Chi tiết</div>
        </div>


    </div>
                                );
                    })}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8 col-lg-6">
            <div className="header">
              <h2>Tất cả bài viết</h2>
            </div>
          </div>
          <div className="row" >
            {posts.map(function(post,index){
                             return( 
                                 <div className="col-sm-3 mb-3"  >
        <div className="product-item border">
            <div className="product-image">
                <Link to={"/admin/post/show/"+post.id}>
                <img className="img-fluid" src={post.image} alt="hinh"/>
               </Link>
            </div>
            <div className="product-name p-2">
                <h3 className="text-center fs-4">{post.title}</h3>
            </div>
            <div className="product-pice p-2 fs-4 ">
            </div>
        </div>


    </div>
                                );
                    })}
          </div>
        </div>
      </div>     


    </section>
  );
}
export default SP;