import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        Nanreff.
      </div>
      <div className={styles.text}>
        Nanreff creative thoughts All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
