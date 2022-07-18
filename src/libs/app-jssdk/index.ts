// import VConsole from 'vconsole'
// const vConsole = new VConsole()

export const inClient = /starbridge/.test(window.navigator.userAgent)

/**
 * webview 准备好了
 */
export const ready = () =>
  new Promise<void>(resolve => {
    if (!inClient) {
      resolve()
    } else {
      const check = () => {
        if (window.$$starbridge) {
          resolve()
        } else {
          setTimeout(() => {
            check()
          }, 60)
        }
      }

      check()
    }
  })

export const getSafeAreaInsets = (): {
  top: number
  right: number
  bottom: number
  left: number
} => {
  return (
    window.$$starbridge?.safeAreaInsets ?? {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }
  )
}

export const getInitialPathname = () => {
  return window.$$starbridge?.pathname
}

/**
 * 向客户端发送请求
 */
export const emit = (event: string, data: string | number | object) => {
  window.ReactNativeWebView.postMessage(
    JSON.stringify({
      event,
      data,
    }),
  )
}
