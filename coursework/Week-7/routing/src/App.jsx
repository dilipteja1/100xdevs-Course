import {
    RecoilRoot,
    useSetRecoilState,
    useRecoilValue,
  } from 'recoil';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { countAtom, evenSelector } from './store/count';

function App() {
  return (
    <div>
        <RecoilRoot>
            <Count />
        </RecoilRoot>

    </div>
  )
}

function Count(){
    return (
        <>
        <CountRenderer />
        <Buttons />
        <Even />
        </>        
    )
}

function CountRenderer() {
    const count = useRecoilValue(countAtom);
    return <>
        {count}
        </>
}

function Buttons(){
    const setCount = useSetRecoilState(countAtom);
    console.log("re-rendered")
    return <div>
        <button onClick={() => {
            setCount(count => count+1)
        }}>
            Increase
        </button>
        <button onClick={() => {
            setCount(count => count-1) 
        }}>
            Decrease
        </button>
    </div>
}

function Even(){
    const isEven = useRecoilValue(evenSelector)
    return(
        <>
        <div>{isEven ? "it is even" :  ""}</div>
        </>
    )
}

export default App
