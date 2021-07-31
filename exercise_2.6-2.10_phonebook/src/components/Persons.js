const Persons = ({persons,search}) => {

    var regex =  RegExp(search, "i")
    let specificPerson = search.length
      ? persons.filter(person => (regex.test(person.name)))
      : persons 
  
    return (
      specificPerson.map(person => <p>{person.name} {person.number}</p>)
    )
  }

export default Persons