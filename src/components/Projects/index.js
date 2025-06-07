import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Full Stack Website' ?
            <ToggleButton active value="Full Stack Website" onClick={() => setToggle('Full Stack Website')}>Full Stack Website</ToggleButton>
            :
            <ToggleButton value="Full Stack Website" onClick={() => setToggle('Full Stack Website')}>Full Stack Website</ToggleButton>
          }
          <Divider />
          {toggle === 'DSA Project' ?
            <ToggleButton active value="DSA Project" onClick={() => setToggle('DSA Project')}>DSA Project</ToggleButton>
            :
            <ToggleButton value="DSA Project" onClick={() => setToggle('DSA Project')}>DSA Project</ToggleButton>
          }
          <Divider />
           {toggle === 'Power Bi' ?
            <ToggleButton active value="Power Bi" onClick={() => setToggle('Power Bi')}>Data Analyst</ToggleButton>
            :
            <ToggleButton value="Power Bi" onClick={() => setToggle('Power Bi')}>Data Analyst</ToggleButton>
          }
        </ToggleButtonGroup>
      <CardContainer>
  {(toggle === 'all' 
    ? projects 
    : projects.filter(project => project.category === toggle)
  ).map(project => (
    <ProjectCard 
      key={project.id || project.title} 
      project={project} 
      openModal={openModal} 
      setOpenModal={setOpenModal} 
    />
  ))}
</CardContainer>

      </Wrapper>
    </Container>
  )
}

export default Projects