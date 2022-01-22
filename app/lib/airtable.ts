import Airtable from 'airtable'
import axios from 'axios'
import axiosRetry from 'axios-retry'

axiosRetry(axios, { retries: 3 })

/**
 * Airtable SDK
 */

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: String(process.env.AIRTABLE_API_KEY),
})

export const airtableBase = Airtable.base(String(process.env.AIRTABLE_BASE_ID))

/**
 * Aritable via Fetch/Axios
 */

export const airtableFetch = axios.create({
  baseURL: `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}`,
  timeout: 3000,
  headers: { Authorization: `Bearer ${String(process.env.AIRTABLE_API_KEY)}` },
})
