import { Routes,Route } from "react-router-dom";

import { Layout } from "./main/container/Layout";
import { SignUpPage } from "./main/pages/SignUpPage";
import { AuthContextProvider } from "./main/context/AuthContext";
import { ProtectedRoutes } from "./main/container/ProtectedRoutes";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Layout>
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<div>hello world!</div>} />
            </Route>
            <Route path="/signin" element={<SignUpPage />} />
          </Routes>
        </Layout>
      </AuthContextProvider>
    </>
  );
}

export default App;
