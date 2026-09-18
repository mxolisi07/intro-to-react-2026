
import { useState, useEffect } from 'react';
import './App.css'
import Input from '../components/Input'
import Button from '../components/Button'

// jsx: js, tsx: ts
function App() {
  // app cycle events: onmount, onupdate, ondestroy [useEffect]
  // hooks: useState, useEffect, useMemo, useCallback

  const [counter, setCounter] = useState<number>(0)
  const [name, setName] = useState<string>('')
  console.log(useState('Vee'));
  const arr = ['Vee', 'Princess', 'Lydia', 'Charlee']
  const firstStu = arr[0]
  const [firstStud, secondStud] = arr

  useEffect(() => {
    console.log('component has mounted');

  }, []) // mounting
  useEffect(() => {
    console.log('component has updated');
    // fetch resource
    // based on that data, you want to do some calculation

    
  }, [name]) // is name updated, runs on mount
  console.log({ firstStu, firstStud, secondStud });

  useEffect(() => {
    // component cleanup
    // timers on the app, you need to stop their listeners
    // return
    const interval = setInterval(() => {
      console.log('calculating');
    }, 1000)
    return () => {
      if(interval) clearInterval(interval)
    }
  }, [])

  // html: on-click 
  // js: onClicka
  const handleOnClick = () => {
    console.log('adding');
    setCounter((counter: number) => {
      // if (counter) {
        return counter + 1
      // }
      // return 0
    })
  }
  const handleTextChange = (ev: any) => {
    console.log({ text: ev.target.value });
    setName(ev.target.value)
  }
  return (
    <div>
      <p>Hello World!</p>
      <div>
        <p>Good bye</p>
      </div>
      {/* <input type='text'  /> */}
      <Input type='text' label="Name" id='text-input' onChange={handleTextChange} />

      <p>{counter}</p>
      <p>{name.length}</p>
      {
        name && name.length > 0 && name.split('').map((char: string) => {
          return <p>{char}</p>
        })
      }
      <button onClick={handleOnClick}>Add</button>
      <Input type='number' style={{}} label='Currency' id="number-input" />
      <Button />
    </div>
  )
}
// class approach, default
// functional approach, preferred
export default App
