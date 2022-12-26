import React from 'react'

import { Page, NavBar, Content } from '@/starbridge'

const Home2: React.FC = () => {
  return (
    <Page>
      <NavBar title="HOME2" backgroundColor="#098" />
      <Content style={{ backgroundColor: '#987' }}>
        <p>HOME2 - 新版本 == BBBB</p>
        <div style={{ height: 1000 }} />
      </Content>
    </Page>
  )
}

export default Home2
