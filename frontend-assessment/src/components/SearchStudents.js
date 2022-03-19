import React, { useState } from "react";
import styled from "styled-components";

const SearchStudents = ({ setStudentData, studentDataHistory }) => {
  const [tagInput, setTagInput] = useState("");
  const [nameInput, setNameInput] = useState("");

  const NameAndTagFitlerHandler = (name, tag) => {
    const studnetFilterByName = studentDataHistory.filter((student) => {
      const wholeName = student.firstName + student.lastName;
      return wholeName.toLowerCase().includes(name.toLowerCase());
    });

    const studentFilterByTagAfterName = studnetFilterByName.filter(
      (student) => {
        const tagsString = student.tags.join("");
        return tagsString.toLowerCase().includes(tag.toLowerCase());
      }
    );
    setStudentData(studentFilterByTagAfterName);
  };

  const setInputValueAndFilter = (e, text) => {
    if (text === "name") {
      setNameInput(e.target.value);
      NameAndTagFitlerHandler(e.target.value, tagInput);
    }
    if (text === "tag") {
      setTagInput(e.target.value);
      NameAndTagFitlerHandler(nameInput, e.target.value);
    }
  };

  return (
    <Wrapper>
      <Container>
        <SearchStudentsInput>
          <input
            placeholder="Search by name"
            type="text"
            value={nameInput}
            onChange={(e) => setInputValueAndFilter(e, "name")}
          />
        </SearchStudentsInput>
        <SearchTagsInput>
          <input
            placeholder="Search by tag"
            type="text"
            value={tagInput}
            onChange={(e) => setInputValueAndFilter(e, "tag")}
          />
        </SearchTagsInput>
      </Container>
    </Wrapper>
  );
};

export default SearchStudents;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  margin-bottom: 15px;
  position: sticky;
  z-index: 1;
  top: 0px;
  background-color: #ffff;
`;

const Container = styled.div``;

const SearchStudentsInput = styled.div`
  height: 40px;
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

const SearchTagsInput = styled.div`
  height: 40px;
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
