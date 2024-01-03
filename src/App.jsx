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
            {/* public routes */}
            <Route path="/signin" element={<SignUpPage />} />

            {/* protected routes */}
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<div>hello world!</div>} />
            </Route>
          </Routes>
        </Layout>
      </AuthContextProvider>
    </>
  );
}

export default App;
