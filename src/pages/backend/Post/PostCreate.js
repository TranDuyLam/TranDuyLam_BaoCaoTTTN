import { useState } from "react";
import { Link } from "react-router-dom";
import postservice from "../../../service/Postservice";

function PostCreate() {
    const [title, setTitle] = useState('');
    const [topic_id, setTopicId] = useState('0');
    const [detail, setDetail] = useState('');
    const [type, setType] = useState('');

   
    async function postStore(event){
        event.preventDefault();
        const post={
            title:title,
            topic_id:topic_id,
            detail:detail,
            type:type
        }
        await postservice.create(post).then(function(res){
            alert(res.data.message)
        })
    }

    return (
        <form onSubmit={postStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm danh mục
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit"className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/post" className="btn btn-sm btn-info">Quay lại</Link>
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

export default PostCreate;