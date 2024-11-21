import { transformListing } from '~/types/listing'

const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  try {
    const response = await fetch(`${config.realEstateApiUri}/listings/${event.context.params?.listing_id}`, {
      headers: {
        'Authorization': `Bearer ${config.realEstateApiKey}`
      }
    })
    const data = await response.json()

    // Transform the raw data using our transformer function
    const transformedListings = data.D.Results.map((listing: any) => transformListing(listing))

    return transformedListings
  } catch (error) {
    console.log(error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch listings'
    })
  }
})
