import React, { useState } from 'react';
import styled from 'styled-components';
import { TodoHeader, TodoList, InputForm, TodoTypes } from 'components';

interface TodoContainerProps {
  status: string;
  todoItems: TodoTypes[];
  handleTodoCreate: (status: string, text: string, creator: string) => void;
  handleTodoDelete: (taskID: number) => void;
  handleTodoUpdate: () => void;
}

const TodoContainer: React.FC<TodoContainerProps> = ({
  status,
  todoItems,
  handleTodoCreate,
  handleTodoDelete,
  handleTodoUpdate,
}) => {
  //인풋창visible
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  return (
    <Wrapper>
      <TodoHeader status={status} setIsVisibleForm={setIsVisibleForm} />
      {isVisibleForm && (
        <InputForm
          status={status}
          setIsVisibleForm={setIsVisibleForm}
          handleTodoCreate={handleTodoCreate}
        />
      )}
      <TodoList
        status={status}
        todoItems={todoItems}
        handleTodoDelete={handleTodoDelete}
        handleTodoUpdate={handleTodoUpdate}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default TodoContainer;
