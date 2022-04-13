const dummyData1 = [
  {
    review_id: 1155713,
    rating: 3,
    summary: 'was meh',
    recommend: true,
    response: null,
    body: 'pretty meh i but could be better',
    date: '2022-03-31T00:00:00.000Z',
    reviewer_name: 'Bob Bloblaw',
    helpfulness: 3,
    photos: [
      {
        id: 2219385,
        url: 'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
    ],
  },
  {
    review_id: 1176090,
    rating: 5,
    summary: 'was meh',
    recommend: true,
    response: null,
    body: 'pretty meh i but could be better',
    date: '2022-04-12T00:00:00.000Z',
    reviewer_name: 'Bob Bloblaw',
    helpfulness: 1,
    photos: [],
  },
  {
    review_id: 1176184,
    rating: 4,
    summary: 'testestest',
    recommend: true,
    response: null,
    body: 'testestesttestestesttestestesttestestesttestestest',
    date: '2022-04-12T00:00:00.000Z',
    reviewer_name: 'test',
    helpfulness: 0,
    photos: [],
  },
  {
    review_id: 1176125,
    rating: 2,
    summary: 'Fits Too Tight!',
    recommend: true,
    response: null,
    body: "I am a pug, why doesn't this fit me? Not good for my pug-image.",
    date: '2022-04-12T00:00:00.000Z',
    reviewer_name: 'Sad Pug',
    helpfulness: 0,
    photos: [
      {
        id: 2259385,
        url: 'http://res.cloudinary.com/dmb8pc511/image/upload/v1649793736/alpwo4tc1cvlenzs70d9.jpg',
      },
    ],
  },
  {
    review_id: 1176170,
    rating: 1,
    summary: 'CLOUDINARY YES',
    recommend: true,
    response: null,
    body: 'CLOUDINARY YESCLOUDINARY YESCLOUDINARY YESCLOUDINARY YESCLOUDINARY YESCLOUDINARY YESCLOUDINARY YES',
    date: '2022-04-12T00:00:00.000Z',
    reviewer_name: 'CLOUDINARY',
    helpfulness: 0,
    photos: [],
  },
];

const dummyData2 = [
  {
    review_id: 1155713,
    rating: 1,
    summary: 'was meh',
    recommend: true,
    response: null,
    body: 'pretty meh i but could be better',
    date: '2022-03-31T00:00:00.000Z',
    reviewer_name: 'Bob Bloblaw',
    helpfulness: 3,
    photos: [
      {
        id: 2219385,
        url: 'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
    ],
  },
  {
    review_id: 1176090,
    rating: 1,
    summary: 'was meh',
    recommend: true,
    response: null,
    body: 'pretty meh i but could be better',
    date: '2022-04-12T00:00:00.000Z',
    reviewer_name: 'Bob Bloblaw',
    helpfulness: 1,
    photos: [],
  },
  {
    review_id: 1176184,
    rating: 1,
    summary: 'testestest',
    recommend: true,
    response: null,
    body: 'testestesttestestesttestestesttestestesttestestest',
    date: '2022-04-12T00:00:00.000Z',
    reviewer_name: 'test',
    helpfulness: 0,
    photos: [],
  },
  {
    review_id: 1176125,
    rating: 1,
    summary: 'Fits Too Tight!',
    recommend: true,
    response: null,
    body: "I am a pug, why doesn't this fit me? Not good for my pug-image.",
    date: '2022-04-12T00:00:00.000Z',
    reviewer_name: 'Sad Pug',
    helpfulness: 0,
    photos: [
      {
        id: 2259385,
        url: 'http://res.cloudinary.com/dmb8pc511/image/upload/v1649793736/alpwo4tc1cvlenzs70d9.jpg',
      },
    ],
  },
  {
    review_id: 1176170,
    rating: 1,
    summary: 'CLOUDINARY YES',
    recommend: true,
    response: null,
    body: 'CLOUDINARY YESCLOUDINARY YESCLOUDINARY YESCLOUDINARY YESCLOUDINARY YESCLOUDINARY YESCLOUDINARY YES',
    date: '2022-04-12T00:00:00.000Z',
    reviewer_name: 'CLOUDINARY',
    helpfulness: 0,
    photos: [],
  },
];

const dummyData3 = [
  {
    review_id: 1155713,
    rating: 4,
    summary: 'was meh',
    recommend: true,
    response: null,
    body: 'pretty meh i but could be better',
    date: '2022-03-31T00:00:00.000Z',
    reviewer_name: 'Bob Bloblaw',
    helpfulness: 3,
    photos: [
      {
        id: 2219385,
        url: 'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
    ],
  },
];

const getAverageRating = (arr) => {
  const sum = arr.reduce((prev, curr) => prev + curr.rating, 0);
  return (sum / arr.length);
};

describe('Helper Functions', () => {
  it('will get the average rating of 3, 5, 4, 2, 1', () => {
    expect(getAverageRating(dummyData1)).toBe(3);
  });

  it('will be able to rate a product 1 star if all are 1 star', () => {
    expect(getAverageRating(dummyData2)).toBe(1);
  });

  it('will be able to rate an array with 1 product', () => {
    expect(getAverageRating(dummyData3)).toBe(4);
  });
});
