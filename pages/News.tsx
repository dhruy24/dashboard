import React from "react";
import NewsCardContainer from "../src/Container/NewsCardContainer";
import style from '../styles/newsPage.module.css';

function News({newsData}:any) {
  return (
    <div className={style.container}>
      <NewsCardContainer newsData = {newsData}/>
    </div>
  );
}

export  async function getStaticProps(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result  = await res.json();
  return {
      props :{
          newsData:result,
      }
  }
}

export default News;