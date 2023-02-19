import Post from "./Post.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
	return (`
			<div class="row align-items-center">
				<div
						class="w-100 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
						style="margin-left: -10px">
					<ul class="list-group rounded-0 rounded-bottom">
						${
							Post.map(item => {
								return PostSummaryItem(item);
							}).join('')
						}
					</ul>
				</div>
			</div>
	`);
}

export default PostSummaryList;