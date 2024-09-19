import 'dotenv/config'
import test from 'node:test'
import assert from 'node:assert'
import { TaxIDPro } from '../src'

const tip = new TaxIDPro({ apiKey: process.env.API_KEY || '' })

test('validate', async () => {
  const res = await tip.validate({ country: 'au', tin: '92873837267', type: 'entity' })
  console.log(res)
  assert.strictEqual(res.is_valid, true)
  assert.strictEqual(res.message, null)
  assert.strictEqual(res.tin_compact, '92873837267')
  assert.strictEqual(res.tin_standard, '92 873 837 267')
  assert.strictEqual(res.country_name, 'Australia')
  assert.strictEqual(res.format_name, 'Business Number')
})

test('lookup', async () => {
  const res = await tip.lookup({ country: 'au', tin: '49004028077' })
  console.log(res)
  assert.strictEqual(res.is_valid, true)
  assert.strictEqual(res.message, null)
  assert.strictEqual(res.tin_compact, '49004028077')
  assert.strictEqual(res.tin_standard, '49 004 028 077')
  assert.strictEqual(res.country_name, 'Australia')
  assert.strictEqual(res.format_name, 'Business Number')
  assert.strictEqual(res.lookup_data.name, 'BHP GROUP LIMITED')
  assert.strictEqual(res.lookup_data.address, '3000 VIC')
})
