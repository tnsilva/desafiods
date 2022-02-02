import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from "./pages/LoginPage";
import { ListaPage } from "./pages/ListaPage";


export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="lista" element={<ListaPage />} />

            </Routes>
        </Router>
    );
};