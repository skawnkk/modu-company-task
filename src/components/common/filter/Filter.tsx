import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { MdFilterList } from 'react-icons/md';
import { FilterDropDown } from 'components';
import { TodoTypes } from 'components/todos/TodoTypes';

interface DropDownProps {
  status: string;
  todoItems: TodoTypes[];
  dropOpen: boolean;
  selectCreator: string[];
  filterOpen: () => void;
  creatorChecked: (checked: boolean, value: string) => void;
  handleTodoSort: (status: string) => void;
  selectFilter: { date: boolean; creator: boolean };
  setSelectFilter: Dispatch<SetStateAction<{ date: boolean; creator: boolean }>>;
}

const Filter: React.FC<DropDownProps> = ({
  status,
  dropOpen,
  filterOpen,
  creatorChecked,
  selectCreator,
  handleTodoSort,
  selectFilter,
  setSelectFilter,
}) => {
  const handleSelectColor = () => {
    if (selectFilter.date || selectFilter.creator) {
      return 'green';
    } else {
      return 'black';
    }
  };

  return (
    <Wrapper>
      <MdFilterList size={24} color={handleSelectColor()} onClick={filterOpen} />
      {dropOpen && (
        <FilterDropDown
          status={status}
          creatorChecked={creatorChecked}
          selectCreator={selectCreator}
          handleTodoSort={handleTodoSort}
          filterClose={filterOpen}
          setSelectFilter={setSelectFilter}
        />
      )}
    </Wrapper>
  );
};

export default Filter;

const Wrapper = styled.div`
  text-align: right;
  cursor: pointer;
  position: relative;
`;
