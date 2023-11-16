import  urlImage  from "../../TranduyLam/config";
import { Link } from "react-router-dom";
function ProductItem(props) {
    return (  
        <div className="col-sm-3 mb-3"  >
        <div className="product-item border">
            <div className="product-image">
                <Link to={"/chi-tiet-san-pham/"+props.product.slug}>
               <img src={urlImage +'product/'+ props.product.image} className="img-fluid" alt="san pham" />
               </Link>
            </div>
            <div className="product-name p-2">
                <h3 className="text-center fs-4">{props.product.name}</h3>
            </div>
            <div className="product-pice p-2 fs-4 ">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-danger fs-4">{props.product.price}<sup>$</sup></strong>
                    </div>
                    <div className="col-6 text-end">
                        <del className="text fs-4">{props.product.price_sale}</del><sup>$</sup>
                    </div></div>
            </div>
            <div className="link-detail">Chi tiết</div>
        </div>


    </div>
    );
}

export default ProductItem;