import React from 'react' 
import Flickity from 'react-flickity-component'
 
const flickityOptions = {
    initialIndex: 0,
    cellAlign: 'left',
    freeScroll: true,
    autoPlay: 4000,
    prevNextButtons: false,
    friction: .07,
    selectedAttraction: .01,
    contain: true,

}
 
function CharacterCarousel({items = []}) {
  if(!items.length) return null
  return (
    <Flickity
      options={flickityOptions}
      style={{width: "100%"}}
      static
    >
      {items.map(item=>item)}
    </Flickity>
  )
}

export default CharacterCarousel;