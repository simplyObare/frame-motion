import './App.css'
import { ProgressiveBar } from './framer-components/ProgressiveBar'

export default function App() {
  return (
    <div className="flex flex-col p-10">
      <h1 className="text-center text-4xl semi-bold">
        Framer Motion Components
      </h1>
      <ProgressiveBar />
    </div>
  )
}
