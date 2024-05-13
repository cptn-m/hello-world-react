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

// we can use {... image} instead of src = {image.src} and alt = {image.alt}. 
// This is a react short cut to call all the properties in the image
