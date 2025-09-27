import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { PostData, PostProps } from "@/interfaces";
import { useState } from "react";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [postList, setPostList] = useState<PostProps[]>(posts);

  const handleAddPost = (newPost: PostData) => {
    setPostList((prevPosts) => {
      const nextId = prevPosts.length
        ? prevPosts.reduce((maxId, postItem) => Math.max(maxId, postItem.id), 0) + 1
        : 1;

      return [{ ...newPost, id: nextId }, ...prevPosts];
    });
  };

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="rounded-full bg-blue-700 px-4 py-2 text-white"
          >
            Add Post
          </button>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {postList.map(({ title, body, userId, id }) => (
            <PostCard key={id} title={title} body={body} userId={userId} id={id} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
