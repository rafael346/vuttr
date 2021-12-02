import { useState } from "react";

import { useData } from "../../context/DataContext";
import { AddButton } from "./components/AddButton";
import { TextField } from "./components/TextField";
import { CheckBox } from "./components/CheckBox";
import { CardList } from "./components/CardList";
import { NewToolModal } from "../../components/CreateToolsForm/Modal";

import { Container, Content, MainHeader, Header,CardListContainer, SubTitle, Title } from "./styles";

export default function Home(){
  const [modalVisible, setModalVisible] = useState(false)
  const { search, setSearch, reload, setReload,checked, setChecked}= useData();
 
  function handleSearch(event:React.ChangeEvent<HTMLInputElement>){
    setSearch(event.target.value)
    setReload(!reload)
  }

  function handleToggleSearch(){
    setChecked(!checked)
  }

  function handleOpenModal(){
    setModalVisible(true)
  }
  function handleCloseModal(){
    setModalVisible(false) 
  }

  return(
    <Container>
      <Content>
      <Header>
        <Title>
          VUTTR
        </Title>
        <SubTitle>Very Useful Tools to Remember</SubTitle>
      </Header>

      <MainHeader>
        <TextField value={search} onChange={(event:React.ChangeEvent<HTMLInputElement>) => handleSearch(event)}/>
        <CheckBox onClick={handleToggleSearch} />
        <AddButton handleFunction={handleOpenModal} />
      </MainHeader>

      <CardListContainer>
        <CardList />
      </CardListContainer>
      </Content>
      <NewToolModal isOpen={modalVisible} onRequestClose={handleCloseModal} />
    </Container>
  )

}