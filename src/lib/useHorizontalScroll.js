import { useState, useEffect } from 'react'

const useHorizontalScroll = ref => {
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (el) {
      const onWheel = e => {
        if (e.deltaY === 0) return
        e.preventDefault()
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth',
        })
        setScrollLeft(el.scrollLeft)
      }
      el.addEventListener('wheel', onWheel)
      return () => el.removeEventListener('wheel', onWheel)
    }
  }, [ref])

  return scrollLeft
}

export default useHorizontalScroll
