import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Productservice from "../../../service/Productservice";
import Brandservice from "../../../service/Brandservice";
import Sliderservice from "../../../service/Sliderservice";


import ProductItem from "../../../components/frontend/Productitem";
import Postservice from "../../../service/Postservice";
import "../../../../src/assetss/css/bootstrap.css";
import logo from "../../../../src/assetss/images/narT/banner3.jpg"

// Custom JS

import "../../../../src/assetss/css/ui.css";
import "../../../../src/assetss/css/responsive.css";


function SP() {
    const [products, setCategory] = useState([]);
  useEffect(function () {
    (async function () {
      await Productservice.getAll().then(function (result) {
        setCategory(result.data.data);
      });
    })();
  }, []);

  const [brands, setbrand] = useState([]);
  useEffect(function () {
    (async function () {
      await Brandservice.getAll().then(function (result) {
        setbrand(result.data.data);
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


  const [sliders, setSlider] = useState([]);
  useEffect(function () {
    (async function () {
      await Sliderservice.getAll().then(function (result) {
        setSlider(result.data.data);
      });
    })();
  }, []);


  return (
    <>
    <section className="section-products">






    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">


    <div class="carousel-item active">
            <img width={2330} height={1000} src={logo} alt="hinh"/> 
            </div>

{sliders.map(function(slider,index){
        return(

            <div class="carousel-item ">
            <img width={2330} height={1000} src={slider.image} alt="hinh"/> 
            </div>


        )
      
})}
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
              <h2>Sản phẩm theo doanh mục 1</h2>
            </div>
          </div>
          <div className="row" >
            {products.map(function(product,index){
              if(product.category_id==1){
                             return( 
                                 <div className="col-sm-3 mb-3"  >
        <div className="product-item border">
            <div className="product-image">
                <Link to={"/chi-tiet-san-pham/"+product.id}>
                <img width={100} height={100} src={product.image} alt="hinh"/>
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
 } })}
          </div>
        </div>
      </div>





      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8 col-lg-6">
            <div className="header">
              <h2>Sản phẩm theo doanh mục 2</h2>
            </div>
          </div>
          <div className="row" >
            {products.map(function(product,index){
              if(product.category_id==2){
                             return( 
                                 <div className="col-sm-3 mb-3"  >
        <div className="product-item border">
            <div className="product-image">
                <Link to={"/chi-tiet-san-pham/"+product.id}>
                <img width={100} height={100} src={product.image} alt="hinh"/>
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
 } })}
          </div>
        </div>
      </div>



      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8 col-lg-6">
            <div className="header">
              <h2>Sản phẩm bán chạy</h2>
            </div>
          </div>
          <div className="row" >
            {products.map(function(product,index){
              if(product.status==1){
                             return( 
                                 <div className="col-sm-3 mb-3"  >
        <div className="product-item border">
            <div className="product-image">
                <Link to={"/chi-tiet-san-pham/"+product.id}>
                <img width={100} height={100} src={product.image} alt="hinh"/>
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
 } })}
          </div>
        </div>
      </div>



      
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8 col-lg-6">
            <div className="header">
              <h2>Sản phẩm khuyến mãi</h2>
            </div>
          </div>
          <div className="row" >
            {products.map(function(product,index){
              if(product.status==2){
                             return( 
                                 <div className="col-sm-3 mb-3"  >
        <div className="product-item border">
            <div className="product-image">
                <Link to={"/chi-tiet-san-pham/"+product.id}>
                <img width={100} height={100} src={product.image} alt="hinh"/>
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
 } })}
          </div>
        </div>
      </div>



      
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8 col-lg-6">
            <div className="header">
              <h2>Sản phẩm mới</h2>
            </div>
          </div>
          <div className="row" >
            {products.map(function(product,index){
              if(product.status==3){
                             return( 
                                 <div className="col-sm-3 mb-3"  >
        <div className="product-item border">
            <div className="product-image ">
                <Link to={"/chi-tiet-san-pham/"+product.id}>
                <img width={100} height={100} src={product.image} alt="hinh"/>
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
 } })}
          </div>
        </div>
      </div>




       


    </section>
    </>
  );
}
export default SP;