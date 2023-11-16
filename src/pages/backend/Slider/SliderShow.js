import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Sliderservice from "../../../service/Sliderservice";

function SliderShow() {

    const {id} =useParams("id"); //"id" trong routes
    const [slider,setSlider]=useState([]);
    useEffect(function(){
        (async function(){
            await Sliderservice.getById(id).then(function(result){//// show controller 
                setSlider(result.data.slider);
            });
        })();
    },[]);

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT slider</strong></div>
                        <div className="col-md-6 text-end " >
                            <Link className="btn btn-sm btn-primary me-1" to={"/admin/slider/update/"+slider.id}>
                               <FaEdit/> </Link>
                            <button className="btn btn-sm btn-danger me-2"><FaTrash/></button>
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/slider" className="btn btn-sm btn-info me-2">
                                Về danh sách
                            </Link>
                        </div>

                </div>
            </div>

             <div className="card-body">
                <table className="table table-bordered table-hover table-striped">
                 <thead>
                    {/* <tr>
                        <th>ID</th>
                        <th>Tên danh mục</th>
                        <th>Slug</th>
                        <th>Ngày tạo</th>
                        <th>Chức năng</th>
                        <th>ID</th>
                    </tr> */}
                 </thead>
                 <tbody>
                       <tr>
                            <th>Id</th>
                            <td>{slider.id}</td>
                        </tr>
                        <tr>
                            <th>Tên liên hệ</th>
                            <td>{slider.name}</td>
                        </tr>
                        <tr>
                            <th>Liên Kết</th>
                            <td>{slider.link}</td>
                        </tr>
                        <tr>
                            <th>Sắp xếp</th>
                            <td>{slider.sort_order}</td>
                        </tr>
                        <tr>
                            <th>position</th>
                            <td>{slider.position}</td>
                        </tr>
                        <tr>
                            <th>Ngày tạo</th>
                            <td>{slider.created_at}</td>
                        </tr>

                   
                 </tbody>
                 </table>
             </div>

        </div>
     );
}

export default SliderShow;