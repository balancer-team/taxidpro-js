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

| Country                                                                       | Code |      Validate      |       Lookup       |
| ----------------------------------------------------------------------------- | :--: | :----------------: | :----------------: |
| [Albania](https://taxid.pro/docs/countries/albania)                           |  al  | :heavy_check_mark: |                    |
| [Andorra](https://taxid.pro/docs/countries/andorra)                           |  ad  | :heavy_check_mark: |                    |
| [Argentina](https://taxid.pro/docs/countries/argentina)                       |  ar  | :heavy_check_mark: |                    |
| [Armenia](https://taxid.pro/docs/countries/armenia)                           |  am  | :heavy_check_mark: |                    |
| [Aruba](https://taxid.pro/docs/countries/aruba)                               |  aw  | :heavy_check_mark: |                    |
| [Australia](https://taxid.pro/docs/countries/australia)                       |  au  | :heavy_check_mark: | :heavy_check_mark: |
| [Austria](https://taxid.pro/docs/countries/austria)                           |  at  | :heavy_check_mark: | :heavy_check_mark: |
| [Azerbaijan](https://taxid.pro/docs/countries/azerbaijan)                     |  az  | :heavy_check_mark: |                    |
| [Bangladesh](https://taxid.pro/docs/countries/bangladesh)                     |  bd  | :heavy_check_mark: |                    |
| [Barbados](https://taxid.pro/docs/countries/barbados)                         |  bb  | :heavy_check_mark: |                    |
| [Belarus](https://taxid.pro/docs/countries/belarus)                           |  by  | :heavy_check_mark: |                    |
| [Belgium](https://taxid.pro/docs/countries/belgium)                           |  be  | :heavy_check_mark: | :heavy_check_mark: |
| [Belize](https://taxid.pro/docs/countries/belize)                             |  bz  | :heavy_check_mark: |                    |
| [Bolivia](https://taxid.pro/docs/countries/bolivia)                           |  bo  | :heavy_check_mark: |                    |
| [Brazil](https://taxid.pro/docs/countries/brazil)                             |  br  | :heavy_check_mark: |                    |
| [Brunei](https://taxid.pro/docs/countries/brunei)                             |  bn  | :heavy_check_mark: |                    |
| [Bulgaria](https://taxid.pro/docs/countries/bulgaria)                         |  bg  | :heavy_check_mark: | :heavy_check_mark: |
| [Canada](https://taxid.pro/docs/countries/canada)                             |  ca  | :heavy_check_mark: |                    |
| [Chile](https://taxid.pro/docs/countries/chile)                               |  cl  | :heavy_check_mark: |                    |
| [China](https://taxid.pro/docs/countries/china)                               |  cn  | :heavy_check_mark: |                    |
| [Colombia](https://taxid.pro/docs/countries/colombia)                         |  co  | :heavy_check_mark: |                    |
| [Costa Rica](https://taxid.pro/docs/countries/costa-rica)                     |  cr  | :heavy_check_mark: |                    |
| [Croatia](https://taxid.pro/docs/countries/croatia)                           |  hr  | :heavy_check_mark: | :heavy_check_mark: |
| [Cuba](https://taxid.pro/docs/countries/cuba)                                 |  cu  | :heavy_check_mark: |                    |
| [Curacao](https://taxid.pro/docs/countries/curacao)                           |  cw  | :heavy_check_mark: |                    |
| [Cyprus](https://taxid.pro/docs/countries/cyprus)                             |  cy  | :heavy_check_mark: | :heavy_check_mark: |
| [Czech Republic](https://taxid.pro/docs/countries/czech-republic)             |  cz  | :heavy_check_mark: | :heavy_check_mark: |
| [Denmark](https://taxid.pro/docs/countries/denmark)                           |  dk  | :heavy_check_mark: | :heavy_check_mark: |
| [Dominican Rep](https://taxid.pro/docs/countries/dominican-rep)               |  do  | :heavy_check_mark: |                    |
| [Ecuador](https://taxid.pro/docs/countries/ecuador)                           |  ec  | :heavy_check_mark: |                    |
| [Egypt](https://taxid.pro/docs/countries/egypt)                               |  eg  | :heavy_check_mark: |                    |
| [El Salvador](https://taxid.pro/docs/countries/el-salvador)                   |  sv  | :heavy_check_mark: |                    |
| [Estonia](https://taxid.pro/docs/countries/estonia)                           |  ee  | :heavy_check_mark: | :heavy_check_mark: |
| [Faroe Islands](https://taxid.pro/docs/countries/faroe-islands)               |  fo  | :heavy_check_mark: |                    |
| [Finland](https://taxid.pro/docs/countries/finland)                           |  fi  | :heavy_check_mark: | :heavy_check_mark: |
| [France](https://taxid.pro/docs/countries/france)                             |  fr  | :heavy_check_mark: | :heavy_check_mark: |
| [Georgia](https://taxid.pro/docs/countries/georgia)                           |  ge  | :heavy_check_mark: |                    |
| [Germany](https://taxid.pro/docs/countries/germany)                           |  de  | :heavy_check_mark: | :heavy_check_mark: |
| [Gibraltar](https://taxid.pro/docs/countries/gibraltar)                       |  gi  | :heavy_check_mark: |                    |
| [Greece](https://taxid.pro/docs/countries/greece)                             |  gr  | :heavy_check_mark: | :heavy_check_mark: |
| [Greenland](https://taxid.pro/docs/countries/greenland)                       |  gl  | :heavy_check_mark: |                    |
| [Guatemala](https://taxid.pro/docs/countries/guatemala)                       |  gt  | :heavy_check_mark: |                    |
| [Guernsey](https://taxid.pro/docs/countries/guernsey)                         |  gg  | :heavy_check_mark: |                    |
| [Hong Kong](https://taxid.pro/docs/countries/hong-kong)                       |  hk  | :heavy_check_mark: |                    |
| [Hungary](https://taxid.pro/docs/countries/hungary)                           |  hu  | :heavy_check_mark: | :heavy_check_mark: |
| [Iceland](https://taxid.pro/docs/countries/iceland)                           |  is  | :heavy_check_mark: |                    |
| [India](https://taxid.pro/docs/countries/india)                               |  in  | :heavy_check_mark: |                    |
| [Indonesia](https://taxid.pro/docs/countries/indonesia)                       |  id  | :heavy_check_mark: |                    |
| [Ireland](https://taxid.pro/docs/countries/ireland)                           |  ie  | :heavy_check_mark: | :heavy_check_mark: |
| [Israel](https://taxid.pro/docs/countries/israel)                             |  il  | :heavy_check_mark: |                    |
| [Italy](https://taxid.pro/docs/countries/italy)                               |  it  | :heavy_check_mark: | :heavy_check_mark: |
| [Jamaica](https://taxid.pro/docs/countries/jamaica)                           |  jm  | :heavy_check_mark: |                    |
| [Japan](https://taxid.pro/docs/countries/japan)                               |  jp  | :heavy_check_mark: |                    |
| [Jersey](https://taxid.pro/docs/countries/jersey)                             |  je  | :heavy_check_mark: |                    |
| [Kazakhstan](https://taxid.pro/docs/countries/kazakhstan)                     |  kz  | :heavy_check_mark: |                    |
| [Kuwait](https://taxid.pro/docs/countries/kuwait)                             |  kw  | :heavy_check_mark: |                    |
| [Kyrgyzstan](https://taxid.pro/docs/countries/kyrgyzstan)                     |  kg  | :heavy_check_mark: |                    |
| [Latvia](https://taxid.pro/docs/countries/latvia)                             |  lv  | :heavy_check_mark: | :heavy_check_mark: |
| [Liechtenstein](https://taxid.pro/docs/countries/liechtenstein)               |  li  | :heavy_check_mark: |                    |
| [Lithuania](https://taxid.pro/docs/countries/lithuania)                       |  lt  | :heavy_check_mark: | :heavy_check_mark: |
| [Luxembourg](https://taxid.pro/docs/countries/luxembourg)                     |  lu  | :heavy_check_mark: | :heavy_check_mark: |
| [Macedonia](https://taxid.pro/docs/countries/macedonia)                       |  mk  | :heavy_check_mark: |                    |
| [Malaysia](https://taxid.pro/docs/countries/malaysia)                         |  my  | :heavy_check_mark: |                    |
| [Malta](https://taxid.pro/docs/countries/malta)                               |  mt  | :heavy_check_mark: | :heavy_check_mark: |
| [Mauritius](https://taxid.pro/docs/countries/mauritius)                       |  mu  | :heavy_check_mark: |                    |
| [Mexico](https://taxid.pro/docs/countries/mexico)                             |  mx  | :heavy_check_mark: |                    |
| [Moldova](https://taxid.pro/docs/countries/moldova)                           |  md  | :heavy_check_mark: |                    |
| [Monaco](https://taxid.pro/docs/countries/monaco)                             |  mc  | :heavy_check_mark: |                    |
| [Montenegro](https://taxid.pro/docs/countries/montenegro)                     |  me  | :heavy_check_mark: |                    |
| [Morocco](https://taxid.pro/docs/countries/morocco)                           |  ma  | :heavy_check_mark: |                    |
| [Netherlands](https://taxid.pro/docs/countries/netherlands)                   |  nl  | :heavy_check_mark: | :heavy_check_mark: |
| [New Zealand](https://taxid.pro/docs/countries/new-zealand)                   |  nz  | :heavy_check_mark: |                    |
| [Nicaragua](https://taxid.pro/docs/countries/nicaragua)                       |  ni  | :heavy_check_mark: |                    |
| [Northern Ireland](https://taxid.pro/docs/countries/northern-ireland)         |  xi  | :heavy_check_mark: | :heavy_check_mark: |
| [Norway](https://taxid.pro/docs/countries/norway)                             |  no  | :heavy_check_mark: |                    |
| [Pakistan](https://taxid.pro/docs/countries/pakistan)                         |  pk  | :heavy_check_mark: |                    |
| [Panama](https://taxid.pro/docs/countries/panama)                             |  pa  | :heavy_check_mark: |                    |
| [Paraguay](https://taxid.pro/docs/countries/paraguay)                         |  py  | :heavy_check_mark: |                    |
| [Peru](https://taxid.pro/docs/countries/peru)                                 |  pe  | :heavy_check_mark: |                    |
| [Philippines](https://taxid.pro/docs/countries/philippines)                   |  ph  | :heavy_check_mark: |                    |
| [Poland](https://taxid.pro/docs/countries/poland)                             |  pl  | :heavy_check_mark: | :heavy_check_mark: |
| [Portugal](https://taxid.pro/docs/countries/portugal)                         |  pt  | :heavy_check_mark: | :heavy_check_mark: |
| [Romania](https://taxid.pro/docs/countries/romania)                           |  ro  | :heavy_check_mark: | :heavy_check_mark: |
| [Russia](https://taxid.pro/docs/countries/russia)                             |  ru  | :heavy_check_mark: |                    |
| [Samoa](https://taxid.pro/docs/countries/samoa)                               |  ws  | :heavy_check_mark: |                    |
| [San Marino](https://taxid.pro/docs/countries/san-marino)                     |  sm  | :heavy_check_mark: |                    |
| [Saudi Arabia](https://taxid.pro/docs/countries/saudi-arabia)                 |  sa  | :heavy_check_mark: |                    |
| [Serbia](https://taxid.pro/docs/countries/serbia)                             |  rs  | :heavy_check_mark: |                    |
| [Singapore](https://taxid.pro/docs/countries/singapore)                       |  sg  | :heavy_check_mark: |                    |
| [Slovakia](https://taxid.pro/docs/countries/slovakia)                         |  sk  | :heavy_check_mark: | :heavy_check_mark: |
| [Slovenia](https://taxid.pro/docs/countries/slovenia)                         |  si  | :heavy_check_mark: | :heavy_check_mark: |
| [South Africa](https://taxid.pro/docs/countries/south-africa)                 |  za  | :heavy_check_mark: |                    |
| [South Korea](https://taxid.pro/docs/countries/south-korea)                   |  kr  | :heavy_check_mark: |                    |
| [Spain](https://taxid.pro/docs/countries/spain)                               |  es  | :heavy_check_mark: | :heavy_check_mark: |
| [Sri Lanka](https://taxid.pro/docs/countries/sri-lanka)                       |  lk  | :heavy_check_mark: |                    |
| [Sweden](https://taxid.pro/docs/countries/sweden)                             |  se  | :heavy_check_mark: | :heavy_check_mark: |
| [Switzerland](https://taxid.pro/docs/countries/switzerland)                   |  ch  | :heavy_check_mark: |                    |
| [Tajikistan](https://taxid.pro/docs/countries/tajikistan)                     |  tj  | :heavy_check_mark: |                    |
| [Thailand](https://taxid.pro/docs/countries/thailand)                         |  th  | :heavy_check_mark: |                    |
| [Trinidad](https://taxid.pro/docs/countries/trinidad)                         |  tt  | :heavy_check_mark: |                    |
| [Tunisia](https://taxid.pro/docs/countries/tunisia)                           |  tn  | :heavy_check_mark: |                    |
| [Turkey](https://taxid.pro/docs/countries/turkey)                             |  tr  | :heavy_check_mark: |                    |
| [Turkmenistan](https://taxid.pro/docs/countries/turkmenistan)                 |  tm  | :heavy_check_mark: |                    |
| [Ukraine](https://taxid.pro/docs/countries/ukraine)                           |  ua  | :heavy_check_mark: |                    |
| [United Arab Emirates](https://taxid.pro/docs/countries/united-arab-emirates) |  ae  | :heavy_check_mark: |                    |
| [United Kingdom](https://taxid.pro/docs/countries/united-kingdom)             |  gb  | :heavy_check_mark: | :heavy_check_mark: |
| [United States](https://taxid.pro/docs/countries/united-states)               |  us  | :heavy_check_mark: |                    |
| [Uruguay](https://taxid.pro/docs/countries/uruguay)                           |  uy  | :heavy_check_mark: |                    |
| [Uzbekistan](https://taxid.pro/docs/countries/uzbekistan)                     |  uz  | :heavy_check_mark: |                    |
| [Venezuela](https://taxid.pro/docs/countries/venezuela)                       |  ve  | :heavy_check_mark: |                    |
| [Vietnam](https://taxid.pro/docs/countries/vietnam)                           |  vn  | :heavy_check_mark: |                    |
