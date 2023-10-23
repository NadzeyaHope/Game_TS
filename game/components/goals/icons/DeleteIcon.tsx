import React from "react";
 type Props = {
     width : number,
     onOpenWin: () => void
 }
function Icon(props : Props) {
    const {width, onOpenWin } = props;
    return (
            <svg
                onClick={onOpenWin}
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={width}
                viewBox="0 0 24 24"
            >
                <circle cx="12" cy="2" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="12" cy="22" r="2"></circle>
            </svg>
    );
}

export default Icon;
