import Post from "./Post.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
	return (`
			<div class="row align-items-center">
				<div
						class="w-100 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6"
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