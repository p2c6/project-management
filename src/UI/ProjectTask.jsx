import { useRef, useState } from "react";
import TaskList from "./TaskList";

export default function ProjectTask({ project, onAddProject, list, onClearTask, onDeleteProject }) {

    const taskRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            task_id: 'task_' + Math.round(Math.random(1, 999999) * 999999),
            project_id: project.id,
            task_description: taskRef.current.value,
        }

        onAddProject(formData);

        taskRef.current.value = '';
    }

    const handleClear = (taskId) => {
        onClearTask(taskId);
    }

    const handleClick = (projectId, e) => {
        onDeleteProject(projectId);
    }

    const formatDate = (projectDate) => {
        const date = new Date(projectDate);
        const convertedDate = date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        return convertedDate;
    }

    return (
        <>
            <div className="flex flex-col gap-y-4">
                <div className="flex justify-between">
                    <h1 className="font-bold text-3xl text-stone-500">{project.title}</h1>
                    <button className="px-4 py-2 text-black rounded-lg" onClick={(e) => { handleClick(project.id, e) }}>Delete</button>
                </div>
                <p className="text-stone-400">{formatDate(project.date)}</p>
                <div className="whitespace-pre-line">
                    {project.description}
                </div>
            </div>
            <hr className="h-1 bg-gray-200 my-5" />
            <h1 className="font-bold text-3xl">Tasks</h1>
            <div className="my-5">
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-x-2 items-center">
                        <input type="text" className="bg-stone-300 py-1 w-60 h-8" id="task" ref={taskRef} />
                        <button className="px-4 py-2 text-black-500 rounded-lg">Add Task</button>
                    </div>
                </form>
            </div>
            <div>
                <TaskList tasks={list} projectId={project.id} onClearTask={handleClear} />
            </div>
        </>
    );
}