import { transformListing } from '~/types/listing'

const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  try {
    const response = await fetch(`${config.realEstateApiUri}/listings?_limit=42`, {
      headers: {
        'Authorization': `Bearer ${config.realEstateApiKey}`
      }
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.log(`Error fetching listings: ${response.status} - ${errorText}`)
      throw createError({
        statusCode: response.status,
        message: 'Failed to fetch listings'
      })
    }

    const data = await response.json()
    const transformedListings = data.D.Results.map((listing: any) => transformListing(listing))
    return transformedListings
  } catch (error) {
    console.log('Error:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch listings'
    })
  }
})
