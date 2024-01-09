import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/13739807/pexels-photo-13739807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="post"
          fill></Image>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar}
            src="https://images.pexels.com/photos/13739807/pexels-photo-13739807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="post"
            width={50} height={50}></Image>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Fernand Jerico</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>09.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quis
          mollitia maxime eaque minus rem aut dolore dolorum sunt quas.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
