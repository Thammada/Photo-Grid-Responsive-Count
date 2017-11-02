import React from 'react'
import { withContentRect } from 'react-measure'
import styled from 'styled-components'

const photos = [...Array(50)]
const PhotoItem = styled.div`
  background: grey;
  border: 1px solid white;
  display: inline-block;
  box-sizing: border-box;
`
const PhotoSet = styled.div`
line-height: 0;
${PhotoItem} {
  @media (min-width: 992px) {
    width: ${({ measuredWidth }) => measuredWidth / 7}px;
    height: ${({ measuredWidth }) => measuredWidth / 7}px;
    &:nth-child(n+21) {
      display: none;
    }
  }
  @media (max-width: 991px) {
    width: ${({ measuredWidth }) => measuredWidth / 5}px;
    height: ${({ measuredWidth }) => measuredWidth / 5}px;
    &:nth-child(n+15) {
      display: none;
    }
  }
  @media (max-width: 575px) {
    width: ${({ measuredWidth }) => measuredWidth / 3}px;
    height: ${({ measuredWidth }) => measuredWidth / 3}px;
    &:nth-child(n+9) {
      display: none;
    }
  }
}
`

const PhotoGrid = withContentRect('bounds')(({ measureRef, measure, contentRect }) => {
  const { width } = contentRect.bounds
  return <PhotoSet innerRef={measureRef} measuredWidth={width}>
    {photos.map((photo, index) => <PhotoItem {...photo} key={index}/>)}
  </PhotoSet>
})

export default PhotoGrid
