import React from "react"

export default function Logo(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ isolation: "isolate" }}
            width="1000pt"
            height="1000pt"
            viewBox="0 0 1000 1000"
            className="fill-gray-900 dark:fill-white"
            {...props}
        >
            <defs>
                <clipPath id="_clipPath_rG2n0g10Z3iQHuQUu3kTh2GuprW5cVuO">
                    <path d="M0 0H1000V1000H0z"></path>
                </clipPath>
            </defs>
            <g clipPath="url(#_clipPath_rG2n0g10Z3iQHuQUu3kTh2GuprW5cVuO)">
                <path d="M825 420.917c-37.542-145.834-166.667-254.25-325-254.25-125 0-233.417 66.75-291.667 170.916C91.667 358.417 0 458.333 0 583.333c0 137.5 112.5 250 250 250h541.667C908.333 833.333 1000 741.667 1000 625c0-104.167-75-191.75-175-204.083z"></path>
            </g>
        </svg>
    )
}