import React from "react";

function IconAddGoal(props: {width : number, onOpenCloseWindow: any}) {
    const {width,onOpenCloseWindow } = props;
    return (
        <svg
            onClick={onOpenCloseWindow}
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={width}
            viewBox="0 0 24 24"
            opacity={0.3}
        >
            <g>
                <g
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                >s
                    <path d="M15.5 12L8.5 12"></path>
                    <path d="M12 15.5L12 8.5"></path>
                </g>
            </g>
        </svg>
    );
}

export default IconAddGoal;
