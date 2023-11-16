import "../Home/HomeStyle.css";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Productservice from "../../../service/Productservice";
import SliderShow from "../../backend/Slider/SliderShow";

function SP() {
  const [products, setCategory] = useState([]);
useEffect(function () {
  (async function () {
    await Productservice.getAll().then(function (result) {
      setCategory(result.data.data);
    });
  })();
}, []);
return (
  <section className="section-products">


    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-md-8 col-lg-6">

          <div className="header">
            <h2>Pepsico</h2>
          </div>
        </div>
        <div className="row" >
          {products.map(function(product,index){
            if(product.brand_id==1){
            
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

                           }
                         } )}
</div>  
      </div>
    </div>





    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-md-8 col-lg-6">

          <div className="header">
            <h2>cocacola</h2>
          </div>
        </div>
        <div className="row" >
          {products.map(function(product,index){
            if(product.brand_id==2){
            
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

                           }
                         } )}
</div>  
      </div>
    </div>


    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-md-8 col-lg-6">

          <div className="header">
            <h2>URC</h2>
          </div>
        </div>
        <div className="row" >
          {products.map(function(product,index){
            if(product.brand_id==3){
            
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

                           }
                         } )}
</div>  
      </div>
    </div>


    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-md-8 col-lg-6">

          <div className="header">
            <h2>tan hiep phat</h2>
          </div>
        </div>
        <div className="row" >
          {products.map(function(product,index){
            if(product.brand_id==4){
            
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

                           }
                         } )}
</div>  
      </div>
    </div>


    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-md-8 col-lg-6">

          <div className="header">
            <h2>redbull</h2>
          </div>
        </div>
        <div className="row" >
          {products.map(function(product,index){
            if(product.brand_id==6){
            
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

                           }
                         } )}
</div>  
      </div>
    </div>


    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-md-8 col-lg-6">

          <div className="header">
            <h2>th true milk</h2>
          </div>
        </div>
        <div className="row" >
          {products.map(function(product,index){
            if(product.brand_id==8){
            
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

                           }
                         } )}
</div>  
      </div>
    </div>



  </section>
);
}
export default SP;