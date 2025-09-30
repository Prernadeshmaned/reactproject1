import { useState } from "react";

export default function Dashboard() {
    const [activePage, setActivePage] = useState("Home");

    const renderContent = () => {
        switch (activePage) {
            case "Home":
                return <h2 className="text-2xl font-semibold mt-6">Welcome to the Dashboard 🎉</h2>;
            case "About Us":
                return <p className="mt-6 text-lg">We are a team dedicated to building awesome apps.</p>;
            case "Contact Us":
                return <p className="mt-6 text-lg">You can reach us at contact@example.com</p>;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-blue-600 text-white px-6 py-4 flex gap-6 text-lg font-medium">
                <button onClick={() => setActivePage("Home")}>Home</button>
                <button onClick={() => setActivePage("About Us")}>About Us</button>
                <button onClick={() => setActivePage("Contact Us")}>Contact Us</button>
            </nav>

            {/* Page Content */}
            <div className="p-6">
                {renderContent()}
            </div>
        </div>
    );
}
