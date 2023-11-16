import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import postservice from "../../../service/Postservice";


function PostUpdate() {
    const navigate = useNavigate();
    //Khai bao status
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [title, setTitle] = useState("");
    const [topic_id, setTopicId] = useState("");
    const [type, setType] = useState("");
    const [detail, setDetail] = useState("");
    
    const { id } = useParams("id");
    //const [post, setpost] = useState([]);
    useEffect(function () {
        (async function () {
            await postservice.getById(id).then(function (result) {
                const tmp = result.data.data;
                //setpost(tmp);
                setName(tmp.name);
                setSlug(tmp.slug);
                setTitle(tmp.title);
                setTopicId(tmp.topic_id);
                setType(tmp.type);
                setDetail(tmp.detail);
            });
        })();
    }, [])
    //Lấy danh sách
    const [posts, setPosts] = useState([]);
    useEffect(function () {
        (async function () {
            await postservice.getAll().then(function (result) {
                setPosts(result.data.data)
            });
        })();
    }, [])


    async function postEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var post = new FormData();
        post.append("slug", slug)
        post.append("title",title)
        post.append("topic_id",topic_id)
        post.append("detail",detail)
        post.append("type",type)


        
        if (image.files.length === 0) {
            post.append("image", "");
        }
        else {
            post.append("image", image.files[0]);
        }

        await postservice.update(post, id).then(function (res) {
            alert(res.data.message)
            navigate('/admin/post/', { replace: true });
        });;
    }
    return (
        <form onSubmit={postEdit} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">Cập nhật thương hiệu</strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/post" className="btn btn-sm btn-info">
                                Về danh sách
                            </Link>
                        </div>
</div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                        <div className="md-3">
                                <label htmlFor="title">title</label>
                                <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" value={title} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="detail">chú thích</label>
                                <textarea onChange={(e) => setDetail(e.target.value)} name="detail" value={detail} className="form-control"></textarea>
                            </div>

                            <div className="md-3">
                                <label htmlFor="type">type</label>
                                <textarea onChange={(e) => setType(e.target.value)} name="type" value={type} className="form-control"></textarea>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="md-3"><label htmlFor="topic_id">Chủ đề</label>
                                <select onChange={(e) => setTopicId(e.target.value)} value={topic_id} name="topic_id" className="form-control">
                                    <option value="0">Danh mục cha</option>
                                </select>
                            </div>
                            
                            <div className="md-3">
                                <label htmlFor="image">Hình đại diện</label>
                                <input type="file" id="image" className="form-control" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default PostUpdate;