import { createContext, PropsWithChildren, useReducer } from "react";
import { ITodo } from "../interfaces/todo";
import { Action, todoReducer } from "../reducers/todoReducers";

interface TodoContext {
  todos: ITodo[];
  dispatch: (action: Action) => void;
}

export const todoContext = createContext<TodoContext>({
  todos: [],
  dispatch: () => {},
});

export const TodoProvider = ({ children }: PropsWithChildren) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <todoContext.Provider value={{ todos, dispatch }}>
      {children}
    </todoContext.Provider>
  );
};
