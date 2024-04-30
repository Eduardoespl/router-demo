import { useNavigate } from "react-router-dom";

function Mario() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };
    return (
        <div>
            <h2> Hi I'm Mario Bross!</h2>
            <button onClick={handleClick}>Click here to main page...</button>
        </div>
    )
}

export default Mario;