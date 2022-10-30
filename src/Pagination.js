import React from "react";
import "./Pagination.css";

export default function Pagination({ goToNextPage, goToPreviousPage }) {
    return (
        <div>
            {goToPreviousPage && (
                <button className="boton-prev" onClick={goToPreviousPage}>
                    Previous
                </button>
            )}
            {goToNextPage && (
                <button className="boton-next" onClick={goToNextPage}>
                    Next
                </button>
            )}
        </div>
    );
}
