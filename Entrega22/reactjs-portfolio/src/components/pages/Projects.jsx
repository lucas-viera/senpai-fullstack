// import { Link } from "react-router-dom";
import NasaLogo from "../../assets/img/projects/nasa-logo.svg";
import ToDoImage from "../../assets/img/projects/todo-list.jpeg";
import InsiderFoodImg from "../../assets/img/projects/insider-food.jpeg";

// TODO: Pasar project card o project container a un componente common
export function Projects() {
    return (
        <>
            <section className="projects" id="projects">
                <h2 className="projects-header">My Projects</h2>
                <div className="projects-container">
                    <a href="https://bit.ly/3Ltgn4a">
                        <div className="project-container project-card">    
                            <img
                                src={NasaLogo}
                                alt="Nasa API"
                                className="project-img"
                            />
                            <h3 className="project-title">Nasa APOD</h3>
                            <p className="project-details">
                                <strong>Astronomy Picture of the Day</strong> provides a daily astronomy-related picture from NASA via API.
                            </p>
                        </div>
                    </a>
                    
                    <a href="https://bit.ly/3gYGamV">
                        <div className="project-container project-card">
                            <img
                                src={ToDoImage}
                                alt="ToDo List"
                                className="project-img"
                            />
                            <h3 className="project-title">ReactJS ToDo List</h3>
                            <p className="project-details">
                                <strong>ToDo List</strong> using ReactJS and JSON server persistence.
                            </p>
                        </div>
                    </a>

                    <a href="https://bit.ly/3gOn8zb">
                        <div className="project-container project-card">
                            <img
                                src={InsiderFoodImg}
                                alt="Insider Food"
                                className="project-img"
                            />
                            <h3 className="project-title">Insider Food</h3>
                            <p className="project-details">
                                <strong>Insider Food</strong> is the perfect website to organize your secret family recipes
                            </p>
                        </div>
                    </a>
                </div>
            </section>
        </>
    );
}