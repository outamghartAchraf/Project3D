import React from 'react'
import Pthree from './component/Pthree'
import Plnet from './component/Planet'
import Cardh from './component/Card'
import Scene from './component/Hose'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Navvbar from './component/Navvbar'
import './App.css'

const App = () => {
  return (
    <div className='App'>
   <Navvbar/>
    <div style={{display:'flex', justifyContent:"space-between"}}>
      
      <div className='title'>
         <h1>Big Bang Center</h1>
       </div>
    
      <div style={{height:'100vh',  width: "50%",  }}>
        <Suspense fallback={null}>
        <Canvas shadows flat linear>
          <Scene /> 
          <OrbitControls />
        </Canvas>
      </Suspense>
      </div>

    </div>
    </div>
  )
}

export default App