import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Home } from '../pages/Home/Home';
// Importe outras páginas conforme for construindo, ex:
// import { NotFound } from '../pages/NotFound';

// O RootLayout garante que Navbar e Footer apareçam em todas as telas
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Aqui dentro o React Router injeta a página atual (Home, Contato, etc) */}
      </main>
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // errorElement: <NotFound />, // Descomente quando a página NotFound estiver pronta
    children: [
      { 
        index: true, 
        element: <Home /> 
      },
      // Adicione novas rotas aqui futuramente:
      // { path: 'termos', element: <Terms /> },
      // { path: 'privacidade', element: <Privacy /> },
    ],
  },
]);