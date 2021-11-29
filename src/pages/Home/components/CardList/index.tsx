
import { useData } from "../../../../context/DataContext"
import { api } from "../../../../services/api";
import { Card } from "../Card";
export function CardList(){
  const { tools, setReload, reload } = useData();

  async function handleRemove(id: number){
    const response = await api.delete(`tools/${id}`)
    console.log('Response:::',response)
    setReload(!reload)
  }

  return(
    <>
      {
        tools?.map(tool =>(
          <Card
            key={tool.id}
            id={tool.id}
            link={tool.link}
            text={tool.description}
            tags={tool.tags}
            onRemove={() => handleRemove(tool.id)}
          />
        ))
      }
    </>
  )

}