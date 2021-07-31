const PersonForm = (props) => {
    return (
            <form onSubmit={props.addPerson}>
              <div>
                name: 
                <input 
                  value={props.newName}
                  onChange={props.handleNameAddition}
                />
                <br></br>
                number:
                <input
                  value={props.newNumber}
                  onChange={props.handleNumberAddition}
                  />
              </div>
              <button type="submit">add</button>
            </form>
    )
  }

export default PersonForm