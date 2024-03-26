import React from 'react'

export default function Content(props) {
    const {content, style} = props
  return (

    <div class={style}>
        {content}
    </div>
  )
}
