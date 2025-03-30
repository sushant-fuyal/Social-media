import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PostList } from "../store/post-list-store";

export const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-100 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}>
            <MdDeleteForever />
            <span className="visually-hidden">unread messages</span>
          </span>
          <span className="position-absolute top-100 start-0 translate-middle badge rounded-pill bg-danger">
            {post.reactions}
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {" "}
            {tag}{" "}
          </span>
        ))}
      </div>
    </div>
  );
};
