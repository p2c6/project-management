import Main from "./Main";

export default function Layout({ children }) {
    return (
        <div className="flex gap-x-48">
            {children}
        </div>
    );
}