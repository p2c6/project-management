export default function TaskList({ tasks, projectId, onClearTask }) {
    const handleClick = (taskId, event) => {
        event.preventDefault()
        onClearTask(taskId)
    }

    return (
        <ul>
            {tasks.filter(task => task.project_id === projectId).map(filteredTasks => (
                <li key={filteredTasks.task_id} className="bg-stone-100 flex justify-between p-2 my-2">
                    {filteredTasks.task_description}
                    <button onClick={(e) => { handleClick(filteredTasks.task_id, e) }}>Clear</button>
                </li>
            ))}
        </ul>
    )
}