import React, {useState} from 'react'
function Button() {
  const [counts1, setCounts1] = useState(100)
  function myfunc() {
    setCounts1(counts1 + 1)
  }
  function myfunc1() {
    setCounts1(counts1 - 1)
  }
  return (
    <>
      <button onClick={myfunc}> Increase</button>
      <span>{counts1}</span>
      <button onMouseOver={myfunc1}>{counts1}</button>
    </>
  )
}
export default Button