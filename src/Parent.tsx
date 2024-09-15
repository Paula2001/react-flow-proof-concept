import { ComponentType } from "react";

export interface BTNSProps {
    title: string;
}  

export interface AcutalBTNSProps {
    title: string;
    setOpen: () => void
}  

const Parents = ({Body, BTNS, BTNSProps}: {Body: ComponentType, BTNS: ComponentType<AcutalBTNSProps>, BTNSProps: BTNSProps}) => {
    const f = () => {
        alert("this is the change of state");
    }
    return (
        <>
            <Body />
            <BTNS {...BTNSProps} setOpen={f}  />
        </>
    );
}

export default Parents;