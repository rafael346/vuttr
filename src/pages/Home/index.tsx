import { useState } from "react";

import { AddButton } from "./components/AddButton";
import { TextField } from "./components/TextField";
import { Container, Content, MainHeader, Header, SubTitle, Title } from "./styles";
import { CheckBox } from "./components/CheckBox";
import { CardList } from "./components/CardList";
import { NewToolModal } from "../../components/CreateToolsForm/Modal";


export default function Home(){
  const [modalVisible, setModalVisible] = useState(false)

  return(
    <Container>
      <Header>
        <Title>
          VUTTR
        </Title>
        <SubTitle>Very Useful Tools to Remember</SubTitle>
      </Header>

      <Content>
        <MainHeader>
          <TextField />
          <CheckBox />
          <AddButton handleFunction={()=>setModalVisible(true)} />
        </MainHeader>
        <CardList />
      </Content>
      <NewToolModal isOpen={modalVisible} onRequestClose={() =>setModalVisible(!modalVisible) } />
    </Container>
  )

}