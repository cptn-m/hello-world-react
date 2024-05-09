import { type ReactNode } from "react"

interface ImgProp{
    image: {
        src: string;
        alt: string;
    };
    children: ReactNode;
}

export default function Header({image, children}: ImgProp)
{
    return <header>
        <div>
            <img { ...image }/>
            {children}
        </div>
    </header>
}
