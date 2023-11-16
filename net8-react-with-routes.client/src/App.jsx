import ReactDOM from "react-dom/client";
import { Layout } from './components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoutes from './AppRoutes';
import './App.css';

function App() {
    return (
     <BrowserRouter>
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Layout>
     </BrowserRouter>
  );
}

export default App;