import { createBrowserRouter , RouterProvider } from "react-router-dom"
import Browse from "./Browse"
import SignIn from "./SignIn"

const Body = () => {


    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <SignIn />,
        },
        {
            path: '/browse',
            element: <Browse />,
            
        },
    ])

    return (
        <>
              <RouterProvider router={appRouter} />
        </>
    )
}

export default Body
