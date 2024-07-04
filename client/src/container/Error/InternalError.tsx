import "./InternalError.module.css"

const InternalError = () => {
  return (
    <div className="main">
      <div id="error">
        <div id="box"></div>
        <h3>ERROR 500</h3>
        <p>Things are a little <span>unstable</span> here</p>
        <p>I suggest come back later</p>
      </div>
    </div>
  )
}
export default InternalError