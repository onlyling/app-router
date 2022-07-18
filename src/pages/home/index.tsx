import React from 'react'
import { Link } from 'react-router-dom'

import { Page, NavBar } from '@/components/app'
import { goBack } from '@/libs/app-jssdk/navigation'

const Home: React.FC = () => {
  return (
    <Page>
      <NavBar onBack={goBack} />
      <p>HOME - 新版本 == AAAA</p>
      <Link to="/home2">Go HOME2</Link>
    </Page>
  )
}

export default Home
