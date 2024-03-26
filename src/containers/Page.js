import React from 'react'
import "../assets/css/App.css"

export default function Page(props){
    const {head, body, foot, style } = (props);
    const classname =("page " + style) 
  return (
    <div className={classname}>
        {head}
        {body}
        {foot}
    </div>
  )
}
