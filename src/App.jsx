import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions'


function App() {
  const [workout, setWorkout] = useState(null)
  const[choice, setchoice] = useState('individual')
  const[muscles, setMuscles] = useState([])
  const[goal, setgoal] = useState('strength_power')

  function updateWorkout() {
    if (muscles.length < 1){
      return
    }
    let newWorkout = generateWorkout({choice, muscles, goal})
    setWorkout(newWorkout)

    window.location.href = '#workout'
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-t from-slate-950 to-slate-900 text-white text-sm sm:text-base'>
      <Hero />
      <Generator 
      choice={choice} 
      setchoice={setchoice} 
      muscles={muscles} 
      setMuscles={setMuscles} 
      goal={goal} 
      setgoal={setgoal} 
      updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout}/>)}
    </main>
  )
}

export default App
