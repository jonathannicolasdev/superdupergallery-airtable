import Airtable from 'airtable'
import axios from 'axios'
import axiosRetry from 'axios-retry'

axiosRetry(axios, { retries: 3 })

const AIRTABLE_API_KEY = String(process.env.AIRTABLE_API_KEY)
const AIRTABLE_BASE_ID = String(process.env.AIRTABLE_BASE_ID)

/**
 * Airtable SDK
 */

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: AIRTABLE_API_KEY,
})

export const airtableBase = Airtable.base(AIRTABLE_BASE_ID)

/**
 * Aritable via Fetch/Axios
 */

export const airtableFetch = axios.create({
  baseURL: `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}`,
  timeout: 3000,
  headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}` },
})
