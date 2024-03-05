import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const data = {
    info: {
      picture: {
        url: './assets/avatar-jessica.jpeg',
        alt: 'A profile picture'
      },
      name: 'Jessica Randall',
      location: 'London, United Kingdom',
      bio: 'Front-end developer and avid reader'
    },
    links: [
      {
        name: 'Github',
        url: '#'
      },
      {
        name: 'Frontend Mentor',
        url: '#'
      },
      {
        name: 'Linkedin',
        url: '#'
      },
      {
        name: 'Twitter',
        url: '#'
      },
      {
        name: 'Instagram',
        url: '#'
      }
    ]
  }

  console.log(data);

  return (
    <Card data={data}/>
  )
}

export default App
