import React from "react";

function IconLeftNav(props: {width? : number, onOpenCloseWindow?: ()=>{}}) {
    const {width = 35, onOpenCloseWindow} = props;
    return (
        <svg
            onClick={onOpenCloseWindow}
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={width}
            viewBox="0 0 100 100"
        >
            <path
                fill="none"
                stroke="var(--text-accent-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M25 35h50M25 50h50M25 65h50"
                opacity={0.8}
            ></path>
        </svg>
    );
}

export default IconLeftNav;