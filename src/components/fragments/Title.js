import React from 'react'
import "../../assets/css/components/Title.css"

export default function Title(props) {
    const { title, subtitle, style, content } = props
    return (
        <div className={style}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            {content}
        </div>
    )
}
