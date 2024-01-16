import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/13739807/pexels-photo-13739807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="post"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>09.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link href={`/blog/${post.id}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
