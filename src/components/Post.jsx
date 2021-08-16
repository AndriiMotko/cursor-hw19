import React from "react";
import "./Post.css";

import commentIcon from "../assets/speech-bubble.png";
import retwittIcon from "../assets/retweet.png";
import likeIcon from "../assets/heart.png";
import forwardIcon from "../assets/upload.png";

const Post = ({ author, content, image, date }) => {
	return (
		<div className="post">
			<div className="post-body">
                <img className="author-photo" src={author.photo} alt="author" />
                <div className="article">
                    <div>
                        <span className="author-name"> {author.name} </span>
                        <span className="author-nickname"> {author.nickname} </span>
                        <span className="date"> {date} </span>
                    </div>
                    <div className="post-text"> {content} </div>
                    <img className="post-photo" src={image} alt="post" />
                </div>
            </div>
			<div className="actions">
				<img src={commentIcon} alt="commentIcon" />
				<img src={retwittIcon} alt="retwittIcon" />
				<img src={likeIcon} alt="likeIcon" />
				<img src={forwardIcon} alt="forwardIcon" />
			</div>
		</div>
	);
};

export default Post;
