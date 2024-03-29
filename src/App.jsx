import { Routes,Route, Navigate } from "react-router-dom";

import { Layout } from "./main/container/Layout";
import { SignUpPage } from "./main/pages/SignUpPage";
import { AuthContextProvider } from "./main/context/AuthContext";
import { ProtectedRoutes } from "./main/container/ProtectedRoutes";
import { DashboradPage } from "./main/modules/dashboard/pages/DashboardPage";
import ExpensePage from "./main/modules/expense/pages/ExpensePage";
import BudgetPage from "./main/modules/budget/pages/BudgetPage";

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
              <Route path="/" element={<Navigate to={"/dashboard"} />} />
              <Route path="/dashboard" element={<DashboradPage />} />
              <Route path="/expense" element={<ExpensePage />} />
              <Route path="/budget" element={ <BudgetPage /> } />
            </Route>
          </Routes>
        </Layout>
      </AuthContextProvider>
      
    </>
  );
}

export default App;
