import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import { SignUp } from "./pages/SignUp"
import { SignIn } from "./pages/SignIn"
import { DashBoard } from "./pages/DashBoard";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<DashBoard />} />
        {/* <Route path="/send" element={<Send />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
