// import { Link } from "react-router-dom";
import ProfileImage from "../../assets/img/profile.gif";
export function Home() {
   
    return (
        <>
            <section className="profile" id="profile">
                <img
                    src={ProfileImage}
                    alt="profile"
                    className="profile-img"
                />
                <div className="bio">
                    <h2 className="bio-title">Hi there!</h2>
                    <p className="bio-text">
                    Here you'll find a briefing of my professional career, some achievements 
                    and certifications, the projects and places I worked at and much more.
                    </p>
                </div>
            </section>
            <section className="about-me">
                <h2>About Me</h2>
                <p>
                    I'm Lucas Viera, a Software Engineering student who is always learning new
                    things and looking forward to build very interesting projects.  
                    <br></br>
                    <br></br>
                    I hope you find this portfolio interesting and feel free to reach me.
                    <br></br>
                    Thanks for visiting!
                </p>
            </section>
        </>
    );
}