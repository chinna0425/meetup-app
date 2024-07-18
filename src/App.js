import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import HomePage from './components/HomePage'
import ReferenceData from './ContextData'
import RegisterPage from './components/RegisterPage'

import './App.css'
import NotFoundPage from './components/NotFoundPage'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class App extends Component {
  state = {name: '', meetOn: topicsList[0].id}

  onChangeName = data => {
    this.setState({name: data})
  }

  onChangeMeetOn = data => {
    this.setState({meetOn: data})
  }

  render() {
    const {name, meetOn} = this.state
    return (
      <ReferenceData.Provider
        value={{
          name,
          meetOn,
          topicsList,
          onChangeName: this.onChangeName,
          onChangeMeetOn: this.onChangeMeetOn,
        }}
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/not-found" component={NotFoundPage} />
          <Redirect to="/not-found" />
        </Switch>
      </ReferenceData.Provider>
    )
  }
}

export default App
