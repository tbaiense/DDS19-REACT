
import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import PaginaErro from './pages/PaginaErro';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Sobre from './pages/Sobre';
import Home from './pages/Home';
import Contato from './pages/Contato';

const router = createBrowserRouter([
    {
        path: '/', // Caminho da URL para acessar o componente
        element: <App />,
        errorElement: <PaginaErro />,
        children: [
            {
                path: '/', // Define o index da página
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'contato',
                element: <Contato />,
            },
            {
                path: 'sobre',
                element: <Sobre />,
            },
            {
                path: 'cadastro',
                element: <Cadastro />,
            },
        ]
    }
]);

export default router;