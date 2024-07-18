import {Link} from 'react-router-dom'
import Header from '../Header'
import ReferenceData from '../../ContextData'
import './index.css'

const HomePage = () => (
  <ReferenceData.Consumer>
    {value => {
      const {name, meetOn, topicsList} = value
      console.log(meetOn)
      const assign = topicsList.filter(eachVal => eachVal.id === meetOn)
      console.log(assign)
      return (
        <div className="home-page-main-container">
          <Header />
          <div className="home-page-text-container">
            {name.length === 0 ? (
              <h1 className="home-page-main-heading">Welcome to Meetup</h1>
            ) : (
              <h1 className="home-page-main-heading style-color">
                Hello {name}
              </h1>
            )}
            {name.length === 0 ? (
              <p className="home-page-para">Please register for the topic</p>
            ) : (
              <p className="home-page-para">
                Welcome to {assign[0].displayText}
              </p>
            )}
            {name.length === 0 && (
              <Link to="/register">
                <button className="home-page-register-button" type="button">
                  Register Now
                </button>
              </Link>
            )}
            <br />
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </div>
        </div>
      )
    }}
  </ReferenceData.Consumer>
)

export default HomePage
