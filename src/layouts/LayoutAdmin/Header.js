import { Link } from "react-router-dom";

function Header() {
    return (
        <section classNameName="header bg-primary">
            <div classNameName="container-fluid">
                <nav className="navbar navbar-expand-lg bg-primary">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-white" to ="/admin">
                            Quản trị</Link>
                        <button className="navbar-toggler text-white" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">

                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                               
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Các Trang
                                    </Link>
                                    <ul className="dropdown-menu text-white">
                                        <li><Link className="dropdown-item" to="/admin/product">Tất cả sản phẩm</Link></li>
                                        <li><Link className="dropdown-item" to ="/admin/category">Danh mục</Link></li>
                                        <li><Link className="dropdown-item" to ="/admin/brand">Thương hiệu</Link></li>
                                        <li><Link className="dropdown-item" to ="/admin/post">Bài viết</Link></li>
                                        <li><Link className="dropdown-item" to ="/admin/menu">Menu</Link></li>
                                        <li><Link className="dropdown-item" to ="/admin/slider">Slider</Link></li>
                                        <li><Link className="dropdown-item" to ="/admin/user">Khách hàng</Link></li>
                                        <li><Link className="dropdown-item" to ="/admin/user">Nguoi dung</Link></li>

                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link text-white" aria-current="page" href="#">
                                        Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" href="#">Link</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link disabled text-white">
                                        Disabled</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
</form>
</div>
                    </div>
                </nav>
            </div>
        </section>
    );

}

export default Header;