import React from "react";
import NewsCard from "../components/NewsCard";
import { Product } from "../data";
import style from '../../styles/newsCard.module.css'

interface newsProps {
  newsData: Product[];
}

function NewsCardContainer({ newsData=[] }: newsProps) {
  return (
    <div className={style.container}>
      {newsData?.map((ele, key) => {
        let { userId, title, id, body } = ele;
        return (
          <NewsCard
            key={key}
            userId={userId}
            title={title}
            id={id}
            body={body}
          />
        );
      })}
    </div>
  );
}

export default NewsCardContainer;
