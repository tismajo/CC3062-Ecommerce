const products = [
  {
    id: 1,
    title: 'The Legend of Zelda: Breath of the Wild',
    description: 'Juego de mundo abierto',
    price: 484.0,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mobygames.com%2Fcovers%2F8437192-the-legend-of-zelda-breath-of-the-wild-nintendo-switch-front-cov.jpg&f=1&nofb=1&ipt=d916bba86a784373c79ef46761cc3560ff89805383dfe50cf2043b9ca83c3124',
    platforms: 'Nintendo Switch',
    synopsis:
      'En un vasto mundo de Hyrule, los jugadores asumen el papel de Link, quien despierta tras un sueño de 100 años. Debe explorar el reino, resolver acertijos y enfrentarse a enemigos mientras busca recuperar su memoria y derrotar a Calamity Ganon. La libertad de exploración y la interacción con el entorno son clave en esta aventura épica.',
    year: '2017',

  },
  {
    id: 2,
    title: 'Signalis',
    description: 'Juego de terror y supervivencia',
    price: 400.0,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fsignalis-game-poster_a25ubGWUmZqaraWkpJRmZmpnrWdlaW0.jpg&f=1&nofb=1&ipt=5f50b364939b4bbbcae049b1676bdae1d3ca41c763514e7201ca27c1a352271f',
    platforms: 'PC, PS4, PS5, Xbox One, Xbox Series, Nintendo Switch',
    synopsis:
      'En un mundo de ciencia ficción, los jugadores controlan a Elster, una agente que busca a su compañera perdida en un entorno lleno de horrores y misterios. Con una atmósfera inquietante y mecánicas de juego que combinan la exploración y la resolución de acertijos, Signalis ofrece una experiencia de terror psicológico única.',
    year: '2022',
  },
  {
    id: 3,
    title: 'The Legend of Zelda: Tears of the Kingdom',
    description: 'Juego de mundo abierto',
    price: 590.0,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.nintendolife.com%2F880243a8baed2%2Fswitch-tloz-totk-artwork-01.900x.jpg&f=1&nofb=1&ipt=19527423a48742d8cbbd0e60ee0391a6ef2d2746d5f11989c113feaa4bf13545',
    platforms: 'Nintendo Switch, Nintendo Switch 2',
    synopsis:
      'Continuando la historia de Breath of the Wild, Tears of the Kingdom lleva a los jugadores a nuevas alturas en Hyrule, donde deben descubrir secretos antiguos y enfrentarse a nuevos enemigos. La narrativa se centra en la lucha por la supervivencia y la restauración del reino, con un enfoque en la exploración vertical y la construcción de estructuras.',
    year: '2023',
  },
  {
    id: 4,
    title: 'Bayonetta',
    description: 'Juego de acción frenética',
    price: 525.0,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.nintendo.com%2Fimage%2Fupload%2Fc_fill%2Cw_1200%2Fq_auto%3Abest%2Ff_auto%2Fdpr_2.0%2Fncom%2Fsoftware%2Fswitch%2F70010000001109%2F5e8029ad4b352792683f9ea226ce145329cacfee11c72bb94fe7d5a91d7cc7ac&f=1&nofb=1&ipt=36b18c34878e7f1b8e68ef37f4f50f2972135372d2b5e930f77e07766da25000',
    platforms: 'Nintendo Switch, PS3, PS4, Xbox 360, Xbox One, PC',
    synopsis:
      'Los jugadores controlan a Bayonetta, una bruja con habilidades sobrenaturales, mientras lucha contra ángeles y demonios en un mundo lleno de acción y estilo. Con un sistema de combate fluido y combos espectaculares, el juego destaca por su narrativa intrigante y su estética visual impactante.',
    year: '2009',
    likes: 0,
  },
  {
    id: 5,
    title: 'The Elder Scrolls V: Skyrim',
    description: 'RPG de mundo abierto',
    price: 639.0,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn02.nintendo-europe.com%2Fmedia%2Fimages%2F11_square_images%2Fgames_18%2Fnintendo_switch_5%2FSQ_NSwitch_TheElderScrollsVSkyrim.jpg&f=1&nofb=1&ipt=9aafb6b01366d08e1d613da8a0e1afe30551373921d4292d4fb13c4b739b86fa',
    platforms: 'PC, PS3, PS4, Xbox 360, Xbox One, Nintendo Switch',
    synopsis:
      'En el vasto mundo de Skyrim, los jugadores asumen el papel de un guerrero con la capacidad de usar el poder de los dragones. La historia se desarrolla en un entorno rico en lore, donde los jugadores pueden elegir su camino, completar misiones y explorar un mundo lleno de criaturas y magia.',
    year: '2011',
    likes: 0,
  },
  {
    id: 6,
    title: 'Monster Hunter World',
    description: 'Juego de acción y rol',
    price: 399.0,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.saymedia-content.com%2F.image%2Ft_share%2FMTc0MzY1MzIyNjg4NzM0NTY4%2Fhow-to-complete-the-best-kind-of-quest-in-monster-hunter-world.jpg&f=1&nofb=1&ipt=30f16147d579f999a3857f836c01efcd2fc23bbfb9aa5648a56c33279020b20c',
    platforms: 'Nintendo Switch, PC, PS4, PS5, Xbox One, Xbox Series',
    synopsis:
      'Los jugadores se convierten en cazadores que deben rastrear y capturar o eliminar enormes criaturas en un mundo vibrante y lleno de vida. Con un enfoque en la cooperación multijugador, Monster Hunter World ofrece una experiencia de caza emocionante y estratégica, donde cada misión presenta nuevos desafíos.',
    year: '2018',
  },
  {
    id: 7,
    title: 'Travellers Rest',
    description: 'Simulación de gestión de taberna',
    price: 380.0,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.epicgames.com%2Fspt-assets%2Fe3184f114896428397f9e616ca463a9c%2Ftravellers-rest-offer-1cztm.png&f=1&nofb=1&ipt=261098f717aaea170c563c939ef7f9b852412fae58ec20516e1bb65e40d01beb',
    platforms: 'PC',
    synopsis:
      'En este juego, los jugadores gestionan su propia taberna, donde deben atender a los clientes, preparar comidas y bebidas, y mejorar su establecimiento. La combinación de simulación y gestión ofrece una experiencia relajante y entretenida, ideal para los amantes de la estrategia.',
    year: '2022',
  },
  {
    id: 8,
    title: 'Starbound',
    description: 'Aventura de mundo abierto en 2D',
    price: 320.0,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.mguwp.net%2Fstore%2Fstarbound%2Fs1.png&f=1&nofb=1&ipt=becc4eebf6bea8857b24cd3dd6dcccad679b24df3557c29472ecee6d3168b3b0',
    platforms: 'PC, PS4, Xbox One, Nintendo Switch',
    synopsis:
      'Los jugadores exploran un universo infinito, construyendo y personalizando su propio hogar tras la destrucción de la tierra en diferentes planetas. Con un enfoque en la exploración y la creatividad, Starbound permite a los jugadores interactuar con diversas razas alienígenas y participar en misiones emocionantes.',
    year: '2016',
  },
  {
    id: 9,
    title: 'Stardew Valley',
    description: 'Simulación de granja y vida social',
    price: 439.0,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pushsquare.com%2Ff6b5a9a5050bd%2Fstardew-valley-1-5-ps4.original.jpg&f=1&nofb=1&ipt=2ca0f2584e470edd950bc58cbfe2ba3bd3743828996f020648a19412f7b9d333',
    platforms: 'PC, PS4, Xbox One, Nintendo Switch, PS Vita, iOS, Android',
    synopsis:
      'Los jugadores heredan una granja en ruinas y deben restaurarla mientras interactúan con los habitantes del pueblo. Stardew Valley combina la agricultura, la minería y la construcción de relaciones en un entorno encantador y relajante, ofreciendo una experiencia de juego adictiva.',
    year: '2016',
  },
  {
    id: 10,
    title: 'Blasphemous',
    description: 'Acción y plataformas con temática oscura',
    price: 325.0,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.epicgames.com%2Foffer%2Feddb735dde6b47cda8193f2643cff886%2FEGS_Blasphemous_TheGameKitchen_S6_1200x1600-37265bbc691109595a2ff9b0c21ba8c7&f=1&nofb=1&ipt=752f896581d3fa406ed1ded4ddd36e692a5358bf0cc87ec50765db22d94753ee',
    platforms: 'PC, PS4, Xbox One, Nintendo Switch',
    synopsis:
      'En un mundo de pesadilla lleno de religión y horror, los jugadores controlan a El Penitente, un guerrero en busca de redención. Con un estilo artístico impresionante y un combate desafiante, Blasphemous ofrece una narrativa profunda y un ambiente inquietante que atrapa a los jugadores.',
    year: '2019',
  },
];
export default products;
