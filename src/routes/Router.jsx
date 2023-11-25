/* Importando Utilidades del router de React en su verisón 6 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Importando paginas y layouts */
import  Layout  from "@layouts/GeneralLayout";
import  Home  from "@pages/Home";
import NotFound from "@pages/Error404";

/* Importando estilos */
import "@styles/main.css"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export { Router };