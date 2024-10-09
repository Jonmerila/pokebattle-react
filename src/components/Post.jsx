import { Link } from "react-router-dom";

const Post = ({post}) => {

    return(
        <div>
        <Link to={`/post/${post.id}`} state={post}>{post.title}</Link>
        </div>
    )
}

export default Post;

