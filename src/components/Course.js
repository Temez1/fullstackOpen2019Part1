import React from 'react'

const Course = ({course}) => (
    <>
      <div>
        <h2>{course.name}</h2>
        <Parts parts={course.parts}/>
        <Total exercises= {course.parts.map(part => part.exercises)} />
      </div>
    </>
  )
  
  const Parts = ({parts}) => (
      <div>
        {parts.map(part => <Part part={part} key={part.id}/>)}
      </div>
    )
  
  const Part = ({part}) => (
    <p>{part.name} {part.exercises}</p>
  )
  
  const Total = ({exercises}) => (
    <h3> total of {exercises.reduce((sum, exercises) => sum + exercises, 0)} exercises </h3>
  )

export default Course