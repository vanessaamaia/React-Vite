import { Container } from "./styles"

import { Button } from "../../components/Button"

export function Details() {
  return (
    <Container>
      <h1>Vanessa Maia</h1>
      <span>Tudo bem?</span>

      <Button title="Login" loading/>
      <Button title="Cadastrar" />
      <Button title="Voltar"/>
    </Container>
  )
}