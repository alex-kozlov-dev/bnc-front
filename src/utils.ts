export const throttle = <T extends (...args: any[]) => void>(fn: T, ms: number): T => {
  let lastTime = 0

  const func = (...args: any[]) => {
    const now = Date.now()
    if (now - lastTime >= ms) {
      fn(...args)
      lastTime = now
    }
  }

  return func as T
}
