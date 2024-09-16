import { Position } from 'reactflow';
import { Handle } from 'reactflow';
import viteLogo from '../assets/excitation.svg';
const defaultS = {border: 0 , width: "1px", height: "1px", backgroundColor: "white",zIndex: -123 , minWidth: "1px", minHeight: "1px"};

const Excitation = (data: any) => {
    return (
        <>
          <div>
            <img onClick={() => alert(data.label)} width={40} height={40} alt='Node icon' src={viteLogo} />
          </div>
          <Handle style={{...defaultS, top: "40%"}} type="target" position={Position.Left} id="a" />
        </>
      );
}

export default Excitation;