import { useState,useEffect, createContext, useContext } from "react";
import { api } from "../services/api";
import { DataContextData, DataContextProps, Tools } from "../@types/context";


export const DataContext = createContext<DataContextData>({} as DataContextData);


export function DataProvider({ children }: DataContextProps) {
  const [tools, setTools] = useState<Array<Tools>>([]);
  const [reload, setReload] =  useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

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
    if(search === ''){
      getTasks()
    } else{
      searchTasks()
    }
    
  },[reload])

  async function searchTasks(){
    if (checked){
      try {
        const response = await api.get(`tools?tags_like=${search}`);
        const { data } = response;
        setTools(data);
    } catch(error) {
      console.log('Não foi possivel realizar  a busca')
    }
    } else{
      try {
        const response = await api.get(`tools?q=${search}`);
        const { data } = response;
        setTools(data);
      } catch(error) {
        console.log('Não foi possivel realizar  a busca')
    }
    }
  }

  
  return (
    <DataContext.Provider value={{
      tools,
      reload,
      checked,
      search,
      setSearch,
      setChecked,
      setReload,
      searchTasks
    }}>
      {children}
    </DataContext.Provider>
  )

}

export function useData(){
  const context = useContext(DataContext);

  return context;
}