const products = [
  {
    id: 1,
    title: 'The Legend of Zelda: Breath of the Wild',
    description: 'Juego de mundo abierto',
    price: 550.0,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mobygames.com%2Fcovers%2F8437192-the-legend-of-zelda-breath-of-the-wild-nintendo-switch-front-cov.jpg&f=1&nofb=1&ipt=d916bba86a784373c79ef46761cc3560ff89805383dfe50cf2043b9ca83c3124',
    platforms: 'Nintendo Switch',
  },
  {
    id: 2,
    title: 'Signalis',
    description: 'Juego de terror y supervivencia',
    price: 400.0,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fsignalis-game-poster_a25ubGWUmZqaraWkpJRmZmpnrWdlaW0.jpg&f=1&nofb=1&ipt=5f50b364939b4bbbcae049b1676bdae1d3ca41c763514e7201ca27c1a352271f',
    platforms: 'PC, PS4, PS5, Xbox One, Xbox Series, Nintendo Switch',
  },
  {
    id: 3,
    title: 'The Legend of Zelda: Tears of the Kingdom',
    description: 'Juego de mundo abierto',
    price: 600.0,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.nintendolife.com%2F880243a8baed2%2Fswitch-tloz-totk-artwork-01.900x.jpg&f=1&nofb=1&ipt=19527423a48742d8cbbd0e60ee0391a6ef2d2746d5f11989c113feaa4bf13545',
    platforms: 'Nintendo Switch, Nintendo Switch 2',
  },
  {
    id: 4,
    title: 'Bayonetta',
    description: 'Juego de acción frenética',
    price: 450.0,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.nintendo.com%2Fimage%2Fupload%2Fc_fill%2Cw_1200%2Fq_auto%3Abest%2Ff_auto%2Fdpr_2.0%2Fncom%2Fsoftware%2Fswitch%2F70010000001109%2F5e8029ad4b352792683f9ea226ce145329cacfee11c72bb94fe7d5a91d7cc7ac&f=1&nofb=1&ipt=36b18c34878e7f1b8e68ef37f4f50f2972135372d2b5e930f77e07766da25000',
    platforms: 'Nintendo Switch, PS3, PS4, Xbox 360, Xbox One, PC',
  },
  {
    id: 5,
    title: 'The Elder Scrolls V: Skyrim',
    description: 'RPG de mundo abierto',
    price: 350.0,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn02.nintendo-europe.com%2Fmedia%2Fimages%2F11_square_images%2Fgames_18%2Fnintendo_switch_5%2FSQ_NSwitch_TheElderScrollsVSkyrim.jpg&f=1&nofb=1&ipt=9aafb6b01366d08e1d613da8a0e1afe30551373921d4292d4fb13c4b739b86fa',
    platforms: 'PC, PS3, PS4, Xbox 360, Xbox One, Nintendo Switch',
  },
  {
    id: 6,
    title: 'Monster Hunter World',
    description: 'Juego de acción y rol',
    price: 500.0,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.saymedia-content.com%2F.image%2Ft_share%2FMTc0MzY1MzIyNjg4NzM0NTY4%2Fhow-to-complete-the-best-kind-of-quest-in-monster-hunter-world.jpg&f=1&nofb=1&ipt=30f16147d579f999a3857f836c01efcd2fc23bbfb9aa5648a56c33279020b20c',
    platforms: 'Nintendo Switch, PC, PS4, PS5, Xbox One, Xbox Series',
  },
  {
    id: 7,
    title: 'Elden Ring',
    description: 'RPG de acción de mundo abierto',
    price: 650.0,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstore-images.s-microsoft.com%2Fimage%2Fapps.26403.13852397496525813.9407e38d-e2bb-465e-a76d-2309ee8fd7a1.01dd497a-eb26-4b08-9ff7-b595eb4c4d43&f=1&nofb=1&ipt=a809548b3dc779d10ad764ed77c32289c9a1614f20bab876bc57033cd970b3d0',
    platforms: 'PC, PS4, PS5, Xbox One, Xbox Series',
  },
  {
    id: 8,
    title: 'Red Dead Redemption 2',
    description: 'Juego de acción y aventura',
    price: 580.0,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wccftech.com%2Fwp-content%2Fuploads%2F2024%2F08%2Fred-dead-redemption-pc-HD-scaled.jpg&f=1&nofb=1&ipt=da1e2dee2930f4eaaf6ed0fa98ac513b4b1ad0a5ac38ebf5215681aeba064a8c',
    platforms: 'PC, PS4, Xbox One',
  },
  {
    id: 9,
    title: 'God of War (2018)',
    description: 'Juego de acción y aventura',
    price: 520.0,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgameranx.com%2Fwp-content%2Fuploads%2F2022%2F01%2FGod-of-War.jpg&f=1&nofb=1&ipt=3787c8ab39fbdd925884c7e3551994d24b5a749d03bb8fabf2b5a517d7642c7f',
    platforms: 'PS4, PS5, PC',
  },
  {
    id: 10,
    title: 'Hollow Knight',
    description: 'Juego de plataformas y acción metroidvania',
    price: 300.0,
    image:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn03.nintendo-europe.com%2Fmedia%2Fimages%2F11_square_images%2Fgames_18%2Fwii_u_download_software_3%2FSQ_WiiUDS_HollowKnight.jpg&f=1&nofb=1&ipt=f0e3e0c3f8f20954c3db643a8bd2944b27971a8def8df6cfc271aa3f5aefcfb1',
    platforms: 'PC, PS4, Xbox One, Nintendo Switch',
  },
];

export default products;
