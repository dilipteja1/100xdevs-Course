import { useRecoilValue,RecoilRoot } from 'recoil'
import { notificationAtom, totalNotificationSelector, getAtomfromBackend } from './stores/notification'


function App() {
  return <>
    <RecoilRoot>
        <MainApp />
        <Todo id={1}/>
        <Todo id={2}/>
        <Todo id={2}/>
        <Todo id={2}/>
    </RecoilRoot>
  </>
}

function MainApp(){
  const network = useRecoilValue(notificationAtom)
  const totalNotification = useRecoilValue(totalNotificationSelector)
  return (
    <>
      <button>My network {network.network}</button>
      <button>Jobs {network.jobs}</button>
      <button>Messaging {network.messaging}</button>
      <button>Notifications {network.notifications}</button>
      <button>Me {totalNotification}</button>
    </>   
  )
}

function Todo({id}){
  const todo = useRecoilValue(getAtomfromBackend(id))
  return <div>
    <div>{todo.title}</div>
    <div>{todo.description}</div>
  </div>
}
export default App
