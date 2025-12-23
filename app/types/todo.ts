export type Todo = {
  _id: string;
  todoName: string;
  isComplete: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TodoMutation = Partial<Pick<Todo, "isComplete" | "todoName">>;
