
import './App.css'
import Stopwatch from './Components/Stopwatch'

function App() {
  

  return (
    <>
     <h1 className="text-3xl font-bold   p-4 border-4 border-yellow-500 rounded-lg shadow-lg transform hover:scale-105 text-green-600 bg-orange-200 mx-auto">
    StopWatch 🕰️!
</h1>




    <main>
     
      <Stopwatch/>
      
    </main>

    </>
  )
}

export default App
