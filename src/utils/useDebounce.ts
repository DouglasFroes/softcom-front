export default function useDebounce(fn) {
  let timeout = false

  async function debouche(...arg) {
    if (timeout) return

    timeout = true
    await fn(...arg)
    timeout = false
  }

  return debouche
}
