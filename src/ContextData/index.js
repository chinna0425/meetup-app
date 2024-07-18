import React from 'react'

const ReferenceData = React.createContext({
  name: '',
  meetOn: '',
  topicsList: [],
  onChangeName: () => {},
  onChangeMeetOn: () => {},
})

export default ReferenceData
