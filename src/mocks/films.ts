import type { Movie } from '../types/types';

const films: Movie[] = [
  {
    'id': 1,
    'name': 'The Grand Budapest Hotel',
    'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
    'previewImage': 'img/the-grand-budapest-hotel.jpg',
    'backgroundImage': 'img/the-grand-budapest-hotel-bg.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    'rating': 8.9,
    'scoresCount': 240,
    'director': 'Wes Anderson',
    'starring': [
      'Bill Murray'
    ],
    'runTime': 99,
    'genre': 'Comedy',
    'released': 2014,
    'isFavorite': true
  },
  {
    'id': 2,
    'name': 'Bohemian Rhapsody',
    'posterImage': 'img/bohemian-rhapsody.jpg',
    'previewImage': 'img/bohemian-rhapsody.jpg',
    'backgroundImage': 'img/bohemian-rhapsody.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'Bohemian Rhapsody. Description',
    'rating': 8.5,
    'scoresCount': 340,
    'director': 'Fenderson',
    'starring': [
      'Will Hurray'
    ],
    'runTime': 180,
    'genre': 'Bio',
    'released': 2005,
    'isFavorite': true
  },
  {
    'id': 3,
    'name': 'Shutter Island',
    'posterImage': 'img/shutter-island.jpg',
    'previewImage': 'img/shutter-island.jpg',
    'backgroundImage': 'img/shutter-island.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'Shutter Island. Description',
    'rating': 6.5,
    'scoresCount': 140,
    'director': 'Genicson',
    'starring': [
      'Will Smith'
    ],
    'runTime': 100,
    'genre': 'Bio',
    'released': 2004,
    'isFavorite': false
  },
  {
    'id': 4,
    'name': 'Aviator',
    'posterImage': 'img/aviator.jpg',
    'previewImage': 'img/aviator.jpg',
    'backgroundImage': 'img/aviator.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'Aviator. Description',
    'rating': 8.5,
    'scoresCount': 340,
    'director': 'K Kostner',
    'starring': [
      'Di Caprio'
    ],
    'runTime': 180,
    'genre': 'Thriller',
    'released': 2009,
    'isFavorite': true
  },
  {
    'id': 5,
    'name': 'Moonrise Kingdom',
    'posterImage': 'img/moonrise-kingdom.jpg',
    'previewImage': 'img/moonrise-kingdom.jpg',
    'backgroundImage': 'img/moonrise-kingdom.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'Moonrise Kingdom. Description',
    'rating': 6.5,
    'scoresCount': 220,
    'director': 'Fyton',
    'starring': [
      'Dayvi'
    ],
    'runTime': 180,
    'genre': 'Fantasy',
    'released': 2015,
    'isFavorite': false
  },
  {
    'id': 6,
    'name': 'Macbeth',
    'posterImage': 'img/macbeth.jpg',
    'previewImage': 'img/macbeth.jpg',
    'backgroundImage': 'img/macbeth.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'Macbeth. Description',
    'rating': 5.5,
    'scoresCount': 120,
    'director': 'Dergon',
    'starring': [
      'Kollin Hurray'
    ],
    'runTime': 110,
    'genre': 'Drama',
    'released': 2007,
    'isFavorite': false
  },
  {
    'id': 7,
    'name': 'Snatch',
    'posterImage': 'img/snatch.jpg',
    'previewImage': 'img/snatch.jpg',
    'backgroundImage': 'img/snatch.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'Snatch. Description',
    'rating': 7.5,
    'scoresCount': 300,
    'director': 'Fertyon',
    'starring': [
      'Johny Depp'
    ],
    'runTime': 170,
    'genre': 'Comedy',
    'released': 2003,
    'isFavorite': false
  },
  {
    'id': 8,
    'name': 'Revenant',
    'posterImage': 'img/revenant.jpg',
    'previewImage': 'img/revenant.jpg',
    'backgroundImage': 'img/revenant.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'previewVideoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'Revenant. Description',
    'rating': 6.6,
    'scoresCount': 200,
    'director': 'Silton',
    'starring': [
      'J Di'
    ],
    'runTime': 165,
    'genre': 'Drama',
    'released': 2001,
    'isFavorite': false
  },
];

export default films;
