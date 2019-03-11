var Search = ({handleTextChange}) => (
  <div className="form">
    <form>
      <input type="search" className="search" onChange={handleTextChange}/>
      <input type="submit" className="submit" value="Search" />
    </form>
  </div>
)
export default Search;