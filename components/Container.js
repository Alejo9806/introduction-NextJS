import React from 'react'
import Navigation from './navigation'
import Head from 'next/head'


const Container = (props) => {
  return (
    <div>
        <Head>
            <title>Next.js Project</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"/>
        </Head>
        <Navigation/>
        <div className='content container p-4'>
            {props.children}
        </div>
    </div>
  )
}


export default Container