import { useState } from "react"
import Header from "./Header"



const SignIn = () => {
 
    const [isSignInForm, setSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm)
    }


    return (
        <>
            <div className="bg-[url('/src/utils/background.jpg')]" >
            <Header />
            {/* <div className="absolute ">
                <img src="/src/utils/background.jpg" alt="Background" ></img>
            </div> */}
                <div className="relative flex justify-center items-center h-screen text-white ">
                <form className=" p-12 bg-black bg-opacity-80 xl:w-3/12 lg:w-4/12 md:w-5/12 sm:w-6/12 w-10/12" >
                    <h1 className="font-bold text-3xl py-4"> {isSignInForm? "Sign In":"Sign Up" }</h1>
                    
                        {!isSignInForm&& <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 rounded-lg " />}
                    
                        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-lg " />
                    <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
                    <button className="p-4 my-6 text-white bg-red-700 w-full rounded-lg ">{isSignInForm? "Sign In":"Sign Up" }</button>
                    <p className="py-4 cursor-pointer" onClick={()=>toggleSignInForm()}>{isSignInForm? "New To  Netflix? Sign Up Now":"Already a Member! Sign In Now" }</p>
                </form>
                </div>
                </div>
        </>
    )
}

export default SignIn
