/**
 * Notification component displays a message to the user with an optional variant.
 * @param message - The message to display.
 * @param variant - The variant of the notification. Defaults to 'info'.
 */
import React from 'react'
import {Toast as ReactToast, ToastContainer} from 'react-bootstrap'
import {IToastMessage} from '../../utils'

interface IToastNotificationProps {
  messages: IToastMessage[]
}

const Toast: React.FC<IToastNotificationProps> = ({messages}) => {
  return (
    <ToastContainer position="top-end">
      {messages.map(({content, variant}, index) => {
        return (
          <ReactToast key={index} show={true} bg={variant}>
            <ReactToast.Body className="text-white">{content}</ReactToast.Body>
          </ReactToast>
        )
      })}
    </ToastContainer>
  )
}

export default Toast
