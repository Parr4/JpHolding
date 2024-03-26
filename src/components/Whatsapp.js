import React from 'react'
import wspicon from '../assets/statics/wspicon.svg'
import '../assets/css/whatsapp.css'

export default function Whatsapp() {
  return (
    <div>
        <a  href="">
            <img className='wspicon position-fixed' src={wspicon} alt="Whatsapp" />
        </a>
    </div>
  )
}
