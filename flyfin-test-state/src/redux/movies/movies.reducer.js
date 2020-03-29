const INITIAL_STATE = {
    list: [
        {
            id: 1,
            imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/b_thelionking2019_header_poststreet_mobile_18276_8dd5ba33.jpeg?region=0,0,640,430',
            name: {
                en: 'Lion King',
                de: 'König der Löwen',
                it: 'Lion King'
            },
            price: {
                usd: 5.60,
                euro: 4.80,
                rupee: 300
            }
        },
        {
            id: 2,
            imgUrl: 'https://www.slantmagazine.com/wp-content/uploads/2010/12/inceptionbr-1000x600.jpg',
            name: {
                en: 'Inception',
                de: 'Anfang',
                it: 'inizio'
            },
            price: {
                usd: 4.00,
                euro: 3.00,
                rupee: 220
            }
        },
        {
            id: 3,
            imgUrl: 'https://i.ytimg.com/vi/SEUXfv87Wpk/maxresdefault.jpg',
            name: {
                en: 'Parasite',
                de: 'Parasit',
                it: 'Parassita'
            },
            price: {
                usd: 8.90,
                euro: 4.66,
                rupee: 450
            }
        },
        {
            id: 4,
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsqbIxUo553JUmbYsFbrgz8PvVTIArMzMxyNXSK_k3O6ei_UAD',
            name: {
                en: 'This is Us',
                de: 'Das sind wir',
                it: 'Questi siamo noi'
            },
            price: {
                usd: 8.99,
                euro: 6.88,
                rupee: 799
            }
        },
        {
            id: 5,
            imgUrl: 'https://honknews.com/wp-content/uploads/2020/03/Money-Heist-Season-4.png',
            name: {
                en: 'Money heist',
                de: 'Geldraub',
                it: 'Furto di denaro'
            },
            price: {
                usd: 5.63,
                euro: 4.84,
                rupee: 343
            }
        },
        {
            id: 6,
            imgUrl: 'https://i.ytimg.com/vi/VBFT9JQ5xYU/maxresdefault.jpg',
            name: {
                en: 'House of cards',
                de: 'Kartenhaus',
                it: 'Castello di carte'
            },
            price: {
                usd: 7.55,
                euro: 6.45,
                rupee: 565
            }
        }
    ]
};

const moviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default moviesReducer;