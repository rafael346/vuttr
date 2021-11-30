import { useState } from "react";

import { useData } from "../../../../context/DataContext"
import { api } from "../../../../services/api";
import { Card } from "../Card";
import { ModalRemove } from "./ModalRemove";
export function CardList(){
  const { tools, setReload, reload } = useData();
  const [modalVisible, setModalVisible] = useState(false);
  async function handleRemove(id: number){

    const response = await api.delete(`tools/${id}`)
    console.log('Response:::',response)
    setReload(!reload)
  }

  return(
    <>
      {
        tools?.map(tool =>(
          <>
          <Card
            key={tool.id}
            id={tool.id}
            title={tool.title}
            link={tool.link}
            text={tool.description}
            tags={tool.tags}
            showModal={()=> setModalVisible(!modalVisible)}
          />
          <ModalRemove isOpen={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)} onRemove={() =>handleRemove(tool.id)} />
          </>
        ))
      }
      
    </>
  )

}