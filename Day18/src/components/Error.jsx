import { useNavigate } from "react-router";

function Error() {
    const navigate=useNavigate()
    return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 gap-3">
        <h3>Error: 404 Not Found</h3>
        <button onClick={()=>navigate("/")} className="btn btn-danger w-25">Back to Home</button>
    </div> 
     );
}

export default Error;