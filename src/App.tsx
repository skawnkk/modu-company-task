import React from 'react';
import styled from 'styled-components';
import useTodo from 'hooks/useTodo';
import { STATUS } from './utils/config';
import { Header, TodoContainer, TodoTypes } from 'components';

const App: React.FC = () => {
  const {
    items,
    setItems,
    handleTodoCreate,
    handleTodoDelete,
    handleTodoUpdate,
    handleTodoSort,
    handleTodoCreator,
    handleTodoPosUpdate
  } = useTodo();

  return (
    <Wrapper>
      <Header />
      <ContainerWrapper>
        {Object.values(STATUS).map((status: string, index: number) => (
          <TodoContainer
            key={index}
            status={status}
            items={items}
            todoItems={targetItems(status, items)}
            setItems={setItems}
            handleTodoCreate={handleTodoCreate}
            handleTodoDelete={handleTodoDelete}
            handleTodoUpdate={handleTodoUpdate}
            handleTodoSort={handleTodoSort}
            handleTodoCreator={handleTodoCreator}
            handleTodoPosUpdate={handleTodoPosUpdate}

          />
        ))}
      </ContainerWrapper>
    </Wrapper>
  );
};

const targetItems = (status: string, items: TodoTypes[]) =>
  items.filter((item) => item.status === status);

const Wrapper = styled.div`
  width: 100%;
`;

const ContainerWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  gap: 4px 2%;
  margin: 38px auto;
`;

export default App;
