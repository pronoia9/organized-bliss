import TodoInput from './TodoInput';
import TodoListItem from './TodoListItem';
import TodoFooter from './TodoFooter';
import './TodoList.scss';

import { useStateContext } from '../../contexts/ContextProvider';

export default function TodoList() {
  const { todos } = useStateContext();

  return (
    <>
      <form className='todo-list' onSubmit={(e) => e.preventDefault()}>
        <TodoInput />
        <div className='todo-list__container'>
          <ul className='todo-list__list' id='todo-list'>
            {todos.map((todo, idx) => <TodoListItem key={todo.id} todo={todo} idx={idx} />)}
          </ul>
          <TodoFooter />
        </div>
      </form>
    </>
  );
}