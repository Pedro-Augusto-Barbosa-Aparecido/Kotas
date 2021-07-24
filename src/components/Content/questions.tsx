import React from "react";

interface Props {
    question: string;
}

const Questions: React.FC<Props> = ({ question }) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "540px"
        }}>
            <p>{question}</p>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.515901 10.7305L5.24637 6L0.515901 1.26953L1.55496 0.230469L7.32449 6L1.55496 11.7695L0.515901 10.7305Z" fill="black"/>
            </svg>
        </div>
    );
}

export default Questions;
