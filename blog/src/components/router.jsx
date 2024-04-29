import Blog from "../view/blog"

function Router({ ruta }) {
    switch (ruta) {
        case "/":
            return <Blog></Blog>
        default:
            return (
                <div>
                    <h1>Ruta actual {ruta}</h1>
                </div>
            )
    }
}

export default Router