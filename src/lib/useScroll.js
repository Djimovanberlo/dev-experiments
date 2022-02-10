import React, { useState, useEffect } from 'react'

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0)

  const setYOffset = () => {
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    (function() {
      window.addEventListener('scroll', setYOffset)
    })()
    return () => {
      window.removeEventListener('scroll', setYOffset)
    }
  })

  return scrollY
}

export default useScroll
