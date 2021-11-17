const Zones = {

    'Zone A':{
        'transport_mode': ['air', 'sea'],
        'shipping_methods' : {
            'air' : {
                'category': 'International',
                'delivery_agents' : [
                    {
                        'name' : 'DHL',
                        'price' : '$100',
                    },
                    {
                        'name' : 'UPS',
                        'price' : '$120',
                    },
                ]
            },
            'sea' : {
                'category': 'International',
                'delivery_agents' : [
                    {
                        'name' : 'DHL',
                        'price' : '$20',
                    },
                    {
                        'name' : 'Posta_Uganda',
                        'price' : '$25',
                    },
                    {
                        'name' : 'EMS',
                        'price' : '$32',
                    }
                ]
            }
        }
        
    },

    'Zone B':{
        'transport_mode': ['air', 'road'],
        'shipping_methods' : {
            'air' : {
                'category': 'International',
                'delivery_agents' : [
                    {
                        'name' : 'DHL',
                        'price' : '$100',
                    },
                    {
                        'name' : 'UPS',
                        'price' : '$120',
                    },
                ]
            },
    },
   
}

const regions = {
    'asia': {
        'zone' : 'Zone A',
        'countries':['china', 'japan','singapore'],
    }, 
    'europe':{
        'zone': 'Zone A',
        'countries':['uk', 'france','spain'],
    }, 
    'north_america':{
        'zone': 'Zone A',
        'countries':['usa', 'canada'],
    },
    'africa':{
        'zone' : 'Zone B',
        'countries' : ['uganda', 'south_sudan', 'rwanda'],
    }, 
    'middle_east' : {
        'zone' : 'Zone B',
        'countries':['uae'],
    }

}

const shipping_methods = {
    'International' : {

    },
    'Local' : {

    },
    'Pick up': {

    },
    'Free' : {

    }
}