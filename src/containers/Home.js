import React from 'react'
import '../assets/css/Home.css'
import jpinformatica from '../assets/statics/jpinformatica.png'
import jpestacionamiento from '../assets/statics/jpestacionamiento.png'
import axius from '../assets/statics/axius.jpg'
import seguridadjp from '../assets/statics/seguridadjp.png'
import Page from './Page'
import Card from '../components/Card'
import Title from '../components/fragments/Title'
import Content from '../components/fragments/Content'




export default function Home() {
    return (



        <div className='section'>

            <Page
                style='mainBanner'

                head={
                    <Title
                        title='HOLDING JP'
                        subtitle='UN GRUPO DE EMPRESAS FAMILIAR.'
                    // style='mainBanner'
                    // content={}
                    />}
                body={<Content content={<button className='botonContacto aling-content-middle justify-content-center align-items-center'>CONTACTENOS</button>} />}

            // foot={}
            />
            <Page
            style='hola'
            head=''
            body=''
            foot=''
            
            />
            





        </div >
    )
}
