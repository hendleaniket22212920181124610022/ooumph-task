import { useState, useEffect } from "react";
import "./Post.css";

function Post({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const savedComments =
      JSON.parse(localStorage.getItem(`comments-${post.id}`)) || [];
    setComments(savedComments);
  }, [post.id]);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    const newComments = [...comments, comment];
    setComments(newComments);
    localStorage.setItem(`comments-${post.id}`, JSON.stringify(newComments));
    setComment("");
  };

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="flex items-center">
          <div className="story-ring">
            <img
              src={post.profile_picture}
              alt={post.username}
              className="profile-picture"
            />
          </div>
          <span className="username">{post.username}</span>
        </div>
      </div>

      <div className="post-image-container">
        <img
          src={post.post_image}
          alt="Post content"
          className="post-image"
          onDoubleClick={handleLikeClick}
        />
      </div>

      <div className="actions-container">
        <div className="actions-buttons">
          <button
            onClick={handleLikeClick}
            className={`action-button ${isLiked ? "liked" : ""}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button
            onClick={() => setShowComments(!showComments)}
            className="action-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>
        </div>
        <div className="likes-count">
          <strong>{likesCount.toLocaleString()} likes</strong>
        </div>
        <p className="post-caption">
          <strong>{post.username}</strong> {post.caption}
        </p>

        {comments.length > 0 && (
          <button
            className="view-comments-btn"
            onClick={() => setShowComments(!showComments)}
          >
            View all {comments.length} comments
          </button>
        )}

        {showComments && (
          <div className="comments-section">
            <div className="comments-list">
              {comments.map((cmt, index) => (
                <p key={index} className="comment-item">
                  {cmt}
                </p>
              ))}
            </div>
            <form onSubmit={handleComment} className="comment-form">
              <input
                type="text"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="comment-input"
              />
              <button type="submit" className="post-comment-btn">
                Post
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;
