import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Students from "./components/Students";
import Search from "./components/Search";

const url = "https://api.hatchways.io/assessment/students";

function App() {
  const [studentData, setStudentData] = useState();
  const [studentDataHistory, setStudentDataHistory] = useState();

  useEffect(() => {
    axios.get(url).then((response) => {
      setStudentData(response.data.students);
      setStudentDataHistory(response.data.students);
      // console.log(response.data.students);
    });
  }, []);

  const getAverage = (gradeArray) => {
    let avg = 0;
    gradeArray.forEach((num) => {
      num = Number(num);
      avg += num;
    });
    return avg / gradeArray.length;
  };

  return (
    <Wrapper>
      <Container>
        <Search
          studentDataHistory={studentDataHistory}
          setStudentData={setStudentData}
        />
        {studentData &&
          studentData.map((i, index) => (
            <Students
              key={index}
              pic={i.pic}
              name={`${i.firstName} ${" "} ${i.lastName}`}
              email={i.email}
              company={i.company}
              skill={i.skill}
              average={getAverage(i.grades)}
              testScores={i.grades.map((i, (index) => index))}
            />
          ))}
      </Container>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #edeaea5c;
  overflow: hidden;
`;

const Container = styled.div`
  margin: auto;
  background: white;
  width: 1000px;
  height: 700px;
  overflow: auto;
  border-radius: 10px;
  box-shadow: 1px 1px 5px gray;

  ::-webkit-scrollbar {
    display: none;
  }
`;
