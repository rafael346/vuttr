import { useState,useEffect, createContext, useContext } from "react";
import { api } from "../services/api";
import { DataContextData, DataContextProps, Tools } from "../@types/context";


export const DataContext = createContext<DataContextData>({} as DataContextData);


export function DataProvider({ children }: DataContextProps) {
  const [tools, setTools] = useState<Array<Tools>>([]);
  const [reload, setReload] =  useState<boolean>(false);

  async function getTasks(){
    try {
    const response = await api.get('tools');
    const { data } = response;
    setTools(data);
    } catch(error) {
      console.log('Não Foi possivel carregar  as ferramentas');
    }
  }

  useEffect(()=>{
    getTasks()
  },[reload])

  
  return (
    <DataContext.Provider value={{
      tools,
      reload,
      setReload
    }}>
      {children}
    </DataContext.Provider>
  )

}

export function useData(){
  const context = useContext(DataContext);

  return context;
}