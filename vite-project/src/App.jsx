import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import { Provider } from 'react-redux';
import appStore from './utils/appStore';


const App = () => {

  return (
    <Provider store={appStore}>
    <div className='m-20 xsm:w-[360px] xsm:h-[640px] ml-32'>
    <Header />
    <Body />
    </div>
    </Provider>
  )
}

export default App