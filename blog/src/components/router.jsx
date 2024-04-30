import Blog from "../view/blog"
import Login from '../components/login';
import AdminBlog from "../view/adminBlog";
function Router({ ruta }) {
    switch (ruta) {
        case "/":
            return <Blog></Blog>
        case "/login":
            return <Login></Login>
        case "/admin":
            return <AdminBlog></AdminBlog>
        default:
            return (
                <div>
                    <h1>Ruta actual {ruta}</h1>
                </div>
            )
    }
}

export default Router