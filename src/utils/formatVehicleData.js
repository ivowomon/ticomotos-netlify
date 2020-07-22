import { get } from "lodash"

const THOUSAND = 1000

export const formatMileage = (miles) => {
  const numberMiles = Number(miles)

  if(numberMiles > THOUSAND) {
    return `${Math.trunc(numberMiles / THOUSAND)}k km`
  }
  return`${miles} km`
}

export const formatImagesUrls = (node) => {
  const imagesUrls = node.photos.map((imageNode) => {

    const url = get(imageNode, 'formats.large.url') ||
      get(imageNode, 'formats.medium.url') ||
      get(imageNode, 'formats.small.url') ||
      get(imageNode, 'formats.thumbnail.url')

    return url
  })

  return imagesUrls
}