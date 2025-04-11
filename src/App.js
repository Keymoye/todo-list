import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="w-full h-screen bg-cover bg-center
    flex items-center justify-center bg-no-repeat
    min-[500px] h-[100vh]"
     style={{ backgroundImage: "url('/images/bg.jpg')" }}>
      <div>
       <TodoList/>
      </div>
    </div>
  )
  }
export default App;
