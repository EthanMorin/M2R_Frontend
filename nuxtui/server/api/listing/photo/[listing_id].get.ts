
const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  try {
    const response = await fetch(`${config.realEstateApiUri}/listings/${event.context.params?.listing_id}/photo`, {
      headers: {
        'Authorization': `Bearer ${config.realEstateApiKey}`
      }
    })
    const data = await response.json()


    return data 
  } catch (error) {
    console.log(error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch listings'
    })
  }
})
