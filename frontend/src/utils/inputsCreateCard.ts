export enum ErrorFieldCreateCard {
  QUESTION = 'Question is obligatory',
  RESPONSE = 'Response is obligatory'
}

export enum Categories {
    FIRST, 
    SECOND, 
    THIRD, 
    FOURTH, 
    FIFTH, 
    SIXTH, 
    SEVENTH, 
    DONE
}

export const champs = [
  {
    id: 'question',
    name: 'Question',
    required: true,
    errorMessage: ErrorFieldCreateCard.QUESTION,
    changable: true
  },
  {
    id: 'response',
    name: 'Response',
    required: true,
    errorMessage: ErrorFieldCreateCard.RESPONSE,
    changable: true
  },
  {
    id: 'category',
    name: 'Category',
    required: true,
    errorMessage: null,
    changable: false
  },
  {
    id: 'tag',
    name: 'Tag',
    required: false,
    errorMessage: null,
    changable: true
  }
];