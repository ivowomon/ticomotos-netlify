const THOUSAND = 1000

export const formatMileage = (miles) => {
  const numberMiles = Number(miles)

  if(numberMiles > THOUSAND) {
    return `${Math.trunc(numberMiles / THOUSAND)}k km`
  }
  return`${miles} km`
}