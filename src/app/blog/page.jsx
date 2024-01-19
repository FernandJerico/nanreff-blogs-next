import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

export const metadata = {
  title: "Blogs",
  description: "Blogs description",
};

// Fetch Data With API
const getData = async () => {
  const response = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("something went wrong!");
  }

  return response.json();
};

const BlogPage = async () => {
  // Fetch Data With API
  const posts = await getData();

  // Fetch Data Without API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
