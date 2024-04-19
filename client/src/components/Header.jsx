import React, { useState, useEffect } from 'react';
// import './Header.css'; // Import CSS file for styling

const Header = () => {
    const [showForm, setShowForm] = useState(false);
    const [client, setClient] = useState('');
    const [commencementDate, setCommencementDate] = useState('');
    const [completionDate, setCompletionDate] = useState('');
    const [rfqCode, setRfqCode] = useState('');
    const [isFormValid, setIsFormValid] = useState(false); // State to track form validity

    // Check form validity whenever form inputs change
    useEffect(() => {
        setIsFormValid(client && commencementDate && completionDate && rfqCode);
    }, [client, commencementDate, completionDate, rfqCode]);

    const handleSubmit = () => {
        // Print input data on the console
        console.log("Client:", client);
        console.log("Commencement Date:", commencementDate);
        console.log("Completion Date:", completionDate);
        console.log("RFQ Code:", rfqCode);
        // Reset form fields
        setClient('');
        setCommencementDate('');
        setCompletionDate('');
        setRfqCode('');
        // Hide the form
        setShowForm(false);
    };

    const handleOverlayClick = (e) => {
        // If clicked outside the form, revert to previous state
        if (e.target.classList.contains('form-overlay')) {
            setShowForm(false);
        }
    };

    return (
        <div className="header">
            <div className="side-arrow">
                <img src="https://i.pinimg.com/736x/84/c9/d6/84c9d6c0fb3efa679a9291d5c420a1dd.jpg" alt="" />
            </div>
            <div className="title">Create Workorder</div>
            <div className="header-btn" onClick={() => setShowForm(true)}>Save</div>

            {showForm && (
                <div className="form-overlay" onClick={handleOverlayClick}>
                    <div className="form-container">
                        <div className="form-header">Fill Details</div>
                        <div className="form-body">
                            <label htmlFor="client">Client:</label>
                            <select id="client" value={client} onChange={(e) => setClient(e.target.value)} required>
                                <option value="">Select Client</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>
                            <label htmlFor="commencementDate">Commencement Date:</label>
                            <input type="date" id="commencementDate" value={commencementDate} onChange={(e) => setCommencementDate(e.target.value)} required />
                            <label htmlFor="completionDate">Completion Date:</label>
                            <input type="date" id="completionDate" value={completionDate} onChange={(e) => setCompletionDate(e.target.value)} required />
                            <label htmlFor="rfqCode">RFQ Code:</label>
                            <input type="text" id="rfqCode" value={rfqCode} onChange={(e) => setRfqCode(e.target.value)} required />
                        </div>
                        <div className="form-footer">
                            <input type='submit' onClick={handleSubmit} id="submit" value={"Done"} disabled={!isFormValid} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
