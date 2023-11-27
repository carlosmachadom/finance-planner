import "@styles/components/Toast.css"

import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

let root = null;

const Toast = ({ status, message }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            const toast = document.getElementById('toast');

            if (toast) {
                toast.classList.add('fade-out');
                
                setTimeout(() => {
                    root.unmount();
                    document.body.removeChild(toast);
                }, 500);
            }
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`toast-container ${status === 200 ? 'success' : 'error'}`}>
            <p className="toast--title">Status: {status}</p>
            <p className="toast--text">{ message }</p>
        </div>
    )
}

export const showToast = (status, message) => {
    const toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
    
    if (!root) {
        root = createRoot(toast);
    }
    
    root.render(<Toast status={status} message={message} />);
}

