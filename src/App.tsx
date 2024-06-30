import { BrowserRouter, Route, Routes as Router} from 'react-router-dom';
import MainLayout from "./layout/main-layout"
import { ExternalDataPage } from "./pages/external-data-page";
import { ConstantDataPage } from './pages/constant-data-page';
import { BackendDataPage } from './pages/backend-data-page';
import CreateUserForm from './components/form/create-user-form';

function App() {
  // https://reqres.in/api/users
  
  return (
      <BrowserRouter>
        <Router>
          <Route path="/" element={<MainLayout/>}>
              <Route path='/external'index element={<ExternalDataPage/>}/>
              <Route path='/constant' element={<ConstantDataPage/>}/>
              <Route path='/backend' element={<BackendDataPage/>}/>
              <Route path='/backend/form' element={<CreateUserForm/>}/>
          </Route>
        </Router>
      </BrowserRouter>
  )
}

export default App
