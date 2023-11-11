
export default function ProjectList({ projects, onSelectProject, onSetActiveId, activeId }) {

    const handleClick = (data, event) => {
        event.preventDefault()

        onSetActiveId(data.id)
        onSelectProject(data)
    }

    return (
        <ul>
            {projects.map((project) => (
                <li key={project.id} className={project.id === activeId ? "w-auto p-1 my-2 bg-stone-700" : "w-auto p-1 my-2"} onClick={(e) => { handleClick(project, e) }}>
                    <a href="#">
                        {project.title}
                    </a>
                </li>
            ))}
        </ul>
    )
}