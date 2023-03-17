import { useFetch } from './Hooks/useFetch'

function App() {

  const [data, loading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  )
  return (
    <div>
     <h1>Custom Hooks in React JS</h1>
     {loading && <h1>Loading</h1>}
     {error && <h1>Someing is wrong</h1>}
     {data && data.map(item=>(<p key={item.id}> {item.title}</p>))}
    </div>
  );
}

export default App;
