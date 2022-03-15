import React, { useState } from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const Students = ({
  pic,
  name,
  email,
  company,
  skill,
  average,
  testScores,
}) => {
  const [testScoreList, setTestScoreList] = useState(false);
  return (
    <Wrapper>
      <Container>
        <Student>
          <StudentImage>
            <img src={pic} alt="" />
          </StudentImage>
          <StudentDetails>
            <StudentName>{name}</StudentName>
            <StudentEmail>Email: {email}</StudentEmail>
            <StudentCompany>Company: {company}</StudentCompany>
            <StudentSkill>Skill: {skill}</StudentSkill>
            <StudentAverage>Average:{average}%</StudentAverage>
          </StudentDetails>

          {!testScoreList ? (
            <AddIcon
              className="listIcon"
              onClick={() => setTestScoreList(true)}
            />
          ) : (
            <RemoveIcon
              className="listIcon"
              onClick={() => setTestScoreList(false)}
            />
          )}
        </Student>
        {testScoreList ? (
          <StudentTestScores>
            <p>Test 1: {testScores[0]}%</p>
            <p>Test 2: {testScores[1]}%</p>
            <p>Test 3: {testScores[2]}%</p>
            <p>Test 4: {testScores[3]}%</p>
            <p>Test 5: {testScores[4]}%</p>
            <p>Test 6: {testScores[5]}%</p>
            <p>Test 7: {testScores[6]}%</p>
            <p>Test 8: {testScores[7]}%</p>
          </StudentTestScores>
        ) : (
          <></>
        )}

        <Divider />
      </Container>
    </Wrapper>
  );
};

export default Students;

const Wrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  align-items: center;
  margin 5px;
  width: 100vw;

`;

const Student = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 25px;
  margin-left: 20px;
  align-items: center;

  .listIcon {
    height: 50px;
    width: auto;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const StudentDetails = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 18px;
`;

const StudentImage = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 100px;
  margin-right: 50px;
  overflow: hidden;

  & > img {
    height: 120px;
    width: 110px;
    margin-bottom: -20px;
  }
`;

const StudentName = styled.div`
  font-weight: 700;
  font-size: 40px;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const StudentEmail = styled.div`
  padding-left: 20px;
  padding-bottom: 2px;
  margin: 5px;
`;

const StudentCompany = styled.div`
  margin: 5px;
  padding-left: 20px;
  padding-bottom: 2px;
`;

const StudentSkill = styled.div`
  margin: 5px;
  padding-left: 20px;
  padding-bottom: 2px;
`;

const StudentAverage = styled.div`
  margin: 5px;
  padding-left: 20px;
  padding-bottom: 2px;
`;

const StudentTestScores = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 225px;
  margin-bottom: 25px;

  & > p {
    margin: 0;
    padding: 0;
  }
`;

const Divider = styled.div`
  border-bottom: 1px solid #dcdcdc;
`;
