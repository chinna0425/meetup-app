import './index.css'

const NotFoundPage = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
      className="not-found-image"
    />
    <h1 className="not-found-title">Page Not Found</h1>
    <p className="not-found-para">
      We are sorry, the page you requested could not be found
    </p>
  </div>
)
export default NotFoundPage
