export const hotelData = async () => [
  {
    "name": "hotelone",
    "starRating": 5,
    "facilities": ['car park', 'pool'],
  },
  {
    name: 'hoteltwo',
    starRating: 3,
    facilities: ['car park', 'gym'],
  },
  {
    name: 'hotelthree',
    starRating: 3,
    facilities: [],
  },
  {
    name: 'hotelfour',
    starRating: 2,
    facilities: [],
  },
  {
    name: 'hotelfive',
    starRating: 1,
    facilities: ['car park', 'gym', 'pool'],
  },
];

export const hotelFilters = async () => ['car park', 'gym', 'pool'];
