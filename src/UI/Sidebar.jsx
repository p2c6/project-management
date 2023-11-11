export default function Sidebar({ setFormStatus, setSelectedProjectStatus, children, onSetActiveId }) {

    const handleClick = () => {
        onSetActiveId(null)
        setSelectedProjectStatus(null)
        setFormStatus(true)
    }

    return (
        <div className="bg-stone-800 text-white mt-10 rounded-tr-lg">
            <div className="h-screen px-[80px]">
                <div className="flex flex-col gap-y-6">
                    <h1 className="uppercase text-lg font-bold mt-10 font-semibold">your projects</h1>
                    <button className="bg-stone-600 text-stone-400 rounded-lg px-4 py-2" onClick={handleClick}>+ Add Project</button>
                    {children}
                </div>
            </div>
        </div>
    )
}