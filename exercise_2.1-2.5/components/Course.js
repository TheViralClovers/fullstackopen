
const reducer = (accumulator, curr) => accumulator + curr;
const Course = ({course}) => {
    let ex_arr = []
    course.parts.map(part => ex_arr.push(part.exercises)) 
    
    return (
    <div>
        <h1>{course.name}</h1>      
        {course.parts.map(part => <p>{part.name} {part.exercises}</p>)}      
        <h3>Total of {ex_arr.reduce(reducer)} exercises</h3>
    </div>
    )
}

export default Course