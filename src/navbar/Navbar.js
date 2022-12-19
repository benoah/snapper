import React, { useState, useEffect } from "react";
import { getCurrentTime} from "../utils/getTime";
import { getCurrentDate } from "../utils/getDate";
import styles from "./Navbar.module.css";
import Avatar from "./97.png"


export default function Navbar() {
  const [date, setDate] = useState();
  const [time, setTime] = useState();

    useEffect(() => {
    setInterval(() => {
      let { year, month, day } = getCurrentDate();
      setDate(`${day}-${month}-${year}`);
    }, 1000);

    setInterval(() => {
      let { hours, minutes, format } = getCurrentTime();
      setTime(`${hours}:${minutes} ${format}`);
    }, 1000);
  }, []);

  return (
<nav>
    <div className={styles.logoWrapper}>
    <h1>Snapper</h1>
    </div>
    <div className={styles.linksWrapper}>
    <div className={styles.links}>
          <h5>Min Side</h5>
          <h5>Leder</h5>
          <h5>Ansatte</h5>
        </div>
        <div className={styles.profile}>
        <img src={Avatar} className={styles.profileImg} alt={"avatar"} />
        <h1 className={styles.name}>Ben Moussa</h1>
        <div className={styles.date}>
        <p>{date}</p>
        <h1>{time}</h1>
      </div>
      </div>
  </div>
</nav>
    
  )
}
