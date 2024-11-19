import { defineEventHandler, getQuery } from 'h3'

// Interface for the trimmed listing data that matches your current structure
interface TrimmedListing {
  id: string
  title: string
  price: number
  img: string
  listingInfo: string
  address: string
  details: {
    beds: number
    baths: number
    sqft: number
    yearBuilt: number
    propertyType: string
  }
}
const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  try {
    const response = await fetch(`${config.realEstateApiUri}/listings`, {
      headers: {
        'Authorization': `Bearer ${config.realEstateApiKey}`
      }
    })
    const data = await response.json()

    // Transform the data to match your needs
    // const trimmedListings: TrimmedListing[] = data.map((listing: any) => ({
    //   id: listing.ListingKey,
    //   title: listing.StandardFields.SubdivisionName || 'New Property Listing',
    //   price: listing.StandardFields.CurrentPrice,
    //   img: listing.StandardFields.Photos?.[0]?.Uri || '',
    //   listingInfo: listing.StandardFields.PublicRemarks,
    //   address: `${listing.StandardFields.UnparsedFirstLineAddress}, ${listing.StandardFields.City}, ${listing.StandardFields.StateOrProvince}`,
    //   details: {
    //     beds: listing.StandardFields.BedsTotal,
    //     baths: listing.StandardFields.BathsTotal,
    //     sqft: listing.StandardFields.BuildingAreaTotal,
    //     yearBuilt: listing.StandardFields.YearBuilt,
    //     propertyType: listing.StandardFields.PropertySubType
    //   }
    // }))

    // return trimmedListings
    return data
  } catch (error) {
    console.log(error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch listings'
    })
  }
})
