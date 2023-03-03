import React from "react";
import { useDispatch, useSelector} from "react-redux";


import { FilterInput, FilterTitle } from "./Filter.styled";
import { changeFilter } from "components/redux/filterSlice";



const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  
  const handleFilter = evt => {
    evt.preventDefault();
    dispatch(changeFilter(evt.target.value));
  };
  return (
    <>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="search"
        name="filter"
        value={filter}
        onChange={handleFilter}
      />
    </>
  );
};

export default Filter;
