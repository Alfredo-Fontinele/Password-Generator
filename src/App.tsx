import { Container } from "./components/container"
import { FormPassword } from './components/formPassword'

export const App = () => {
  return (
    <Container maxWidth={1300}>
      <FormPassword 
        titleForm={""} 
        minValue={5} 
        maxValue={25}
      />
    </Container>
  )
}
