import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";

const getData = async (slug) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`
  );

  if (!response.ok) {
    throw new Error("something went wrong");
  }

  return response.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  const post = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/13739807/pexels-photo-13739807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="post"
          fill></Image>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/13739807/pexels-photo-13739807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="post"
            width={50}
            height={50}></Image>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>09.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
