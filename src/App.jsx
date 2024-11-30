import './App.css'
import { EmojisAnimation } from './framer-components/EmojisAnimation'
import { DraggableDiv } from './framer-components/DraggableDiv'
import ExitandEnterAnimation from './framer-components/ExitandEnterAnimation'
import { GestureButton } from './framer-components/GestureButton'
import { ProgressiveBar } from './framer-components/ProgressiveBar'
import DynamicVariants from './framer-components/DynamicVariants'

export default function App() {
  return (
    <div className="flex flex-col p-10">
      <h1 className="text-center text-4xl semi-bold">
        Framer Motion Components
      </h1>
      <ProgressiveBar />
      <ExitandEnterAnimation />

      <GestureButton />
      <DraggableDiv />
      <EmojisAnimation />
      <DynamicVariants />
    </div>
  )
}
