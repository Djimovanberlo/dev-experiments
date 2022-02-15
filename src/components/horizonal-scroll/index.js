import { useState, useEffect, useRef } from 'react'

import one from '../../assets/img/1.png'
import two from '../../assets/img/2.png'
import three from '../../assets/img/3.png'
import four from '../../assets/img/4.png'
import five from '../../assets/img/5.png'
import useHorizontalScroll from '../../lib/useHorizontalScroll'
import { getPercentage, getValueFromPercentage } from '../../lib/utils'

const HorizontalScroll = () => {
  const [activeImg, setActiveImg] = useState(0)
  const imgArray = [one, two, three, four, five]
  const scrollRef = useRef(0)
  const childRef = useRef(null)
  const scrollLeft = useHorizontalScroll(scrollRef)

  const maxScrollLeft =
    scrollRef && !isNaN(scrollRef.current.scrollWidth) ? scrollRef.current.scrollWidth - scrollRef.current.offsetWidth : 0

  const percentage = getPercentage(scrollLeft, maxScrollLeft)

  useEffect(() => {
    const roundedPercentage = percentage <= 100 ? percentage : 100
    const roundedValue = Math.round(getValueFromPercentage(roundedPercentage, imgArray.length - 1))
    setActiveImg(roundedValue)
  }, [percentage, imgArray.length])

  const imgWithFallback = imgArray[activeImg] ? imgArray[activeImg] : one

  return (
    <div className='flex mt-4 w-1/2 mx-auto '>
      <div ref={scrollRef} className='overflow-auto mx-2 p-2 border-2'>
        <h1 ref={childRef} className='whitespace-nowrap'>
          I was once very sad. Then I became somewhat content AND NOW I'M <strike>SUPER</strike> ULTRA HAPPY
        </h1>
      </div>
      <img src={imgWithFallback} alt='' />
    </div>
  )
}

export default HorizontalScroll
