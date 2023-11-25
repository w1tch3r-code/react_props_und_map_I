import TodoList from './assets/components/todoList/TodoList'
import todos from "./assets/data/todos";
import './App.css'
import './assets/components/products/Product.scss';
import ProductList from './assets/components/products/ProductList';

function App() {

  return (
    <>
    <h1>My Todos</h1>
    {/* Das Array "todos" wird an TodoList übergeben und dort mit todoArr.map iteriert */}
    <TodoList todoArr={todos}/>
    <ProductList />
    </>
  )
}

export default App
