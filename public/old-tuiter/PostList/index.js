import Post from "./Post.js";
import PostItem from "./PostItem.js";

const PostList = () => {
	return (`
			<div class="align-items-center">
				<ul class="list-group">
					${
						Post.map(item => {
							return PostItem(item);
						}).join('')
					}
				</ul>
			</div>
	`);
}

export default PostList;