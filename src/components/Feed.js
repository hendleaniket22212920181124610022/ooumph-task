import { useState, useEffect } from "react";
import Post from "./Post";
import "./Feed.css";

const mockPosts = [
  {
    id: 1,
    username: "john_doe",
    profile_picture: "https://randomuser.me/api/portraits/men/1.jpg",
    post_image: "https://picsum.photos/600/400?random=1",
    caption: "Exploring the mountains!",
    likes: 120,
    comments: 15,
  },
  {
    id: 2,
    username: "jane_smith",
    profile_picture: "https://randomuser.me/api/portraits/women/2.jpg",
    post_image: "https://picsum.photos/600/400?random=2",
    caption: "Beach vibes 🏖️",
    likes: 200,
    comments: 25,
  },
  {
    id: 3,
    username: "traveler_joe",
    profile_picture: "https://randomuser.me/api/portraits/men/3.jpg",
    post_image: "https://picsum.photos/600/400?random=3",
    caption: "Sunset in the desert 🌅",
    likes: 95,
    comments: 10,
  },
  {
    id: 4,
    username: "foodie_girl",
    profile_picture: "https://randomuser.me/api/portraits/women/4.jpg",
    post_image: "https://picsum.photos/600/400?random=4",
    caption: "Delicious pasta 🍝",
    likes: 300,
    comments: 45,
  },
  {
    id: 5,
    username: "nature_lover",
    profile_picture: "https://randomuser.me/api/portraits/men/5.jpg",
    post_image: "https://picsum.photos/600/400?random=5",
    caption: "Forest hike 🌲",
    likes: 150,
    comments: 20,
  },
  {
    id: 6,
    username: "city_explorer",
    profile_picture: "https://randomuser.me/api/portraits/women/6.jpg",
    post_image: "https://picsum.photos/600/400?random=6",
    caption: "Skyline at night 🌃",
    likes: 250,
    comments: 30,
  },
  {
    id: 7,
    username: "adventure_guy",
    profile_picture: "https://randomuser.me/api/portraits/men/7.jpg",
    post_image: "https://picsum.photos/600/400?random=7",
    caption: "Rock climbing adventure 🧗",
    likes: 175,
    comments: 18,
  },
  {
    id: 8,
    username: "fashionista",
    profile_picture: "https://randomuser.me/api/portraits/women/8.jpg",
    post_image: "https://picsum.photos/600/400?random=8",
    caption: "New outfit, who dis? 👗",
    likes: 400,
    comments: 60,
  },
  {
    id: 9,
    username: "tech_guru",
    profile_picture: "https://randomuser.me/api/portraits/men/9.jpg",
    post_image: "https://picsum.photos/600/400?random=9",
    caption: "Latest gadget unboxing 📦",
    likes: 220,
    comments: 35,
  },
  {
    id: 10,
    username: "artsy_amy",
    profile_picture: "https://randomuser.me/api/portraits/women/10.jpg",
    post_image: "https://picsum.photos/600/400?random=10",
    caption: "Watercolor painting 🎨",
    likes: 180,
    comments: 22,
  },
];

function Feed() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const fetchPosts = async () => {
    if (isLoading) return;

    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newPosts = mockPosts.slice(
      (page - 1) * postsPerPage,
      page * postsPerPage
    );

    if (newPosts.length > 0) {
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    }

    setIsLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto py-4 sm:py-8 px-2 sm:px-4">
      <div className="space-y-4 sm:space-y-8">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      {isLoading && (
        <div className="text-center p-2 sm:p-4">
          <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-gray-900 mx-auto"></div>
        </div>
      )}

      {!isLoading && posts.length < mockPosts.length && (
        <div className="load-more-container">
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="load-more-btn"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Feed;
