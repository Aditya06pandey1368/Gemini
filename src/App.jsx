import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';
import { useState } from 'react'
import axios from 'axios';

const App = () => {
  
  const [question, setquestion] = useState("");
  const [answer, setanswer] = useState("");

  async function generateAns(){
    setquestion("")
    setanswer("loading...")
    const response = await axios({
      url : "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCTlmonCCtirhJbIlWTjd8BG2PUSPjVQLg",
      method : "post",
      data : {"contents":[{"parts":[{text : question}]}]}
    });
    setanswer(response['data']['candidates'][0]['content']['parts'][0]['text'].replace(/\*/g, ''));
  }


  return (
    <>
      <Sidebar></Sidebar>
      <Main generateAns={generateAns} question={question} answer={answer} setquestion={setquestion}></Main>
    </>
  );
};

export default App;