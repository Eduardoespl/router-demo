import { useParams } from "react-router-dom";
import Mario from "./Mario";
import Luigi from "./Luigi";
import DefaultProfile from "./DefaultProfile";

function Profile() {
    const {name} = useParams();
    return (
        <div>
            <h1>Profile page!!</h1>
            <p>Something else</p>
            {
                name === "mario"?(
                <Mario />
                ):name==="luigi"?(
                <Luigi />
                ):(
                <DefaultProfile />
            )}
        </div>
    );
}

export default Profile;