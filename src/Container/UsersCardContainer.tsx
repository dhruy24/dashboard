import React,{useState} from "react";
import { selected } from "../../Context/TopUserContext";
import style from '../../styles/usersCard.module.css'
import UsersCard from '../components/UsersCard'

interface usersProps {
  usersData: any;
  topUser:any;
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
      }).map((ele:any, key:any) => {
        let { id,name,email,state} = ele;
        return (
          <UsersCard
            key={key}
            id={id}
            name={name}
            email={email}
            topUser={topUser} 
            setTopUser = {setTopUser}
            selected={selected}
          />
        );
      })}
    </div>
    </>
  );
}

export default UsersCardContainer;
