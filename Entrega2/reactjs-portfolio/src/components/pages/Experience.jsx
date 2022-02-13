import HtmlLogo from "../../assets/img/experience/icons8-html-5-240.png";
import CssLogo from "../../assets/img/experience/icons8-css3-240.png";
import JsLogo from "../../assets/img/experience/icons8-javascript-240.png";
import ReactLogo from "../../assets/img/experience/icons8-react-native-240.png";
import NodeLogo from "../../assets/img/experience/icons8-node-js-240.png";
import GitLogo from "../../assets/img/experience/icons8-git-240.png";

export function Experience () {
    return (
        <>
            <section className="skills" id="skills">
                <h2 className="skill-header">Tech experience</h2>
                <div className="skills-container">  
                    <div className = "icon">              
                        <a href="https://mzl.la/3mD6SFd">
                            <img
                                src={HtmlLogo}
                                alt="HTML"
                                className="icon-card"
                            />
                        </a>
                    </div>
                    <div className = "icon">              
                        <a href="https://mzl.la/3pZdoIl">
                            <img
                                src={CssLogo}
                                alt="CSS"
                                className="icon-card"
                            />
                        </a>
                    </div>
                    <div className = "icon">              
                        <a href="https://mzl.la/3k0nK74"> 
                            <img
                                src={JsLogo}
                                alt="JS"
                                className="icon-card"
                            />
                        </a>
                    </div>
                    <div className = "icon">              
                        <a href="https://bit.ly/3BFg1RU">
                            <img
                                src={ReactLogo}
                                alt="ReactJS"
                                className="icon-card"
                            />
                        </a>
                    </div>
                    <div className = "icon">              
                        <a href="https://bit.ly/3q0aR0t">
                            <img
                                src={NodeLogo}
                                alt="NodeJS"
                                className="icon-card"
                            />
                        </a>
                    </div>
                    <div className = "icon">              
                        <a href="https://bit.ly/3LvE0Jl">
                            
                            <img
                                src={GitLogo}
                                alt="Git"
                                className="icon-card"
                            />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}