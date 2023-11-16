import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Productservice from "../../../service/Productservice";
import ProductItem from "../../../components/frontend/Productitem";
import Postservice from "../../../service/Postservice";


function Trangdon() {
  return (
    
    <div>Giới thiệu: đây là cửa hàng của narT<br/>
        Chính sách mua hàng: mua hàng càng nhiều sẽ càng được ưu đãi<br/>
        Chính sách bảo hành: các sản phẩm sẽ được bảo hành hoàn trả trong 7 ngày nếu như lỗi ở cửa hàng<br/>
        Chính sách vận chuyển : miễn phí toàn quốc<br/>
        Chính sách đổi trả : có thể đổi hoặc trả nếu như còn tem của sản phẩm</div>    
   
  );
}
export default Trangdon;