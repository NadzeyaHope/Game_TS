import React from 'react';

const AboutUsIcon = (props: {width? : number}) => {
    const {width = 35} = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={width}
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                fill="var(--text-accent-color)"
                fillRule="evenodd"
                d="M22 12c0 5.523-4.477 10-10 10-1.6 0-3.112-.376-4.452-1.044a1.634 1.634 0 00-1.149-.133l-2.226.596a1.3 1.3 0 01-1.591-1.592l.595-2.226a1.633 1.633 0 00-.134-1.148A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10zm-14.5-.892c0 1.369 1.319 2.805 2.529 3.834.823.7 1.235 1.051 1.971 1.051s1.148-.35 1.971-1.051c1.21-1.03 2.529-2.465 2.529-3.834 0-2.677-2.475-3.676-4.5-1.608-2.025-2.068-4.5-1.069-4.5 1.608z"
                clipRule="evenodd"
                opacity={0.8}
            ></path>
        </svg>
    );
};

export default AboutUsIcon;