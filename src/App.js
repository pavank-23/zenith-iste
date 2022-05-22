import React from 'react'
import Landing from './components/landing_page/index';
import { Routes, Route } from "react-router-dom";
import VideoPlayer from './components/video-player';
import SignIn from './components/sign-in';
import About from './components/about';
import Header from './components/header';
import Separator from './common/separator';

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="videoplayer" element={<VideoPlayer />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="about" element={<About />} />
    </Routes>

  </>
);
}

export default App;