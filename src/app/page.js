import Image from "next/image";
import styles from "./page.module.css";
import UserCard from "./components/UserCard";
import style from "@/app/styles/common.module.css";

const Home = async () => {
  const url = process.env.API_DATA;

  const res = await fetch(url);
  const data = await res.json();

  return (
    <div className={style.cardSection}>
      <div className={style.container}>
        <h1>New Arrivals</h1>
        <div className={style.card_section}>
          {data.map((curElem) => {
            return <UserCard key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
