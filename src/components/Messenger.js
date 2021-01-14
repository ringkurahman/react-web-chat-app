import React, { useState } from 'react'
import { createTimestamp } from '../utils/time'



const Messenger = ({onSubmit}) => {

    const [value, setValue] = useState('')

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            e.preventDefault()
            sendMessage()
            setValue('')
        }
  }
  
  const sendMessage = (e) => {
    
    if (value.trim() === '') {
      return
    }

    const message = {
      content: value.trim(),
      timestamp: createTimestamp()
    }

    onSubmit(message)
    setValue('')
  }
    
    return (
    <div className="chat-input chat-button form-group mt-3 mb-0">
      <textarea
        onChange={e => setValue(e.target.value)}
        onKeyPress={onKeyPress}
        value={value}
        className="form-control"
        row="3"
        placeholder="Type your message here..">
        </textarea>
        <button className='btn btn-sm btn-outline-primary mt-2' onClick={sendMessage}>Send</button>
    </div>
  )
}

export default Messenger