import React from "react"

const LoaderCenter = () => {
    return (
        <div className="text-center">
            <div
                className="spinner-grow"
                style={{
                    width: "3rem",
                    height: "3rem"
                }}
                role="status"
            >
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default LoaderCenter
