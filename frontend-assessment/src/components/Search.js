import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Search = ({ setStudentData, studentDataHistory }) => {
  const searchStudents = (searchValue) => {
    const filteredStudents = studentDataHistory.filter((student) => {
      const wholeName = student.firstName + student.lastName;
      //filter with searchValue
      return wholeName
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase());
    });
    setStudentData(filteredStudents);
  };

  return (
    <Wrapper>
      <SearchBar>
        <input
          placeholder="Search by name"
          type="text"
          onChange={(e) => searchStudents(e.target.value)}
        />
      </SearchBar>
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  display: flex;
  height: 50px;
  margin-bottom: 20px;
  position: sticky;
  z-index: 1;
  top: 0px;
  background-color: #ffff;
`;

const SearchBar = styled.div`
  height: 20px;
  width: 100%;
  padding: 10px;

  & > input {
    height: 40px;
    border: none;
    border-bottom: 1px solid #dcdcdc;
    width: 100%;
    font-size: 20px;
  }

  & > input:focus {
    outline: none;
  }

  & > ::placeholder {
    color: #bebebe;
  }
`;
