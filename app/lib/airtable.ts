import Airtable from 'airtable'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: String(process.env.AIRTABLE_API_KEY),
})

const base = Airtable.base(String(process.env.AIRTABLE_BASE_ID))
