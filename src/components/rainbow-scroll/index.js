import { useRef } from 'react'

import useScroll from '../../lib/useScroll'
import { getHueValue } from '../../lib/rainbow-scroll'
import './style.css'

const RainbowScroll = () => {
  const mainRef = useRef(null)
  const scrollY = useScroll()
  const scrollMaxY = mainRef.scrollMaxY || document.documentElement.scrollHeight - document.documentElement.clientHeight

  const hueValue = getHueValue(scrollY, scrollMaxY) || 0

  return (
    <div
      ref={mainRef}
      style={{ backgroundColor: `hsl(${hueValue}, 100%, 40%)` }}
      className='text-white text-center min-h-screen-2 flex flex-col justify-around'>
      <h1>Some text</h1>
      <h1>Some more text</h1>
      <h1>Hey it's even more text</h1>
      <h1>What's that? More text?</h1>
      <h1>I bet this is the last text</h1>
      <h1>Nope! this has to be it</h1>
      <h1>There will definitely more text after this</h1>
    </div>
  )
}

export default RainbowScroll
