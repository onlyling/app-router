import React from 'react'
import { Link } from 'react-router-dom'

import { Page, NavBar } from '@/starbridge'

const Home: React.FC = () => {
  return (
    <Page>
      <NavBar />
      <p>HOME - 新版本 == AAAA</p>
      <Link to="/home2">Go HOME2</Link>
    </Page>
  )
}

export default Home
