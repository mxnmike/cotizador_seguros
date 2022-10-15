import { CotizadorProvider } from './context/ContizadorProvider'
import AppSeguro from './components/AppSeguro'

function App() {
  return (
    <CotizadorProvider>
      <AppSeguro />
    </CotizadorProvider>
  )
}

export default App
