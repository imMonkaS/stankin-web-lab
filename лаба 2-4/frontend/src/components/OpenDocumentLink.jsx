import React from "react";

const OpenDocumentLink = () => {
    const handleOpenDocument = () => {
        const newWindow = window.open("/docs/confidential.html", "_blank", "width=600,height=400,resizable=yes");

        if (newWindow) {
            newWindow.document.close();
        }
    };

    return (
        <label className="confidential-link" onClick={handleOpenDocument}>
            Политика конфиденциальности
        </label>
    );
};

export default OpenDocumentLink;
