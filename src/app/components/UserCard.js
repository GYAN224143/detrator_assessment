import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles/common.module.css";

const UserCard = (curElem) => {
  const { id, title, image, description, category, price, rating } = curElem;
  return (
    <div>
      <>
        <div className={styles.card}>
          <div className={styles.card_image}>
            <Image src={image} alt={title} width={140} height={200} />
          </div>
          <div className={styles.card_data}>
            <h2>{title.substring(0, 18)}</h2>
            <p>{`${description.substring(0, 66)} ...`}</p>
            <div className={styles.rating}>
              <p>
                <span className={styles.subHeading}>Rs.</span>
                {price}
              </p>
              <p>
                <span className={styles.subHeading}>Rating: </span>
                {rating.rate}
              </p>
            </div>
            <div className={styles.customButton}>
              <button className={styles.buyNow}>Buy Now</button>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default UserCard;
