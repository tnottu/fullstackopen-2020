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

export default Course
