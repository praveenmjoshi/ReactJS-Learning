import { useNavigate } from "react-router-dom";

const Details = () => {
    const navigate = useNavigate();
    return(
        <>
            <h3>Details Component</h3>
            <button onClick={()=> navigate(-1)}>Go Back</button>
        </>
    )
}
export default Details;