import './App.css'
import Navbar from './components/Navbar.jsx';
import Content from './components/Content.jsx';

function App() {
  return (
    <>
      <Navbar />

      <div className="bg-container font-poppins w-[45dvw] max-xl:w-[55dvw] max-lg:w-[70dvw] max-sm:w-[97dvw] shadow-2xl rounded-md flex flex-col gap-2 z-10 px-5 max-sm:px-2 py-4 m-3 mt-1.5 max-sm:mt-1 max-sm:mx-2">

        <h2 className="font-sora text-2xl max-sm:text-[22px] font-bold self-center text-primary-txt mb-4 max-sm:mb-2.5">
          Hisab - Expense Tracker
        </h2>

        <Content />
      </div>
    </>
  )
}

export default App
