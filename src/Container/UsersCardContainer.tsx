import React,{useState} from "react";
import style from '../../styles/usersCard.module.css'
import UsersCard from '../components/UsersCard'
import {people} from '../data'

interface usersProps {
  usersData: people[];
  topUser:people[];
  setTopUser:any;
}

function UsersCardContainer({ usersData,topUser,setTopUser }: usersProps) {
  let [searchTerm,setSearchTerm] = useState("");
  return (
    <>
    <div className={style.search_container}>
      <input type="text" placeholder="Search..." onChange={(event)=>{setSearchTerm(event.target.value)}} className={style.search} >
      </input>
    </div>
    <div className={style.container}>
      {usersData.filter((val:any)=>{
        if(searchTerm === ""){
          return val;
        }
        else if(val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
          return val
        }
        else if(val.email.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
          return val
        }
      }).map((info:people, key:any) => {
        // let { id,name,email} = ele;
        return (
          <UsersCard
            key={key}
            info={info}
            topUser={topUser} 
            setTopUser = {setTopUser}
          />
        );
      })}
    </div>
    </>
  );
}

export default UsersCardContainer;
