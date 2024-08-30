import AddUser from "./components/AddUser"
import ShowUser from "./components/ShowUser"
import UserProvider from "./contexts/UserProvider"

function App() {
  

  return (
    <>
    <UserProvider >
      <AddUser />
      <ShowUser />
    </UserProvider>
    </>
  )
}

export default App
