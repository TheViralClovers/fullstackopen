const Filter = ({search, handleSearch}) => {

    return (
      <p>Search for:
              <input
                value={search}
                onChange={handleSearch}
              />
      </p>
    )
     
  }

export default Filter