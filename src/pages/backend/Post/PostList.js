import { Link } from "react-router-dom";
import { FaPlus,FaEye,FaEdit,FaTrash,FaRegEye } from 'react-icons/fa';
import { useEffect, useState } from "react";
import postservice from "../../../service/Postservice";

function PostList() {
    const [posts, setPosts] = useState([]);
    const [statusdel, setStatusDelete] = useState(0);
  useEffect(function () {
    (async function () {
      await postservice.getAll().then(function (result) {
        setPosts(result.data.data);
      });
    })();
  }, [statusdel]);
  function postDelete(id) {
    postservice.remove(id).then(function (result) {
        alert(result.data.message);
        setStatusDelete(result.data.id);
    });
}
    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                <div className="col-6">
                    <strong className="text-primary">Bài viết</strong>
                </div>
                <div className="col-6 text-end ">
                  <Link className="btn btn-sm btn-success"  to="/admin/post/create">
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
                        <th>Title</th>
                        <th>Chú thích</th>

                        <th>Chức năng</th>
                        

                    </tr>
                    </thead>
                    <tbody>
                    {posts.map(function(post,index){
                             return(<tr key={index} > 
                                <td className="text-center">
                                    <input type="checkbox" />
                                </td>
                                <td className="text-center">
                                    <img className="img-fluid" src={post.image} alt="hinh"/>
                                </td>
                                <td className="text-center">{post.title}</td>
    
                                <td className="text-center">{post.detail}</td>
                                <td className="text-center">
                                    <Link to={"/admin/post/show/"+post.id} className="btn btn-sm btn-outline-success me-1">
                                        <FaRegEye/>
                                    </Link>
                                    <Link to={"/admin/post/update/"+post.id} className="btn btn-sm btn-outline-primary me-1">
                                        <FaEdit/>
                                    </Link>
                                    <button onClick={() => postDelete(post.id)} className="btn btn-sm btn-outline-danger me-1">
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

export default PostList;