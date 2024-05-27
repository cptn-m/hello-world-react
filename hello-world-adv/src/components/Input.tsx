import { ComponentPropsWithoutRef } from "react";

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>;  // has every html element

export default function Input({label,id, ...props}:InputProps) {
    return(
        <p>
            <label htmlFor={id}>{label} </label>
            <input id = {id} {... props} />
        </p>
    );
}