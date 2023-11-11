import { useRef, useState } from "react"

export default function Form({ onSaveProject, onCreateProject, onSetSelectedProjectStatus }) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()

        if (titleRef.current.value.length <= 0 || descriptionRef.current.value.length <= 0 || dateRef.current.value.length <= 0) {
            setErrorMessage('All fields are required!')
            return;
        }

        const formData = {
            id: Math.round(Math.random(1, 999999) * 999999),
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            date: dateRef.current.value
        }

        onSaveProject(formData)
    }

    const handleCancel = (e) => {
        e.preventDefault();

        onCreateProject(false);
        onSetSelectedProjectStatus(null);
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="flex justify-end">
                <button className="px-4 py-2 rounded-lg" onClick={(e) => { handleCancel(e) }}>Cancel</button>
                <button className="bg-stone-800 px-4 py-2 text-white rounded-lg" onClick={handleSubmit}>Save</button>
            </div>

            {errorMessage &&
                <div className="bg-red-300 my-5 p-5">
                    <p>{errorMessage}</p>
                </div>
            }

            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col">
                    <label htmlFor="title" className="uppercase font-semibold text-stone-600">title</label>
                    <input ref={titleRef} type="text" className="bg-stone-300 border-b-2 border-stone-800 py-1" id="title" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="title" className="uppercase font-semibold text-stone-600">description</label>
                    <textarea ref={descriptionRef} className="bg-stone-300 border-b-2 border-stone-800 py-1" rows="4" cols="50"></textarea>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="title" className="uppercase font-semibold text-stone-600">due date</label>
                    <input ref={dateRef} type="date" className="bg-stone-300 border-b-2 border-stone-800 py-1" id="title" />
                </div>
            </div>

        </form>
    )
}