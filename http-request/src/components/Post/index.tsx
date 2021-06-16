import { Response } from '../../App';

interface PostDTO {
  post: Response;
}

const Post = ({ post }: PostDTO) => {
  return (
    <div className="container">
      <article>{post.titulo}</article>
    </div>
  );
};

export default Post;
