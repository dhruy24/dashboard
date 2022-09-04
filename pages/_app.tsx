import React, { useState } from "react";
import { people } from "../src/data";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../src/components/Header'
import {TopUserContext,selected} from '../Context/TopUserContext'

function MyApp({ Component, pageProps }: AppProps) {
  let [topUser, setTopUser] = useState<people[]>([]);  
  return(
    <TopUserContext.Provider value ={{topUser,setTopUser}}>
      <Header/>
      <Component {...pageProps} />
    </TopUserContext.Provider>
  ) 
}

export default MyApp
