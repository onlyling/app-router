import React from 'react'

import './style.less'

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  return <div className="app-page" {...props} />
}

export default Page
