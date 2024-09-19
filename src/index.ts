import { BASE_URL, VALIDATE_ENDPOINT, LOOKUP_ENDPOINT } from './constants'

type TaxIDProOptions = {
  apiKey: string
}

type ValidateOptions = {
  country: string
  tin: string
  type?: string
}

type ValidateResponse = {
  is_valid: boolean
  message: string | null
  tin_compact: string
  tin_standard: string
  country_name: string
  format_name: string
}

type LookupResponse = ValidateResponse & {
  lookup_data: {
    name: string
    address: string
  }
}

export class TaxIDPro {
  readonly apiKey: string

  constructor({ apiKey }: TaxIDProOptions) {
    if (typeof apiKey !== 'string') {
      throw new Error('apiKey must be a string')
    }
    this.apiKey = apiKey
  }

  async validate({ country, tin, type = 'any' }: ValidateOptions): Promise<ValidateResponse> {
    const res = await fetch(`${BASE_URL}${VALIDATE_ENDPOINT}?country=${country}&tin=${tin}&type=${type}`, {
      headers: { Authorization: `Bearer ${this.apiKey}` },
    })
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status} detail: ${await res.text()}`)
    const data = (await res.json()) as ValidateResponse
    return data
  }

  async lookup({ country, tin, type = 'vat' }: ValidateOptions): Promise<LookupResponse> {
    if (type !== 'vat') throw new Error('lookup type must be vat')
    const res = await fetch(`${BASE_URL}${LOOKUP_ENDPOINT}?country=${country}&tin=${tin}&type=${type}`, {
      headers: { Authorization: `Bearer ${this.apiKey}` },
    })
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status} detail: ${await res.text()}`)
    const data = (await res.json()) as LookupResponse
    return data
  }
}
