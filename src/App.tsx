import { Container } from "./components/container"
import { FormPassword } from './components/formPassword'
import { ToastProvider } from './components/toast'

export const App = () => {
  return (
    <>
      <ToastProvider/>
      <Container maxWidth={1300}>
        <FormPassword 
          titleForm={""} 
          minValue={7} 
          maxValue={25}
        />
      </Container>
    </>
  )
}
