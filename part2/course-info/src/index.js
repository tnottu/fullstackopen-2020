import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

const Total = ({ course }) => {
  const sum = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  return(
    <h3>total of {sum} exercises</h3>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      {course.parts.map((part) =>
        <Part key={part.id} part={part} />
      )}
      <Total course={course} />
    </div>
  )
}

const Content = ({ courses }) => {
  return (
    <div>
      {courses.map((course) =>
        <Course key={course.id} course={course} />
      )}
    </div>
  )
}

const App = () => {
  const title = 'Web development curriculum'
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        },
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        },
      ]
    },
  ]

  return (
    <div>
      <Header title={title} />
      <Content courses={courses} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
