
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { VscSyncIgnored } from "react-icons/vsc";
function App() {

const p = "text-opacity-85  font-thin text-xs flex my-2 justify-end"
const color=''
const button="btn flex text-black items-center gap-1 font-extrabold text-sm bg-white w-1/3 hover:bg-rose-200"
const counter="12"
const Time="12 june,2012"
const SerialNumber=1023
  return (
    <>
      <div className={`bg-rose-600 p-2  text-black font-serif rounded-md shadow-md shadow-rose-500 ${color} mb-2`}>
        <p className="font-semibold text-lg"><span className="font-mono">{SerialNumber}</span>.Title Of The List</p>
       <div className={`${p} justify-center `}><p>Remaining Time:</p><div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div>
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div>
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div>
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":6}}></span>
    </span>
    sec
  </div>
</div></div>
       <div className="flex justify-evenly"><button className={button}>Done<IoCheckmarkDoneCircleOutline />
       </button><button className={button}>Ignore<VscSyncIgnored />
       </button></div>
       <p className={p}>Create time:{Time}</p>
      </div>
      
    </>
  )
}

export default App
