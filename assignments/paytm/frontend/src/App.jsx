import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import { SignUp } from "./pages/Signup"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<Send />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
