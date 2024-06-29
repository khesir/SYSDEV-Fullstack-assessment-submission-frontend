import { BrowserRouter, Route, Routes as Router} from 'react-router-dom';
import MainLayout from "./layout/main-layout"
import { ExternalDataPage } from "./pages/external-data-page";
import { ConstantDataPage } from './pages/constant-data-page';
import { BackendDataPage } from './pages/backend-data-page';

function App() {
  // https://reqres.in/api/users
  
  return (
      <BrowserRouter>
        <Router>
          <Route path="/" element={<MainLayout/>}>
              <Route path='/external'index element={<ExternalDataPage/>}/>
              <Route path='/constant'index element={<ConstantDataPage/>}/>
              <Route path='/backend'index element={<BackendDataPage/>}/>
          </Route>
        </Router>
      </BrowserRouter>
  )
}

export default App
