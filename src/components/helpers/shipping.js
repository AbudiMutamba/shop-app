export const Zones = {
    'Zone A':  [
                    {
                        name : 'DHL',
                        mode : 'flight',
                        classes : [
                        {
                            label : 'Expedited International',
                            duration_in_days: 5,
                            currency : 'USD',
                            cost : 120
                        },
                        {
                            label : 'First class International',
                            duration_in_days: 5,
                            currency: 'USD',
                            cost : 90
                        },
                     ]
                    
                    },
                    {
                        'name' : 'EMS',
                        mode : 'water',
                        classes : [
                        {
                            label : 'Standart International',
                            duration_in_days: 45,
                            currency : 'USD',
                            cost : 40
                        }
                      ]
                    }
                ],
            

    'Zone B': [
        {
            company: 'Posta Uganda',
            mode: 'Road',
            classes: [
                {
                    label: 'Same day delivery',
                    duration_in_days : 1,
                    currrency : 'UGX',
                    cost : 45000
                }

            ]
        }
    ]

}

 export const regions = [
    {
        'region': 'asia',
        'zone' : 'Zone A',
        countries:['China', 'Japan','Singapore'],
    }, 
    {
        'region':'europe',
        'zone': 'Zone A',
        countries:['UK', 'France','Spain'],
    }, 
   {
        'region' : 'north_america',
        'zone': 'Zone A',
        countries : ['Usa', 'Canada'],
    },
    {
        'region' : 'africa',
        'zone' : 'Zone B',
        countries : ['Uganda', 'South_Sudan', 'Rwanda'],
    }, 
    {
        'region': 'middle_east',
        'zone' : 'Zone B',
        countries:['United_Arab_Emirates']
    }
 ]
//   const Currencies = [

// ]

/*
let country =  'uganda'
let country  = regions.filter(region => region.countries.includes(country)).map(region => region.zone)
let regions_which_contain_country = regions.filter(region => region.countries.includes(country))
let zones_of_the_regions = regions_which_contain_country.map(regions_which_contain_country => regions_which_contain_country.zone)
console.log(zones_of_the_regions)

Get zone of the country
let [regions_which_contain_country] = regions.filter(region => regions.countries.includes(country))
let {zone} = regions_which_contain_country
console.log(Zones[zone])
*/

export const getCountryZone = (country) => {
    let [regions_which_contain_country] = regions.filter(region => region.countries.includes(country))
   /*  let { zone = null} = regions_which_contain_country */
   let zone = regions_which_contain_country ? regions_which_contain_country.zone : null
   // console.log(zone)
   return Zones[zone]
   //return zone ? Zones[zone] : null
}


