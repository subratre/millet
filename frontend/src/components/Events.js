import React from "react";
import { productData } from "../static/data";
import styles from "../styles/styles";
import EventCard from "../components/EventCard.js";

const Events = () => {
  return (
    <div>
      <div className={`${styles.heading} px-14`}>
        <h1>Popular Event</h1>
      </div>
      <div className={`${styles.section} mb-5`}>
        <div className="w-full grid">
          <EventCard />
        </div>
      </div>
    </div>
  );
};

export default Events;
