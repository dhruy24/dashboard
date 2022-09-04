import React, { useContext } from "react";
import classnames from 'classnames';
import UsersCard from "../src/components/UsersCard";
import { TopUserContext } from "../Context/TopUserContext";
import style from '../styles/usersCard.module.css'

function Topusers() {
  let { topUser } = useContext<any>(TopUserContext);
  console.log("top user pageeeeeeee", topUser);
  return (
    <div className={style.container}>
      {topUser.length>0?topUser.map((ele: any, key: any) => {
        let { name, email } = ele;
        return (
          <div key={key} className={style.card}>
            <div  className={classnames(style.item, style.item_userInfo)}>
              <div className={style.news_title}>
                <span className={style.subheader}>Name:- </span>
                {name}
              </div>
              <div className={style.news_body}>
                <span className={style.subheader}>Eamail:- </span>
                {email}
              </div>
            </div>
          </div>
        );
      }):<div>No top User Yet</div>}
    </div>
  );
}

export default Topusers;

