import React, { useState } from "react";
import styled from "styled-components";

const TagsInput = ({ email, studentDataHistory, setStudentDataHistory }) => {
  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    let studentData = [...studentDataHistory];
    studentData.forEach((student, index) => {
      if (student.email === email) {
        console.log(student.email);
        student.tags.push(value);
      }
    });
    setStudentDataHistory(studentData);
    e.target.value = "";
  };

  const studentBasedOnEmail = studentDataHistory.filter(
    (student) => student.email === email
  )[0];

  console.log(studentBasedOnEmail);

  return (
    <Wrapper>
      <Container>
        <TagList>
          {studentBasedOnEmail &&
            studentBasedOnEmail.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
        </TagList>
        <TagForm>
          <input
            onKeyDown={handleKeyDown}
            placeholder="Add a tag"
            type="text"
          />
        </TagForm>
      </Container>
    </Wrapper>
  );
};

export default TagsInput;

const Wrapper = styled.div`
  height: auto;
  width: auto;
`;

const TagForm = styled.div`
  display: flex;
  margin-left: 225px;
  margin-bottom: 25px;

  & > input {
    font-family: "Raleway", sans-serif;
    padding: 10px;
    outline: none;
    border: none;
    border-bottom: 2px solid #dcdcdc;
    font-size: 16px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tag = styled.div`
font-family: "Raleway", sans-serif;
  margin-bottom: 25px;
  background-color: #D3D3D3;
  display: inline-block;
  padding 10px;
  border-radius: 5px;
  margin-right: 15px;


`;

const TagList = styled.div`
  margin-left: 225px;
  width: 50%;
`;
