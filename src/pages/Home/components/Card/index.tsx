import { Container, Header, RemoveButton, Title,Content, Footer, Tag } from "./styles";
import { Card as CardProps} from "../../../../@types/card";

export function Card({ id, link, text, title, tags, onRemove}: CardProps){
  return(
    <Container>
      <Header>
        <Title>
          {title}
        </Title>
        <RemoveButton onClick={onRemove}>remove</RemoveButton>
      </Header>
      <Content>
        {text}
      </Content>
      <Footer>
        {tags.map(tag =>(
          <Tag>{"#"}{tag}{" "}</Tag>
        )
          )}
        
      </Footer>
    </Container>
  )
}