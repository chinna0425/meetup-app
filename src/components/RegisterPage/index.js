import {Component} from 'react'

import Header from '../Header'
import ReferenceData from '../../ContextData'
import './index.css'

class RegisterPage extends Component {
  constructor(props) {
    super(props)
    this.state = {errorMsg: ''}
  }

  render() {
    const {errorMsg} = this.state
    return (
      <ReferenceData.Consumer>
        {value => {
          const {topicsList, name, meetOn, onChangeName, onChangeMeetOn} = value
          const onChangeNameField = event => {
            onChangeName(event.target.value)
          }

          const onChangeSelectValue = event => {
            onChangeMeetOn(event.target.value)
          }

          const onSubmitRegistration = event => {
            event.preventDefault()
            if (name === '') {
              this.setState({errorMsg: 'Please enter your name'})
            } else {
              const {history} = this.props
              history.replace('/')
            }
          }

          return (
            <div className="register-page-main-container">
              <Header />
              <div className="register-page-second-container">
                <div className="register-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                </div>
                <div className="register-details-container">
                  <form onSubmit={onSubmitRegistration}>
                    <h1 className="form-heading">Let us join</h1>
                    <div>
                      <label className="register-page-label" htmlFor="name">
                        NAME
                      </label>
                      <br />
                      <input
                        className="register-page-input-field"
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={onChangeNameField}
                      />
                    </div>
                    <div>
                      <label className="register-page-label" htmlFor="topics">
                        TOPICS
                      </label>
                      <br />
                      <select
                        value={meetOn}
                        onChange={onChangeSelectValue}
                        className="register-page-input-field"
                      >
                        {topicsList.map(eachTopic => (
                          <option
                            key={eachTopic.displayText}
                            value={eachTopic.id}
                          >
                            {eachTopic.displayText}
                          </option>
                        ))}
                      </select>
                      <br />
                      <button type="submit" className="register-now-button">
                        Register Now
                      </button>
                      {errorMsg.length > 0 && (
                        <p className="error-message">{errorMsg}</p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )
        }}
      </ReferenceData.Consumer>
    )
  }
}
export default RegisterPage
