
export default function Profile() {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="60" height="60" fill="white">

                <title>Abstract user icon</title>

                <defs>
                    <clipPath id="circular-border">
                        <circle cx="30" cy="30" r="28" />
                    </clipPath>
                    <clipPath id="avoid-antialiasing-bugs">
                        <rect width="100%" height="498" />
                    </clipPath>
                </defs>

                <circle cx="30" cy="30" r="28" fill="black" clipPath="url(#avoid-antialiasing-bugs)" />
                <circle cx="30" cy="23" r="12" />
                <circle cx="30" cy="55" r="21" clipPath="url(#circular-border)" />
            </svg>
        </div>
    )
}