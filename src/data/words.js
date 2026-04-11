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
    morphology: 'mi- (personal prefix) + -cihciy (stem)',
    examples: [
      { cree: 'Nicihciy nispisun.', english: 'My hand is small.' },
      { cree: 'Kicihciya kanatisiw.', english: 'Your hands are clean.' }
    ],
    relatedWords: ['2'],
    expertNotes: 'Inanimate nouns in Cree often use the "mi-" prefix to indicate a generic or non-possessed form of body parts.'
  },
  {
    id: '2',
    english: 'Eye',
    cree: 'miskisik',
    pronunciation: 'mi-SKEE-sik',
    category: 'body',
    wordClass: 'Noun (Inanimate)',
    morphology: 'mi- (personal prefix) + -skisik (stem)',
    examples: [
      { cree: 'Miskisikwa miywasiwak.', english: 'The eyes are beautiful.' }
    ],
    relatedWords: ['1'],
    expertNotes: 'Note the reduplication pattern in some dialects for pluralization of inanimate nouns.'
  },
  // Food
  {
    id: '3',
    english: 'Bread',
    cree: 'pahkwesikan',
    pronunciation: 'pah-KWE-si-kan',
    category: 'food',
    wordClass: 'Noun (Animate)',
    morphology: 'pahkw- (to break off) + -esikan (resultative)',
    examples: [
      { cree: 'Pahkwesikan micisow.', english: 'He/she is eating bread.' },
      { cree: 'Pahkwesikanak miywasiwak.', english: 'The breads are good.' }
    ],
    relatedWords: ['4'],
    expertNotes: 'Unlike English, bread is considered an Animate noun in Cree, which affects its pluralization and verb agreement.'
  },
  {
    id: '4',
    english: 'Meat',
    cree: 'wiyas',
    pronunciation: 'WEE-yas',
    category: 'food',
    wordClass: 'Noun (Inanimate)',
    morphology: 'wiyas (stem)',
    examples: [
      { cree: 'Wiyas kisisow.', english: 'The meat is cooking.' }
    ],
    relatedWords: ['3'],
    expertNotes: 'Inanimate vs Animate distinction is crucial here; compare with "pahkwesikan".'
  },
  // Family
  {
    id: '5',
    english: 'Mother',
    cree: 'nikawiy',
    pronunciation: 'ni-GA-wiy',
    category: 'family',
    wordClass: 'Noun (Animate)',
    morphology: 'ni- (my) + -kawiy (mother)',
    examples: [
      { cree: 'Nikawiy nimiwayan.', english: 'I love my mother.' }
    ],
    relatedWords: ['6'],
    expertNotes: 'This is a dependent noun, meaning it must always occur with a possessive prefix.'
  },
  {
    id: '6',
    english: 'Father',
    cree: 'nohtawiy',
    pronunciation: 'noh-TA-wiy',
    category: 'family',
    wordClass: 'Noun (Animate)',
    morphology: 'n- (my) + -ohtawiy (father)',
    examples: [
      { cree: 'Nohtawiy atuskew.', english: 'My father is working.' }
    ],
    relatedWords: ['5'],
    expertNotes: 'Dependent noun like "nikawiy". The root "-ohtawiy" cannot stand alone.'
  },
  // Animals
  {
    id: '7',
    english: 'Dog',
    cree: 'atim',
    pronunciation: 'A-tim',
    category: 'animals',
    wordClass: 'Noun (Animate)',
    morphology: 'atim (stem)',
    examples: [
      { cree: 'Atim pimipahtaw.', english: 'The dog is running.' }
    ],
    relatedWords: ['8'],
    expertNotes: 'The plural form is "atimwak".'
  },
  {
    id: '8',
    english: 'Bear',
    cree: 'maskwa',
    pronunciation: 'MA-skwa',
    category: 'animals',
    wordClass: 'Noun (Animate)',
    morphology: 'maskwa (stem)',
    examples: [
      { cree: 'Maskwa nibaw.', english: 'The bear is sleeping.' }
    ],
    relatedWords: ['7'],
    expertNotes: 'Maskwa is a culturally significant figure in Cree oral traditions.'
  },
  // Weather
  {
    id: '9',
    english: 'It is snowing',
    cree: 'mispon',
    pronunciation: 'MI-spon',
    category: 'weather',
    wordClass: 'Verb (Inanimate Intransitive)',
    morphology: 'mispon (stem)',
    examples: [
      { cree: 'Mispon anohc.', english: 'It is snowing today.' }
    ],
    relatedWords: ['10'],
    expertNotes: 'Verbs that describe weather are typically VIIs (Verb Inanimate Intransitive) in Cree.'
  },
  {
    id: '10',
    english: 'It is cold',
    cree: 'tahkayaw',
    pronunciation: 'tah-KA-yaw',
    category: 'weather',
    wordClass: 'Verb (Inanimate Intransitive)',
    morphology: 'tahk- (cold) + -ayaw (state)',
    examples: [
      { cree: 'Tahkayaw.', english: 'It is cold.' },
      { cree: 'Tahkayawwayaw.', english: 'It is very cold.' }
    ],
    relatedWords: ['9'],
    expertNotes: 'The root "tahk-" relates to coldness, "ayaw" relates to the state of the weather.'
  }
];
