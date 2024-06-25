// useEffect is to execute a side effect based on the dependency array
function App(){
  const [todos, setTodos] = useState([]);

  //do some side effect based on the dependency array
  useEffect(
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/setTodos")
        .then(async function(res) {
          const json = await res.json
        })
    }, [])
  return 
}