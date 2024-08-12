import { useState } from "react"

export default function BgChanger({ colors }) {
    const [color, setColor] = useState("white");
    return (
        <div style={{ backgroundColor: color }} className="w-full h-screen duration-200">
            <ul className="">
                {colors.map((c, i) => <li key={i} onClick={() => setColor(c)}>{c}</li>)}
            </ul>
        </div>
    )
}