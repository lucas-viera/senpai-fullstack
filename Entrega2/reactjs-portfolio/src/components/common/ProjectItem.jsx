export function ProjectItem(props){
    return (
        <>
            <a href={props.url}>
                <img
                    src={props.image}
                    alt={props.title}
                    className="project-img"
                />
                <h3 className="project-title">{props.title}</h3>
                <p className="project-details">
                    {props.description}
                </p>
            </a>
        </>
    );
}