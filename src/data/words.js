export const categories = [
  { id: 'body', name: 'Body', icon: 'User' },
  { id: 'food', name: 'Food', icon: 'Utensils' },
  { id: 'family', name: 'Family', icon: 'Users' },
  { id: 'animals', name: 'Animals', icon: 'PawPrint' },
  { id: 'weather', name: 'Weather', icon: 'Cloud' },
];

export const words = [
  // Body
  {
    id: '1',
    english: 'Hand',
    cree: 'micihciy',
    pronunciation: 'mi-TSIH-tsiy',
    category: 'body',
    wordClass: 'Noun (Inanimate)',
    morphology: 'mi- (personal prefix) + -cihciy (stem)'
  },
  {
    id: '2',
    english: 'Eye',
    cree: 'miskisik',
    pronunciation: 'mi-SKEE-sik',
    category: 'body',
    wordClass: 'Noun (Inanimate)',
    morphology: 'mi- (personal prefix) + -skisik (stem)'
  },
  // Food
  {
    id: '3',
    english: 'Bread',
    cree: 'pahkwesikan',
    pronunciation: 'pah-KWE-si-kan',
    category: 'food',
    wordClass: 'Noun (Animate)',
    morphology: 'pahkw- (to break off) + -esikan (resultative)'
  },
  {
    id: '4',
    english: 'Meat',
    cree: 'wiyas',
    pronunciation: 'WEE-yas',
    category: 'food',
    wordClass: 'Noun (Inanimate)',
    morphology: 'wiyas (stem)'
  },
  // Family
  {
    id: '5',
    english: 'Mother',
    cree: 'nikawiy',
    pronunciation: 'ni-GA-wiy',
    category: 'family',
    wordClass: 'Noun (Animate)',
    morphology: 'ni- (my) + -kawiy (mother)'
  },
  {
    id: '6',
    english: 'Father',
    cree: 'nohtawiy',
    pronunciation: 'noh-TA-wiy',
    category: 'family',
    wordClass: 'Noun (Animate)',
    morphology: 'n- (my) + -ohtawiy (father)'
  },
  // Animals
  {
    id: '7',
    english: 'Dog',
    cree: 'atim',
    pronunciation: 'A-tim',
    category: 'animals',
    wordClass: 'Noun (Animate)',
    morphology: 'atim (stem)'
  },
  {
    id: '8',
    english: 'Bear',
    cree: 'maskwa',
    pronunciation: 'MA-skwa',
    category: 'animals',
    wordClass: 'Noun (Animate)',
    morphology: 'maskwa (stem)'
  },
  // Weather
  {
    id: '9',
    english: 'It is snowing',
    cree: 'mispon',
    pronunciation: 'MI-spon',
    category: 'weather',
    wordClass: 'Verb (Inanimate Intransitive)',
    morphology: 'mispon (stem)'
  },
  {
    id: '10',
    english: 'It is cold',
    cree: 'tahkayaw',
    pronunciation: 'tah-KA-yaw',
    category: 'weather',
    wordClass: 'Verb (Inanimate Intransitive)',
    morphology: 'tahk- (cold) + -ayaw (state)'
  }
];
