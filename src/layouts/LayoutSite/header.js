import logo from "../../../src/assetss/images/narT/narT.jpg"

import { Link } from "react-router-dom";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
function Header() {
  return (
      <section className="header">
        <div className="container">
          <div className="row">
            <div className="col md-2"> 
              <Link>
              <img src={logo} alt='logo' width={190} height={190}/>
              </Link>
             
            </div>
            <div className="col md-4 justify-content "> 
              <div class="input-group mb-3 pt-3">
                <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon2"><FaSearch/ ></span>
                </div>
              </div>
            </div>
            <div className="col md-4">
              <div className="account">
                <ul className="menutop">
                  <Link>
                  <li>0345438631</li>
                  </Link>
                  <Link>
                  <li>Đăng Nhập</li>
                  </Link>
                  <Link>
                  <li>Đăng ký</li>
                  </Link>
                </ul>
                <ul>
                  Giải tỏa cơn khát cùng narT
                </ul>
              </div>
            </div>
            <div className="col md-1">
              <Link width={10} height={30}>
                <FaShoppingBag >

                </FaShoppingBag>
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
   
}
  
  export default Header;