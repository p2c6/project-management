import Form from "./Form";

export default function Main({ children }) {
    return (
        <div className="flex flex-col items-center mt-[150px] gap-y-4">
            <div className="w-[800px]">
                {children}
            </div>
        </div>

    );
}