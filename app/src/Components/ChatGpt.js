import React from 'react'
import SearchBar from './SearchBar'
import { BackgroundNetflix } from '../utils/constants'

function ChatGpt() {
  return (
    <div>
      <img src={BackgroundNetflix} alt="netflix" className='w-full h-full -z-20'/>
      <SearchBar/>
    </div>
  )
}

export default ChatGpt