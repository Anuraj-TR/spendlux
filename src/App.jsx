import { Routes,Route } from "react-router-dom";

import { Layout } from "./main/container/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={ <div>hello world!</div>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
