import {createContext, useState } from "react";
import { useSelector } from "react-redux";


export const DataContext = createContext(null);



const DataProvider = ({children}) =>{
  const user=useSelector((state)=>state.currentuser);
  const [account, setAccount] =useState('');

  

    return (
        <DataContext.Provider value={{
           account,
           setAccount
        }}>
          {children}
        </DataContext.Provider>
    )
}

export default DataProvider;