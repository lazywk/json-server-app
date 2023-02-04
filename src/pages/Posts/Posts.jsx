
import axios from "axios";
import React, { useEffect, useState, useRef, useContext } from "react";
import { Modal } from "../../components/Modal/Modal";
import { UserContext } from "../../context/UserContext";
import "./posts.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postModal, setPostModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [postId, setPostId] = useState();
    const postValueTitle = useRef();
    const postTitleVal = useRef();
    const { user } = useContext(UserContext);

    async function getPosts() {
        const data = await axios.get("http://localhost:8080/posts")
        setPosts(data.data);
    }

    const addPostSubmit = (evt) => {
        evt.preventDefault();
        axios.post('http://localhost:8080/posts', {
            post_title: postTitleVal.current.value,
            post_value: postValueTitle.current.value,
            comments: [],
            author: user.email,
        })
            .then(data => {
                if (data) {
                    toast.success("Post added soccessifull")
                    getPosts();
                    setPostModal(false);
                }
            })
            .catch(err => console.log(err))
    }

    const deletePost = (id) => {
        axios.delete('http://localhost:8080/posts/' + id)
            .then(data => {
                if (data) {
                    getPosts();
                    toast.error("Post deleted")
                }
            })
            .catch(err => console.log(err))
    }

    const findPost = (evt) => {
        if (evt.target.id) {
            setPostId(evt.target.id)
        }
    }


    const editPostForm = (evt) => {
        evt.preventDefault();
        axios.put('http://localhost:8080/posts/' + postId, {
            post_title: postTitleVal.current.value,
            post_value: postValueTitle.current.value,
            comments: [],
            author: user.email,
        })
            .then(data => {
                if (data) {
                    toast.success("Post added soccessifull")
                    getPosts();
                    setEditModal(false);
                }
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPosts();
    }, [])
    return (
        <div className="container">
            <div className="my-3 d-flex justify-content-between align-item-center">
                <h2 className="h2 text-center my-3">Posts</h2>
                <button className="btn btn-success my-3" onClick={() => setPostModal(true)}>+Add Post</button>
            </div>
            {
                posts.length ? (
                    <ul className="row mx-auto mb-4 gy-3 justify-content-start p-0" onClick={findPost}>
                        {
                            posts.map(post => (
                                <li key={post.id} className="card shadow-sm py-3 me-4" style={{ height: "200px", width: "320px" }}>
                                    <h3 className="h5 text-capitalize mb-4 text-secondary post-title">{post.post_title}</h3>
                                    <p className="fst-italic blockquote-footer">{post.post_value}</p>

                                    <div className="post-control">
                                        <p className="p-2 me-2 text-primary m-0" onClick={() => setEditModal(true)} id={post.id}>edit</p>
                                        <p className="p-2 text-primary m-0" onClick={() => deletePost(post.id)}>delete</p>
                                    </div>
                                    <div className="mt-auto d-flex justify-content-between align-item-center">
                                        <p className="p-0 m-0 fst-italic text-primary text-decoration-underline comments">{post.comments.length} comments</p>
                                        <a href={`mailto:${post.author}`} className="fst-italic" >{post.author}</a>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                ) : ''
            }
            {
                postModal ? (<Modal modal={postModal} setModal={setPostModal} modalTitle="Add post">
                    <form onSubmit={addPostSubmit}>
                        <input className="form-control my-3" placeholder="Post Title" ref={postTitleVal} />
                        <textarea ref={postValueTitle} className="form-control" placeholder="Post Content" style={{ height: "150px", resize: 'none' }} />
                        <button className="btn btn-primary mt-2 ms-auto d-block px-5">send</button>
                    </form>
                </Modal>) : ('')
            }

            {
                editModal ? (<Modal modal={editModal} setModal={setEditModal} modalTitle="Edit post">
                    <form onSubmit={editPostForm}>
                        <input className="form-control my-3" placeholder="Post Title" ref={postTitleVal} />
                        <textarea ref={postValueTitle} className="form-control" placeholder="Post Content" style={{ height: "150px", resize: 'none' }} />
                        <button className="btn btn-primary mt-2 ms-auto d-block px-5">send</button>
                    </form>
                </Modal>) : ('')
            }
            <ToastContainer autoClose={1500} />
        </div >
    );
}