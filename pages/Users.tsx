import React,{useContext,useState} from 'react'
import { TopUserContext } from '../Context/TopUserContext';
import UsersCardContainer from "../src/Container/UsersCardContainer";

function Users({usersData}:any) {
let { topUser, setTopUser } = useContext<any>(TopUserContext)
  return (
    <>
      <UsersCardContainer usersData={usersData} topUser={topUser} setTopUser ={setTopUser}  />
    </>
  )
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await res.json();
    return {
      props:{
        usersData:result,
      }
    }
  }

export default Users