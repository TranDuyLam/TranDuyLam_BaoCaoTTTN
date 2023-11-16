import { Link } from "react-router-dom";

import { FaPlus,FaEdit,FaTrash,FaRegEye } from 'react-icons/fa';
import { useEffect, useState } from "react";
import sliderservice from "../../../service/Sliderservice";

function SliderList() {
    const [sliders, setSliders] = useState([]);
    const [statusdel, setStatusDelete] = useState(0);
  useEffect(function () {
    (async function () {
      await sliderservice.getAll().then(function (result) {
        setSliders(result.data.data);
      });
    })();
  }, [statusdel]);
  function sliderDelete(id) {
    sliderservice.remove(id).then(function (result) {
        alert(result.data.message);
        setStatusDelete(result.data.id);
    });
}
    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                <div className="col-6">
                    <strong className="text-primary">Thương Hiệu</strong>
                </div>
                <div className="col-6 text-end ">
                  <Link className="btn btn-sm btn-success"  to="/admin/slider/create">
                    <FaPlus/> Thêm
                    </Link>
                </div>
                </div>
                
             </div>
            

             <div className="card-body">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th style={{width:150}}>Hình</th>
                        <th>Tên Thương Hiệu</th>
                        <th>Slug</th>
                        <th>Chức năng</th>
                        

                    </tr>
                    </thead>
                    <tbody>
                    {sliders.map(function(slider,index){
                             return(<tr key={index} > 
                                <td className="text-center">
                                    <input type="checkbox" />
                                </td>
                                <td className="text-center">
                                    <img className="img-fluid" src={slider.image} alt="hinh"/>
                                </td>
                                <td className="text-center">{slider.name}</td>
    
                                <td className="text-center">{slider.slug}</td>
                                <td className="text-center">
                                    <Link to={"/admin/slider/show/"+slider.id} className="btn btn-sm btn-outline-success me-1">
                                        <FaRegEye/>
                                    </Link>
                                    <Link to={"/admin/slider/update/"+slider.id} className="btn btn-sm btn-outline-primary me-1">
                                        <FaEdit/>
                                    </Link>
                                    <button onClick={() => sliderDelete(slider.id)} className="btn btn-sm btn-outline-danger me-1">
                                        <FaTrash/>
                                    </button>
                                </td>
                                </tr>);
                    })}
                    </tbody>
                </table>
               
             </div>
        
        

        </div>
     );
}

export default SliderList;