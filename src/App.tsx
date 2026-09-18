
import { useState, useEffect, useRef } from 'react';
import './App.css'
import Input from '../components/Input'
import Button from '../components/Button'

// jsx: js, tsx: ts
function App() {
  // app cycle events: onmount, onupdate, ondestroy [useEffect]
  // hooks: useState, useEffect, useMemo, useCallback
  const divRef = useRef(null)
  const arr = ['Vee', 'Charlee', 'Boitshepo', 'Letsego', 'David']

  useEffect(() => {
    console.log({ divRef: divRef?.current });
    
  }, [])
  return (
    <div>
      <header>header</header>
      <div id='container' ref={divRef}>
        <div id="menu" />
        <div id="main">
          <div id="first">
            {
              arr.map((student: string) => {
                return <div className='students'>{student}</div>
              } )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
// class approach, default
// functional approach, preferred
export default App
