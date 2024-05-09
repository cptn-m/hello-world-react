import { type ReactNode } from "react"

interface imgProp{
    image: {
        src: string;
        alt: string;
    };
    children: ReactNode;
}

export default function Header({image, children}: imgProp)
{
    return <header>
        <div>
            <img { ...image }/>
            {children}
        </div>
    </header>
}
