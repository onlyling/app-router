import React, { memo } from 'react'

import './style.less'

const Content: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  return <div className="app-content" {...props} />
}

export default memo(Content)
