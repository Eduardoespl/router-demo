import { useNavigate } from "react-router-dom";

function Luigi() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };
    return (
        <div>
            <h2> Hi I'm Luigi!</h2>
            <p> I'm Mario's brother!</p>
            <button onClick={handleClick}>Click here to main page...</button>
        </div>
    )
}

export default Luigi;