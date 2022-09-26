import React from 'react'
import Welcome from '../components/Welcome'
import Layout from '../components/globals/Layout'

const welcome = () => {
  return (
    <div>
        <Layout>
        <Welcome />
        </Layout>
        
    </div>
  )
}

export default welcome