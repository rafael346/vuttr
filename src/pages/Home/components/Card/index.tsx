import { useState } from "react";
import { Container, Header, RemoveButton, Icon, Title,Content, Footer, Tag } from "./styles";
import { Card as CardProps} from "../../../../@types/card";
import { useData } from "../../../../context/DataContext";

export function Card({ id, link, text, title, tags, showModal}: CardProps){
  return(
    <Container>
      <Header>
        <Title href={link}>
          {title}
        </Title>
        <RemoveButton onClick={showModal}>
          <Icon />
          remove
        </RemoveButton>
      </Header>
      <Content>
        <p>{text}</p>
      </Content>
      <Footer>
        {tags.map(tag =>( 
          <Tag>
            {"#"}{tag}{" "}
          </Tag>
        )
        )}
        
      </Footer>
    </Container>
  )
}