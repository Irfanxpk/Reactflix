import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidatDate } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";


const SignIn = () => {
 
    const [isSignInForm, setSignInForm] = useState(true);
    const [erroMessage, seterrorMessage] = useState(null)
    const email = useRef(null);
    const password = useRef(null);



    const handleButtonClick = () => {
        console.log(email.current.value, password.current.value)

        const message = checkValidatDate(email.current.value, password.current.value);
        seterrorMessage(message)

        if (message) return;

        if (!isSignInForm)
        {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + "" + errorMessage)
                });
        }
        else
        {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + "" + errorMessage)
                });

        }



    }


    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm)
    }


    return (
        <>
            <div className="bg-[url('/background.jpg')]" >
            <Header />
            {/* <div className="absolute ">
                <img src="/src/utils/background.jpg" alt="Background" ></img>
            </div> */}
                <div className="relative flex justify-center items-center h-screen text-white ">
                    <form onClick={(e) => e.preventDefault()} className=" p-12 bg-black bg-opacity-80 xl:w-3/12 lg:w-4/12 md:w-5/12 sm:w-6/12 w-10/12" >
                    <h1 className="font-bold text-3xl py-4"> {isSignInForm? "Sign In":"Sign Up" }</h1>
                    
                        {!isSignInForm&& <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 rounded-lg " />}
                    
                        <input ref={email} type="email" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-lg " />
                        <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
                        <p className="text-red-500 font-bold text-lg py-2">{erroMessage}</p>
                        <button className="p-4 my-6 text-white bg-red-700 w-full rounded-lg " onClick={() => handleButtonClick()}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                    <p className="py-4 cursor-pointer" onClick={()=>toggleSignInForm()}>{isSignInForm? "New To  Netflix? Sign Up Now":"Already a Member! Sign In Now" }</p>
                </form>
                </div>
                </div>
        </>
    )
}

export default SignIn
