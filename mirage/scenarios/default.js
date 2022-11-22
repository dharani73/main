export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  // server.createList('post', 10);

  server.create('post', {
    title: 'Fresh Vegetables',
    homedelivery: 'Available',
    location: 'hyderabad',
    rating: '5 star',
    stock: 'Available',

    image: 'https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg',
  });

  server.create('post', {
    title: 'Fresh Fruits',
    homedelivery: 'Available',
    location: 'hyderabad',
    rating: '5 star',
    stock: 'Available',

    image:
      'https://media.istockphoto.com/photos/assortment-of-colorful-ripe-tropical-fruits-top-view-picture-id995518546?k=20&m=995518546&s=612x612&w=0&h=yPdMHr-CL9JD8eLnyBr2_hFpx6l3jUBU9UEwwdnNfAU=',
  });

  server.create('post', {
    title: 'Cereals',
    homedelivery: 'Available',
    location: 'hyderabad',
    rating: '5 star',
    stock: 'Available',

    image:
      'https://media.istockphoto.com/photos/set-of-different-cereals-with-milk-on-a-white-background-picture-id1064268580?k=20&m=1064268580&s=612x612&w=0&h=didQN0_50lsR08tJRgQfq9YCXALfVzSNPxza557HO7Q=',
  });
}
