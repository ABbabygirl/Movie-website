import { BiSolidHomeHeart } from "react-icons/bi";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"


function Test2() {
    return(
        <div>
           <a href=""><BiSolidHomeHeart size={40} color="red" /></a> 
            {/* <h1> <BiSolidHomeHeart /> This is a Test module</h1>  */}
            <h1 className="text-secondary bg-info"> This is a Test module</h1>
        </div>
    )
}

export default Test2;