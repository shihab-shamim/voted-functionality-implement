import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Navber = () => {
    const {user,logOut}=useContext(AuthContext)
    console.log(logOut)
    const handleLogOut = ()=>{
        console.log('cliked')
         logOut()
        .then(res=>{
            console.log(res)
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="flex justify-center mt-8">
          
            {user?<button onClick={handleLogOut} className="btn btn-secondary">log out</button>:<Link to='/login'><button className="btn mr-6">log in </button></Link>}
            
        </div>
    );
};

export default Navber;