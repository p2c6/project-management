import pic from "../assets/no-projects.png"

export default function NoProject({ onCreateProject, onSetSelectedProjectStatus }) {

    const handleClick = () => {
        onCreateProject(true)
        onSetSelectedProjectStatus(null)
    }

    return (
        <div className="flex flex-col items-center gap-y-4">
            <img className="w-20 " src={pic} alt="picture" />
            <h1 className="text-center text-2xl font-bold text-red-950">No Project Selected</h1>
            <p className="text-stone-400">Select a project or get started with a new one</p>
            <a className="bg-stone-800 text-stone-400 rounded-lg px-4 py-2" onClick={handleClick}>Create new project</a>
        </div>
    );
}