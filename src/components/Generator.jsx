import React, {useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS} from '../utils/excrises'
import Button from './Button'

function Header(props) {
    const {index,title,description} = props
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-5'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator(props) {
    const {muscles, setMuscles, choice, setchoice, goal, setgoal, updateWorkout} = props
    const [showModal, setshowModal] = useState(false)


    function togglemodal() {
        setshowModal(!showModal)
    }

    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }
        if (muscles.length > 2) {
            return
        }
        if (choice !== 'individual') {
            setMuscles([muscleGroup])
            setshowModal(false)
            return
        }


        setMuscles([...muscles, muscleGroup])

        if(muscles.length === 2) {
            setshowModal(false)
        }
    }

  return (
    <SectionWrapper id={'generate'} header={"Generate Your Workout"} title={['Get', 'Uppp']}>
        <Header index={'1'} title={'Pick Your Choice'} description={"Choose your workout and get started."} />
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>

            {Object.keys(WORKOUTS).map((type, typeIndex) => {
                return (
                    <button onClick={() => {
                        setMuscles([])
                        setchoice(type)
                    }} className={'px-4 bg-slate-950 border py-3 rounded-lg duration-200 hover:border-red-600 ' + (type === choice ? 'border-red-600' : 'border-red-400')}key={typeIndex}>
                        <p className='capitalize'>{type.replaceAll('_'," ")}</p>
                    </button>
                )
        
            })}
        </div>

        <Header index={'2'} title={'Choose Your Split'} description={"Decide which muscles are being targeted."} />
        <div className='bg-slate-950 border border-solid border-red-400 rounded-lg flex flex-col'>
            <button onClick={togglemodal} className='relative p-3 flex items-center justify-center'>
                <p className='capitalize'>{muscles.length == 0 ? 'Select Muscle Groups' : muscles.join( ', ' )}</p>
                <i className="fa-solid absolute right-3 top-1/3 -translate-y-1/2 fa-sort-down"></i>
            </button>
            {showModal && (
                    <div className='flex flex-col px-3 pb-3'>
                        {(choice === 'individual' ? WORKOUTS[choice] : Object.keys(WORKOUTS[choice])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button onClick={() => {
                                    updateMuscles(muscleGroup)
                                }} key={muscleGroupIndex} className={'hover:text-red-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-red-400' : ' ')}>
                                    <p className='capitalize'>{muscleGroup.replaceAll('_', ' ')}</p>
                                </button>
                            )
                        })}
                    </div>
                )}
        </div>

        <Header index={'3'} title={'Decide On What You Want'} description={"What is your goal?"} />
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>

            {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                return (
                    <button onClick={() => {
                        setgoal(scheme)
                    }} className={'px-4 bg-slate-950 border py-3 rounded-lg duration-200 hover:border-red-600 ' + (scheme === goal ? 'border-red-600' : 'border-red-400')}key={schemeIndex}>
                        <p className='capitalize'>{scheme.replaceAll('_'," ")}</p>
                    </button>
                )
        
            })}
        </div>
    
    <Button func={updateWorkout} text={"Develop"}></Button>
    </SectionWrapper>

  )
}
