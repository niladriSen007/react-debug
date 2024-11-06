import { Suspense, useState } from "react"
import PropTypes from "prop-types"
import "./App.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <Errorboundary>
      <Counter count={count} setCount={setCount} />
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
      <Suspense fallback={<div>loading...</div>}>
        <Child name="world" />
      </Suspense>
    </button>
    </Errorboundary>
  )
}

function Child({ name }) {
  return <div>hello {name}</div>
}

Child.propTypes = {
  name: PropTypes.string.isRequired,
}

export default App
