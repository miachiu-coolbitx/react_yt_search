const inputModel = [
  {
    //style: '',
    name: 'f_name',
    label: 'First Name',
    type: 'text',
    placeholder: 'Input mail address',
  },
  {
    name: 'l_name',
    label: 'Last Name',
    type: 'text',
    placeholder: 'END PUBLIC KEY',
  },
  {
    name: 'gender',
    label:
      'Country location of your company jurisdiction. Please follow ISO 3166-1 alpha-2 country code.',
    type: 'select',
    options: [
      { value: '', name: 'Select' },
      { value: '1', name: 'Option1' },
      { value: '2', name: 'Option2' },
      { value: '3', name: 'Option3' },
    ],
  },
];

export { inputModel };
