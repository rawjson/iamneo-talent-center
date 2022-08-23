export const initialData = {
  candidates: {
    'cand-1': {
      id: 'cand-1',
      name: 'Amridharshan A',
      company: 'Intellectyx Data Science',
      rating: 4,
    },
    'cand-2': {
      id: 'cand-2',
      name: 'Vimal Kumar',
      company: 'Sirius Computer Solutions',
      rating: 5,
    },
    'cand-3': {
      id: 'cand-3',
      name: 'Akash P',
      company: 'Centre',
      rating: 0,
    },
    'cand-4': {
      id: 'cand-4',
      name: 'Gayathri L',
      company: 'Katomamaran Technologies Pvt Ltd',
      rating: 0,
    },
    'cand-5': {
      id: 'cand-5',
      name: 'S Suresh',
      company: 'Synopsis',
      rating: 0,
    },
    'cand-6': {
      id: 'cand-6',
      name: 'Arun Prakash A',
      company: 'IIT Madras',
      rating: 0,
    },
    'cand-7': {
      id: 'cand-7',
      name: 'M Janasri',
      company: 'TCS',
      rating: 0,
    },
    'cand-8': {
      id: 'cand-8',
      name: 'Arun Kumar',
      company: 'Vidhya Skill School',
      rating: 0,
    },
    'cand-9': {
      id: 'cand-9',
      name: 'Midhun Krishna S',
      company: 'Cognizant',
      rating: 0,
    },
    'cand-10': {
      id: 'cand-10',
      name: 'Gowri Shankar S',
      company: 'BM Technovations',
      rating: 0,
    },
    'cand-11': {
      id: 'cand-11',
      name: 'Hemachandru K',
      company: 'Paypal Client',
      rating: 0,
    },
    'cand-12': {
      id: 'cand-12',
      name: 'Jithin Sajay',
      company: 'Unknown',
      rating: 0,
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Open',
      candIds: ['cand-1', 'cand-2', 'cand-11'],
      theme: 'gray',
    },
    'column-2': {
      id: 'column-2',
      title: 'Contacted',
      candIds: ['cand-3', 'cand-4', 'cand-12'],
      theme: 'yellow',
    },
    'column-3': {
      id: 'column-3',
      title: 'Written test',
      candIds: ['cand-5', 'cand-6'],
      theme: 'yellow',
    },
    'column-4': {
      id: 'column-4',
      title: 'Technical round',
      candIds: ['cand-7', 'cand-8'],
      theme: 'red',
    },
    'column-5': {
      id: 'column-5',
      title: 'Culture fit round',
      candIds: ['cand-9', 'cand-10'],
      theme: 'red',
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5'],
};
