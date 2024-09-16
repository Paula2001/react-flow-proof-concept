import { Position } from 'reactflow';
import dot from './../assets/Ellipse 4.svg';
import { Handle } from 'reactflow';

const defaultS = {border: 0 , width: "1px", height: "1px", backgroundColor: "white",zIndex: -123 , minWidth: "1px", minHeight: "1px"};

const Dot = () => { 
    return (
        <>
        <div>
            <img width={"5px"} height={"5px"} src={dot} alt="React logo" />
        </div>
        <Handle style={{...defaultS, top: "60%", right: "2px"}} type="source" position={Position.Right} id="a" />
        </>
    );
}

export default Dot;