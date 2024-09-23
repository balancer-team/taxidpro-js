# Tax ID Validation Library

Tax ID Pro allows you to quickly integrate tax ID validation into your existing applications and workflows. You can validate over 200 different tax ID formats for over 100 countries. Tax ID Pro ensures your system can handle the diverse tax identification needs of your international customer base.

Lookup is available for VAT Numbers from the European Union (EU), plus the United Kingdom and Australia. Tax ID Pro provides a simple way to check the validity of VAT numbers and ensure compliance with EU regulations.

### Install

```bash
npm i @balancer-team/taxidpro
```

### Usage

Provide your API key to the `TaxIDPro` constructor. You can obtain an API key by signing up at [Tax ID Pro](https://taxid.pro/).

```ts
import { TaxIDPro } from '@balancer-team/taxidpro'

const taxidpro = new TaxIDPro({ apiKey: 'YOUR_API_KEY' })

const validationResult = await taxidpro.validate({
  country: 'au',
  tin: '92873837267',
  type: 'entity',
})

// Output:
//
// {
//   "is_valid": true,
//   "message": null,
//   "tin_compact": "92873837267",
//   "tin_standard": "92 873 837 267",
//   "country_name": "Australia",
//   "format_name": "Business Number"
// }

const lookupResult = await taxidpro.lookup({
  country: 'au',
  tin: '49004028077',
})

// Output:
//
// {
//   country_name: 'Australia',
//   tin_compact: '49004028077',
//   tin_standard: '49 004 028 077',
//   format_name: 'Business Number',
//   is_valid: true,
//   message: null,
//   lookup_data: { name: 'BHP GROUP LIMITED', address: '3000 VIC' }
// }
```

### Supported Countries

| Country              | Code | Validate           | Lookup             |
| -------------------- | ---- | ------------------ | ------------------ |
| Albania              | al   | :heavy_check_mark: |                    |
| Andorra              | ad   | :heavy_check_mark: |                    |
| Argentina            | ar   | :heavy_check_mark: |                    |
| Armenia              | am   | :heavy_check_mark: |                    |
| Aruba                | aw   | :heavy_check_mark: |                    |
| Australia            | au   | :heavy_check_mark: | :heavy_check_mark: |
| Austria              | at   | :heavy_check_mark: | :heavy_check_mark: |
| Azerbaijan           | az   | :heavy_check_mark: |                    |
| Bangladesh           | bd   | :heavy_check_mark: |                    |
| Barbados             | bb   | :heavy_check_mark: |                    |
| Belarus              | by   | :heavy_check_mark: |                    |
| Belgium              | be   | :heavy_check_mark: | :heavy_check_mark: |
| Belize               | bz   | :heavy_check_mark: |                    |
| Bolivia              | bo   | :heavy_check_mark: |                    |
| Brazil               | br   | :heavy_check_mark: |                    |
| Brunei               | bn   | :heavy_check_mark: |                    |
| Bulgaria             | bg   | :heavy_check_mark: | :heavy_check_mark: |
| Canada               | ca   | :heavy_check_mark: |                    |
| Chile                | cl   | :heavy_check_mark: |                    |
| China                | cn   | :heavy_check_mark: |                    |
| Colombia             | co   | :heavy_check_mark: |                    |
| Costa Rica           | cr   | :heavy_check_mark: |                    |
| Croatia              | hr   | :heavy_check_mark: | :heavy_check_mark: |
| Cuba                 | cu   | :heavy_check_mark: |                    |
| Curacao              | cw   | :heavy_check_mark: |                    |
| Cyprus               | cy   | :heavy_check_mark: | :heavy_check_mark: |
| Czech Republic       | cz   | :heavy_check_mark: | :heavy_check_mark: |
| Denmark              | dk   | :heavy_check_mark: | :heavy_check_mark: |
| Dominican Rep        | do   | :heavy_check_mark: |                    |
| Ecuador              | ec   | :heavy_check_mark: |                    |
| Egypt                | eg   | :heavy_check_mark: |                    |
| El Salvador          | sv   | :heavy_check_mark: |                    |
| Estonia              | ee   | :heavy_check_mark: | :heavy_check_mark: |
| Faroe Islands        | fo   | :heavy_check_mark: |                    |
| Finland              | fi   | :heavy_check_mark: | :heavy_check_mark: |
| France               | fr   | :heavy_check_mark: | :heavy_check_mark: |
| Georgia              | ge   | :heavy_check_mark: |                    |
| Germany              | de   | :heavy_check_mark: | :heavy_check_mark: |
| Gibraltar            | gi   | :heavy_check_mark: |                    |
| Greece               | gr   | :heavy_check_mark: | :heavy_check_mark: |
| Greenland            | gl   | :heavy_check_mark: |                    |
| Guatemala            | gt   | :heavy_check_mark: |                    |
| Guernsey             | gg   | :heavy_check_mark: |                    |
| Hong Kong            | hk   | :heavy_check_mark: |                    |
| Hungary              | hu   | :heavy_check_mark: | :heavy_check_mark: |
| Iceland              | is   | :heavy_check_mark: |                    |
| India                | in   | :heavy_check_mark: |                    |
| Indonesia            | id   | :heavy_check_mark: |                    |
| Ireland              | ie   | :heavy_check_mark: | :heavy_check_mark: |
| Israel               | il   | :heavy_check_mark: |                    |
| Italy                | it   | :heavy_check_mark: | :heavy_check_mark: |
| Jamaica              | jm   | :heavy_check_mark: |                    |
| Japan                | jp   | :heavy_check_mark: |                    |
| Jersey               | je   | :heavy_check_mark: |                    |
| Kazakhstan           | kz   | :heavy_check_mark: |                    |
| Kuwait               | kw   | :heavy_check_mark: |                    |
| Kyrgyzstan           | kg   | :heavy_check_mark: |                    |
| Latvia               | lv   | :heavy_check_mark: | :heavy_check_mark: |
| Liechtenstein        | li   | :heavy_check_mark: |                    |
| Lithuania            | lt   | :heavy_check_mark: | :heavy_check_mark: |
| Luxembourg           | lu   | :heavy_check_mark: | :heavy_check_mark: |
| Macedonia            | mk   | :heavy_check_mark: |                    |
| Malaysia             | my   | :heavy_check_mark: |                    |
| Malta                | mt   | :heavy_check_mark: | :heavy_check_mark: |
| Mauritius            | mu   | :heavy_check_mark: |                    |
| Mexico               | mx   | :heavy_check_mark: |                    |
| Moldova              | md   | :heavy_check_mark: |                    |
| Monaco               | mc   | :heavy_check_mark: |                    |
| Montenegro           | me   | :heavy_check_mark: |                    |
| Morocco              | ma   | :heavy_check_mark: |                    |
| Netherlands          | nl   | :heavy_check_mark: | :heavy_check_mark: |
| New Zealand          | nz   | :heavy_check_mark: |                    |
| Nicaragua            | ni   | :heavy_check_mark: |                    |
| Northern Ireland     | xi   | :heavy_check_mark: | :heavy_check_mark: |
| Norway               | no   | :heavy_check_mark: |                    |
| Pakistan             | pk   | :heavy_check_mark: |                    |
| Panama               | pa   | :heavy_check_mark: |                    |
| Paraguay             | py   | :heavy_check_mark: |                    |
| Peru                 | pe   | :heavy_check_mark: |                    |
| Philippines          | ph   | :heavy_check_mark: |                    |
| Poland               | pl   | :heavy_check_mark: | :heavy_check_mark: |
| Portugal             | pt   | :heavy_check_mark: | :heavy_check_mark: |
| Romania              | ro   | :heavy_check_mark: | :heavy_check_mark: |
| Russia               | ru   | :heavy_check_mark: |                    |
| Samoa                | ws   | :heavy_check_mark: |                    |
| San Marino           | sm   | :heavy_check_mark: |                    |
| Saudi Arabia         | sa   | :heavy_check_mark: |                    |
| Serbia               | rs   | :heavy_check_mark: |                    |
| Singapore            | sg   | :heavy_check_mark: |                    |
| Slovakia             | sk   | :heavy_check_mark: | :heavy_check_mark: |
| Slovenia             | si   | :heavy_check_mark: | :heavy_check_mark: |
| South Africa         | za   | :heavy_check_mark: |                    |
| South Korea          | kr   | :heavy_check_mark: |                    |
| Spain                | es   | :heavy_check_mark: | :heavy_check_mark: |
| Sri Lanka            | lk   | :heavy_check_mark: |                    |
| Sweden               | se   | :heavy_check_mark: | :heavy_check_mark: |
| Switzerland          | ch   | :heavy_check_mark: |                    |
| Tajikistan           | tj   | :heavy_check_mark: |                    |
| Thailand             | th   | :heavy_check_mark: |                    |
| Trinidad             | tt   | :heavy_check_mark: |                    |
| Tunisia              | tn   | :heavy_check_mark: |                    |
| Turkey               | tr   | :heavy_check_mark: |                    |
| Turkmenistan         | tm   | :heavy_check_mark: |                    |
| Ukraine              | ua   | :heavy_check_mark: |                    |
| United Arab Emirates | ae   | :heavy_check_mark: |                    |
| United Kingdom       | gb   | :heavy_check_mark: | :heavy_check_mark: |
| United States        | us   | :heavy_check_mark: |                    |
| Uruguay              | uy   | :heavy_check_mark: |                    |
| Uzbekistan           | uz   | :heavy_check_mark: |                    |
| Venezuela            | ve   | :heavy_check_mark: |                    |
| Vietnam              | vn   | :heavy_check_mark: |                    |
