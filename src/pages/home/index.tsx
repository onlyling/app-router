import React from 'react'
import { Link } from 'react-router-dom'

import { Page, NavBar, Content } from '@/starbridge'

const Home: React.FC = () => {
  return (
    <Page>
      <NavBar title="HOME" />
      <Content>
        <p>HOME - 新版本 == AAAA</p>
        <Link to="/home2">Go HOME2</Link>
      </Content>
    </Page>
  )
}

export default Home
