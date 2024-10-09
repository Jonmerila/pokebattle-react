import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styling from "./ProfilePage.module.css";

const ProfilePage = ({users}) => {

    let [profile, setProfile] = useState();
    const location = useLocation();
    const params = useParams();


    console.log(params);
    console.log("LOC", location.state);
    console.log("ALLUSERS", users);
    

    useEffect(() => {

        if(location.state){
            setProfile(location.state);
        }
        if (!location.state) {
            const foundProfile = users.find((user) => user.id == params.id);
            console.log("PROFILE", foundProfile);
            setProfile(foundProfile);
            console.log("PROFILE", foundProfile);
        }
        
    }, [users, params.id, location.state]);


    
    return(
        <div className={styling.container}>
        <h1>Profile</h1>
        <h2>User: {profile?.username}</h2>
        <h3>Name: {profile?.name}</h3>
        <p>City: {profile.address?.city}</p>
        <p>Company: {profile.company?.name}</p>
    </div>
    )
}

export default ProfilePage;