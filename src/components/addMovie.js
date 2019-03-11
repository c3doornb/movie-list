var AddMovie = ({addTextChange, addMovie}) => (
  <div className="form">
    <input type="text" className="search" onChange={addTextChange} />
    <input type="button" className="submit" value="Add!" onClick={addMovie} />
  </div>
)
export default AddMovie;