import React, { useState, useContext } from "react";
import classnames from "classnames";
import style from "../../styles/usersCard.module.css";
import { people } from "../data";
import togglestyle from "../../styles/toggleButton.module.css";

function UsersCard(props: any) {
  let { id, name, email, topUser, setTopUser } = props;
  var userInfo = {
    id: id,
    name: name,
    email: email,
  };

  let [val, setVal] = useState(false);
  let [block, setBlock] = useState(true);

  function blockUnblock(id: any) {
    var blockedUserData: any = localStorage.getItem("totalBlockedUsers");
    var blockedUsers = JSON.parse(blockedUserData);

    setBlock(!block);
    if (block) {
      blockedUsers.push(userInfo);
      localStorage.setItem("totalBlockedUsers", JSON.stringify(blockedUsers));
    } else {
      let data = blockedUsers
        .filter((val: people) => {
          if (val.id != id) return val;
        })
        .map((ele: people) => {
          return ele;
        });
      localStorage.setItem("totalBlockedUsers", JSON.stringify(data));
    }
  }

  function addTopUser(id: number, name: string, email: string) {
    setVal(!val);
    let info: people = { id: id, name: name, email: email };
    if (!val) {
      topUser.push(info);
      setTopUser(topUser);
      console.log("click 1");
    } else {
      let ans = topUser
        .filter((ele: people) => {
          if (ele.id != id) return ele;
        })
        .map((item: people) => {
          return item;
        });
      setTopUser(ans);
      console.log("click 2");
    }
  }

  return (
      <div className={classnames(style.card)} >
        <input
          type="checkbox"
          onClick={() => addTopUser(id, name, email)}
          className={classnames(style.item, style.item_checkbox)}
        ></input>
        <div className={classnames(style.item, style.item_userInfo)}>
          <div className={style.news_title}>
            <span className={style.subheader}>Name:- </span>
            {name}
          </div>
          <div className={style.news_body}>
            <span className={style.subheader}>Eamail:- </span>
            {email}
          </div>
        </div>
        <div className={classnames(style.item, style.item_toggle)}>
          <label className={togglestyle.switch}>
            <input type="checkbox" onClick={() => blockUnblock(id)}></input>
            <span
              className={classnames(togglestyle.slider, togglestyle.round)}
            ></span>
          </label>
        </div>
      </div>
  );
}

export default UsersCard;
