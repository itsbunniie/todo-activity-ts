import { ITodo } from "../interfaces/todo";

export type Action = { type: "ADD_TODO"; payload: { task: string } };

export const todoReducer = (state: ITodo[], action: Action): ITodo[] => {
  const newState = [...state];
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...newState,
        {
          id: newState.length + 1,
          task: action.payload.task,
          isCompleted: false,
        },
      ];
    default:
      return state;
  }
};
