import { AcutalBTNSProps } from "./Parent";

const BTNS = ({title, setOpen}: AcutalBTNSProps) => {
    return (
        <>
            <p>asd</p>
            <button onClick={() => setOpen()}>test</button>
            <button onClick={() => alert("Aasdofjiaosdjfi")}>{title}</button>
        </>
    );
}

export default BTNS;