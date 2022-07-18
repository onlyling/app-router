// 这个不能加export 加了就识别不到cityData了
declare interface Window {
  $$starbridge: any
  ReactNativeWebView: {
    postMessage: (msg: string) => void
  }
}
