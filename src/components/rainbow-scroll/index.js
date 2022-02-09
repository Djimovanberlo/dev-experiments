import { useRef } from 'react'

import useScroll from '../../lib/useScroll'
import { getHSLValue } from '../../lib/rainbow-scroll'
import './style.css'

const RainbowScroll = () => {
  const scrollY = useScroll()
  const mainRef = useRef(null)

  var scrollMaxY = mainRef.scrollMaxY || document.documentElement.scrollHeight - document.documentElement.clientHeight

  const hslValue = getHSLValue(scrollY, scrollMaxY)

  return (
    <div
      ref={mainRef}
      style={{ backgroundColor: `hsl(${hslValue}, 100%, 50%)` }}
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
