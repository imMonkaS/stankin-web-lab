import React from "react";

const OpenDocumentButton = () => {
    const handleOpenDocument = () => {
        const newWindow = window.open("/docs/confidential.html", "_blank", "width=600,height=400,resizable=yes");

        if (newWindow) {
            newWindow.document.close();
        }
    };

    return (
        <button onClick={handleOpenDocument} style={{ padding: "10px 20px", marginTop: "20px" }}>
            📄 Политика конфиденциальности
        </button>
    );
};

export default OpenDocumentButton;
