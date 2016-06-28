angular.module('family').
  service('familyStorage', ['$localForage', function($localForage){
    var famillies = [
      {
        "id": 1,
        "scientificName": "Acanthisittidae",
        "commonName": "New Zealand Wrens",
        "orderId": 24
      },
      {
        "id": 2,
        "scientificName": "Acanthizidae",
        "commonName": "Thornbills and Allies",
        "orderId": 24
      },
      {
        "id": 3,
        "scientificName": "Accipitridae",
        "commonName": "Hawks, Eagles, and Kites",
        "orderId": 1
      },
      {
        "id": 4,
        "scientificName": "Acrocephalidae",
        "commonName": "Reed-Warblers and Allies",
        "orderId": 24
      },
      {
        "id": 5,
        "scientificName": "Aegithalidae",
        "commonName": "Long-tailed Tits",
        "orderId": 24
      },
      {
        "id": 6,
        "scientificName": "Aegithinidae",
        "commonName": "Ioras",
        "orderId": 24
      },
      {
        "id": 7,
        "scientificName": "Aegothelidae",
        "commonName": "Owlet-nightjars",
        "orderId": 6
      },
      {
        "id": 8,
        "scientificName": "Alaudidae",
        "commonName": "Larks",
        "orderId": 24
      },
      {
        "id": 9,
        "scientificName": "Alcedinidae",
        "commonName": "Kingfishers",
        "orderId": 13
      },
      {
        "id": 10,
        "scientificName": "Alcidae",
        "commonName": "Auks, Murres, and Puffins",
        "orderId": 9
      },
      {
        "id": 11,
        "scientificName": "Anatidae",
        "commonName": "Ducks, Geese, and Waterfowl",
        "orderId": 2
      },
      {
        "id": 12,
        "scientificName": "Anhimidae",
        "commonName": "Screamers",
        "orderId": 2
      },
      {
        "id": 13,
        "scientificName": "Anhingidae",
        "commonName": "Anhingas",
        "orderId": 37
      },
      {
        "id": 14,
        "scientificName": "Anseranatidae",
        "commonName": "Magpie Goose",
        "orderId": 2
      },
      {
        "id": 15,
        "scientificName": "Apodidae",
        "commonName": "Swifts",
        "orderId": 3
      },
      {
        "id": 16,
        "scientificName": "Apterygidae",
        "commonName": "Kiwis",
        "orderId": 4
      },
      {
        "id": 17,
        "scientificName": "Aramidae",
        "commonName": "Limpkin",
        "orderId": 20
      },
      {
        "id": 18,
        "scientificName": "Ardeidae",
        "commonName": "Herons, Egrets, and Bitterns",
        "orderId": 25
      },
      {
        "id": 19,
        "scientificName": "Artamidae",
        "commonName": "Woodswallows",
        "orderId": 24
      },
      {
        "id": 20,
        "scientificName": "Atrichornithidae",
        "commonName": "Scrub-birds",
        "orderId": 24
      },
      {
        "id": 21,
        "scientificName": "Balaenicipitidae",
        "commonName": "Shoebill",
        "orderId": 25
      },
      {
        "id": 22,
        "scientificName": "Bernieridae",
        "commonName": "Malagasy Warblers",
        "orderId": 24
      },
      {
        "id": 23,
        "scientificName": "Bombycillidae",
        "commonName": "Waxwings",
        "orderId": 24
      },
      {
        "id": 24,
        "scientificName": "Brachypteraciidae",
        "commonName": "Ground-Rollers",
        "orderId": 13
      },
      {
        "id": 25,
        "scientificName": "Bucconidae",
        "commonName": "Puffbirds",
        "orderId": 17
      },
      {
        "id": 26,
        "scientificName": "Bucerotidae",
        "commonName": "Hornbills",
        "orderId": 5
      },
      {
        "id": 27,
        "scientificName": "Bucorvidae",
        "commonName": "Ground-Hornbills",
        "orderId": 5
      },
      {
        "id": 28,
        "scientificName": "Buphagidae",
        "commonName": "Oxpeckers",
        "orderId": 24
      },
      {
        "id": 29,
        "scientificName": "Burhinidae",
        "commonName": "Thick-knees",
        "orderId": 9
      },
      {
        "id": 30,
        "scientificName": "Cacatuidae",
        "commonName": "Cockatoos",
        "orderId": 31
      },
      {
        "id": 31,
        "scientificName": "Calcariidae",
        "commonName": "Longspurs and Snow Buntings",
        "orderId": 24
      },
      {
        "id": 32,
        "scientificName": "Callaeidae",
        "commonName": "Wattlebirds",
        "orderId": 24
      },
      {
        "id": 33,
        "scientificName": "Calyptomenidae",
        "commonName": "African and Green Broadbills",
        "orderId": 24
      },
      {
        "id": 34,
        "scientificName": "Campephagidae",
        "commonName": "Cuckooshrikes",
        "orderId": 24
      },
      {
        "id": 35,
        "scientificName": "Capitonidae",
        "commonName": "New World Barbets",
        "orderId": 28
      },
      {
        "id": 36,
        "scientificName": "Caprimulgidae",
        "commonName": "Nightjars and Allies",
        "orderId": 6
      },
      {
        "id": 37,
        "scientificName": "Cardinalidae",
        "commonName": "Cardinals and Allies",
        "orderId": 24
      },
      {
        "id": 38,
        "scientificName": "Cariamidae",
        "commonName": "Seriemas",
        "orderId": 7
      },
      {
        "id": 39,
        "scientificName": "Casuariidae",
        "commonName": "Cassowaries",
        "orderId": 8
      },
      {
        "id": 40,
        "scientificName": "Cathartidae",
        "commonName": "New World Vultures",
        "orderId": 1
      },
      {
        "id": 41,
        "scientificName": "Certhiidae",
        "commonName": "Treecreepers",
        "orderId": 24
      },
      {
        "id": 42,
        "scientificName": "Cettiidae",
        "commonName": "Bush-Warblers and Allies",
        "orderId": 24
      },
      {
        "id": 43,
        "scientificName": "Chaetopidae",
        "commonName": "Rockjumpers",
        "orderId": 24
      },
      {
        "id": 44,
        "scientificName": "Charadriidae",
        "commonName": "Plovers and Lapwings",
        "orderId": 9
      },
      {
        "id": 45,
        "scientificName": "Chionidae",
        "commonName": "Sheathbills",
        "orderId": 9
      },
      {
        "id": 46,
        "scientificName": "Chloropseidae",
        "commonName": "Leafbirds",
        "orderId": 24
      },
      {
        "id": 47,
        "scientificName": "Ciconiidae",
        "commonName": "Storks",
        "orderId": 10
      },
      {
        "id": 48,
        "scientificName": "Cinclidae",
        "commonName": "Dippers",
        "orderId": 24
      },
      {
        "id": 49,
        "scientificName": "Cinclosomatidae",
        "commonName": "Quail-thrushes and Jewel-babblers",
        "orderId": 24
      },
      {
        "id": 50,
        "scientificName": "Cisticolidae",
        "commonName": "Cisticolas and Allies",
        "orderId": 24
      },
      {
        "id": 51,
        "scientificName": "Climacteridae",
        "commonName": "Australasian Treecreepers",
        "orderId": 24
      },
      {
        "id": 52,
        "scientificName": "Cnemophilidae",
        "commonName": "Satinbirds",
        "orderId": 24
      },
      {
        "id": 53,
        "scientificName": "Coliidae",
        "commonName": "Mousebirds",
        "orderId": 11
      },
      {
        "id": 54,
        "scientificName": "Columbidae",
        "commonName": "Pigeons and Doves",
        "orderId": 12
      },
      {
        "id": 55,
        "scientificName": "Conopophagidae",
        "commonName": "Gnateaters",
        "orderId": 24
      },
      {
        "id": 56,
        "scientificName": "Coraciidae",
        "commonName": "Rollers",
        "orderId": 13
      },
      {
        "id": 57,
        "scientificName": "Corcoracidae",
        "commonName": "White-winged Chough and Apostlebird",
        "orderId": 24
      },
      {
        "id": 58,
        "scientificName": "Corvidae",
        "commonName": "Crows, Jays, and Magpies",
        "orderId": 24
      },
      {
        "id": 59,
        "scientificName": "Cotingidae",
        "commonName": "Cotingas",
        "orderId": 24
      },
      {
        "id": 60,
        "scientificName": "Cracidae",
        "commonName": "Guans, Chachalacas, and Curassows",
        "orderId": 18
      },
      {
        "id": 61,
        "scientificName": "Cracticidae",
        "commonName": "Bellmagpies and Allies",
        "orderId": 24
      },
      {
        "id": 62,
        "scientificName": "Cuculidae",
        "commonName": "Cuckoos",
        "orderId": 14
      },
      {
        "id": 63,
        "scientificName": "Dasyornithidae",
        "commonName": "Bristlebirds",
        "orderId": 24
      },
      {
        "id": 64,
        "scientificName": "Dicaeidae",
        "commonName": "Flowerpeckers",
        "orderId": 24
      },
      {
        "id": 65,
        "scientificName": "Dicruridae",
        "commonName": "Drongos",
        "orderId": 24
      },
      {
        "id": 66,
        "scientificName": "Diomedeidae",
        "commonName": "Albatrosses",
        "orderId": 30
      },
      {
        "id": 67,
        "scientificName": "Donacobiidae",
        "commonName": "Donacobius",
        "orderId": 24
      },
      {
        "id": 68,
        "scientificName": "Dromadidae",
        "commonName": "Crab Plover",
        "orderId": 9
      },
      {
        "id": 69,
        "scientificName": "Dromaiidae",
        "commonName": "Emu",
        "orderId": 8
      },
      {
        "id": 70,
        "scientificName": "Dulidae",
        "commonName": "Palmchat",
        "orderId": 24
      },
      {
        "id": 71,
        "scientificName": "Elachuridae",
        "commonName": "Spotted Elachura",
        "orderId": 24
      },
      {
        "id": 72,
        "scientificName": "Emberizidae",
        "commonName": "Buntings and New World Sparrows",
        "orderId": 24
      },
      {
        "id": 73,
        "scientificName": "Estrildidae",
        "commonName": "Waxbills and Allies",
        "orderId": 24
      },
      {
        "id": 74,
        "scientificName": "Eupetidae",
        "commonName": "Rail-babbler",
        "orderId": 24
      },
      {
        "id": 75,
        "scientificName": "Eurylaimidae",
        "commonName": "Asian and Grauer's Broadbills",
        "orderId": 24
      },
      {
        "id": 76,
        "scientificName": "Eurypygidae",
        "commonName": "Sunbittern",
        "orderId": 15
      },
      {
        "id": 77,
        "scientificName": "Falconidae",
        "commonName": "Falcons and Caracaras",
        "orderId": 16
      },
      {
        "id": 78,
        "scientificName": "Formicariidae",
        "commonName": "Antthrushes",
        "orderId": 24
      },
      {
        "id": 79,
        "scientificName": "Fregatidae",
        "commonName": "Frigatebirds",
        "orderId": 37
      },
      {
        "id": 80,
        "scientificName": "Fringillidae",
        "commonName": "Finches, Euphonias, and Allies",
        "orderId": 24
      },
      {
        "id": 81,
        "scientificName": "Furnariidae",
        "commonName": "Ovenbirds and Woodcreepers",
        "orderId": 24
      },
      {
        "id": 82,
        "scientificName": "Galbulidae",
        "commonName": "Jacamars",
        "orderId": 17
      },
      {
        "id": 83,
        "scientificName": "Gaviidae",
        "commonName": "Loons",
        "orderId": 19
      },
      {
        "id": 84,
        "scientificName": "Glareolidae",
        "commonName": "Pratincoles and Coursers",
        "orderId": 9
      },
      {
        "id": 85,
        "scientificName": "Grallariidae",
        "commonName": "Antpittas",
        "orderId": 24
      },
      {
        "id": 86,
        "scientificName": "Gruidae",
        "commonName": "Cranes",
        "orderId": 20
      },
      {
        "id": 87,
        "scientificName": "Haematopodidae",
        "commonName": "Oystercatchers",
        "orderId": 9
      },
      {
        "id": 88,
        "scientificName": "Heliornithidae",
        "commonName": "Finfoots",
        "orderId": 20
      },
      {
        "id": 89,
        "scientificName": "Hemiprocnidae",
        "commonName": "Treeswifts",
        "orderId": 3
      },
      {
        "id": 90,
        "scientificName": "Hirundinidae",
        "commonName": "Swallows",
        "orderId": 24
      },
      {
        "id": 91,
        "scientificName": "Hydrobatidae",
        "commonName": "Storm-Petrels",
        "orderId": 30
      },
      {
        "id": 92,
        "scientificName": "Hyliotidae",
        "commonName": "Hyliotas",
        "orderId": 24
      },
      {
        "id": 93,
        "scientificName": "Hylocitreidae",
        "commonName": "Hylocitrea",
        "orderId": 24
      },
      {
        "id": 94,
        "scientificName": "Hypocoliidae",
        "commonName": "Hypocolius",
        "orderId": 24
      },
      {
        "id": 95,
        "scientificName": "Ibidorhynchidae",
        "commonName": "Ibisbill",
        "orderId": 9
      },
      {
        "id": 96,
        "scientificName": "Icteridae",
        "commonName": "Troupials and Allies",
        "orderId": 24
      },
      {
        "id": 97,
        "scientificName": "Indicatoridae",
        "commonName": "Honeyguides",
        "orderId": 28
      },
      {
        "id": 98,
        "scientificName": "Irenidae",
        "commonName": "Fairy-bluebirds",
        "orderId": 24
      },
      {
        "id": 99,
        "scientificName": "Jacanidae",
        "commonName": "Jacanas",
        "orderId": 9
      },
      {
        "id": 100,
        "scientificName": "Laniidae",
        "commonName": "Shrikes",
        "orderId": 24
      },
      {
        "id": 101,
        "scientificName": "Laridae",
        "commonName": "Gulls, Terns, and Skimmers",
        "orderId": 9
      },
      {
        "id": 102,
        "scientificName": "Leiothrichidae",
        "commonName": "Laughingthrushes and Allies",
        "orderId": 24
      },
      {
        "id": 103,
        "scientificName": "Leptosomidae",
        "commonName": "Cuckoo-Roller",
        "orderId": 21
      },
      {
        "id": 104,
        "scientificName": "Locustellidae",
        "commonName": "Grassbirds and Allies",
        "orderId": 24
      },
      {
        "id": 105,
        "scientificName": "Lybiidae",
        "commonName": "African Barbets",
        "orderId": 28
      },
      {
        "id": 106,
        "scientificName": "Machaerirhynchidae",
        "commonName": "Boatbills",
        "orderId": 24
      },
      {
        "id": 107,
        "scientificName": "Macrosphenidae",
        "commonName": "African Warblers",
        "orderId": 24
      },
      {
        "id": 108,
        "scientificName": "Malaconotidae",
        "commonName": "Bushshrikes and Allies",
        "orderId": 24
      },
      {
        "id": 109,
        "scientificName": "Maluridae",
        "commonName": "Fairywrens",
        "orderId": 24
      },
      {
        "id": 110,
        "scientificName": "Megalaimidae",
        "commonName": "Asian Barbets",
        "orderId": 28
      },
      {
        "id": 111,
        "scientificName": "Megapodiidae",
        "commonName": "Megapodes",
        "orderId": 18
      },
      {
        "id": 112,
        "scientificName": "Melanocharitidae",
        "commonName": "Berrypeckers and Longbills",
        "orderId": 24
      },
      {
        "id": 113,
        "scientificName": "Melanopareiidae",
        "commonName": "Crescentchests",
        "orderId": 24
      },
      {
        "id": 114,
        "scientificName": "Meliphagidae",
        "commonName": "Honeyeaters",
        "orderId": 24
      },
      {
        "id": 115,
        "scientificName": "Menuridae",
        "commonName": "Lyrebirds",
        "orderId": 24
      },
      {
        "id": 116,
        "scientificName": "Meropidae",
        "commonName": "Bee-eaters",
        "orderId": 13
      },
      {
        "id": 117,
        "scientificName": "Mesitornithidae",
        "commonName": "Mesites",
        "orderId": 22
      },
      {
        "id": 118,
        "scientificName": "Mimidae",
        "commonName": "Mockingbirds and Thrashers",
        "orderId": 24
      },
      {
        "id": 119,
        "scientificName": "Mohouidae",
        "commonName": "Whiteheads",
        "orderId": 24
      },
      {
        "id": 120,
        "scientificName": "Momotidae",
        "commonName": "Motmots",
        "orderId": 13
      },
      {
        "id": 121,
        "scientificName": "Monarchidae",
        "commonName": "Monarch Flycatchers",
        "orderId": 24
      },
      {
        "id": 122,
        "scientificName": "Motacillidae",
        "commonName": "Wagtails and Pipits",
        "orderId": 24
      },
      {
        "id": 123,
        "scientificName": "Muscicapidae",
        "commonName": "Old World Flycatchers",
        "orderId": 24
      },
      {
        "id": 124,
        "scientificName": "Musophagidae",
        "commonName": "Turacos",
        "orderId": 14
      },
      {
        "id": 125,
        "scientificName": "Nectariniidae",
        "commonName": "Sunbirds and Spiderhunters",
        "orderId": 24
      },
      {
        "id": 126,
        "scientificName": "Neosittidae",
        "commonName": "Sittellas",
        "orderId": 24
      },
      {
        "id": 127,
        "scientificName": "Nicatoridae",
        "commonName": "Nicators",
        "orderId": 24
      },
      {
        "id": 128,
        "scientificName": "Notiomystidae",
        "commonName": "Stitchbird",
        "orderId": 24
      },
      {
        "id": 129,
        "scientificName": "Numididae",
        "commonName": "Guineafowl",
        "orderId": 18
      },
      {
        "id": 130,
        "scientificName": "Nyctibiidae",
        "commonName": "Potoos",
        "orderId": 6
      },
      {
        "id": 131,
        "scientificName": "Odontophoridae",
        "commonName": "New World Quail",
        "orderId": 18
      },
      {
        "id": 132,
        "scientificName": "Opisthocomidae",
        "commonName": "Hoatzin",
        "orderId": 14
      },
      {
        "id": 133,
        "scientificName": "Oreoicidae",
        "commonName": "Australo-Papuan Bellbirds",
        "orderId": 24
      },
      {
        "id": 134,
        "scientificName": "Oriolidae",
        "commonName": "Old World Orioles",
        "orderId": 24
      },
      {
        "id": 135,
        "scientificName": "Orthonychidae",
        "commonName": "Logrunners",
        "orderId": 24
      },
      {
        "id": 136,
        "scientificName": "Otididae",
        "commonName": "Bustards",
        "orderId": 23
      },
      {
        "id": 137,
        "scientificName": "Oxyruncidae",
        "commonName": "Sharpbill",
        "orderId": 24
      },
      {
        "id": 138,
        "scientificName": "Pachycephalidae",
        "commonName": "Whistlers and Allies",
        "orderId": 24
      },
      {
        "id": 139,
        "scientificName": "Pandionidae",
        "commonName": "Osprey",
        "orderId": 1
      },
      {
        "id": 140,
        "scientificName": "Panuridae",
        "commonName": "Bearded Reedling",
        "orderId": 24
      },
      {
        "id": 141,
        "scientificName": "Paradisaeidae",
        "commonName": "Birds-of-Paradise",
        "orderId": 24
      },
      {
        "id": 142,
        "scientificName": "Paradoxornithidae",
        "commonName": "Parrotbills, Wrentit, and Allies",
        "orderId": 24
      },
      {
        "id": 143,
        "scientificName": "Paramythiidae",
        "commonName": "Tit Berrypecker and Crested Berrypecker",
        "orderId": 24
      },
      {
        "id": 144,
        "scientificName": "Pardalotidae",
        "commonName": "Pardalotes",
        "orderId": 24
      },
      {
        "id": 145,
        "scientificName": "Paridae",
        "commonName": "Tits, Chickadees, and Titmice",
        "orderId": 24
      },
      {
        "id": 146,
        "scientificName": "Parulidae",
        "commonName": "New World Warblers",
        "orderId": 24
      },
      {
        "id": 147,
        "scientificName": "Passeridae",
        "commonName": "Old World Sparrows",
        "orderId": 24
      },
      {
        "id": 148,
        "scientificName": "Pedionomidae",
        "commonName": "Plains-wanderer",
        "orderId": 9
      },
      {
        "id": 149,
        "scientificName": "Pelecanidae",
        "commonName": "Pelicans",
        "orderId": 25
      },
      {
        "id": 150,
        "scientificName": "Pelecanoididae",
        "commonName": "Diving-Petrels",
        "orderId": 30
      },
      {
        "id": 151,
        "scientificName": "Pellorneidae",
        "commonName": "Ground Babblers and Allies",
        "orderId": 24
      },
      {
        "id": 152,
        "scientificName": "Petroicidae",
        "commonName": "Australasian Robins",
        "orderId": 24
      },
      {
        "id": 153,
        "scientificName": "Peucedramidae",
        "commonName": "Olive Warbler",
        "orderId": 24
      },
      {
        "id": 154,
        "scientificName": "Phaethontidae",
        "commonName": "Tropicbirds",
        "orderId": 26
      },
      {
        "id": 155,
        "scientificName": "Phalacrocoracidae",
        "commonName": "Cormorants and Shags",
        "orderId": 37
      },
      {
        "id": 156,
        "scientificName": "Phasianidae",
        "commonName": "Pheasants, Grouse, and Allies",
        "orderId": 18
      },
      {
        "id": 157,
        "scientificName": "Philepittidae",
        "commonName": "Asities",
        "orderId": 24
      },
      {
        "id": 158,
        "scientificName": "Phoenicopteridae",
        "commonName": "Flamingos",
        "orderId": 27
      },
      {
        "id": 159,
        "scientificName": "Phoeniculidae",
        "commonName": "Woodhoopoes and Scimitar-bills",
        "orderId": 5
      },
      {
        "id": 160,
        "scientificName": "Phylloscopidae",
        "commonName": "Leaf Warblers",
        "orderId": 24
      },
      {
        "id": 161,
        "scientificName": "Picathartidae",
        "commonName": "Rockfowl",
        "orderId": 24
      },
      {
        "id": 162,
        "scientificName": "Picidae",
        "commonName": "Woodpeckers",
        "orderId": 28
      },
      {
        "id": 163,
        "scientificName": "Pipridae",
        "commonName": "Manakins",
        "orderId": 24
      },
      {
        "id": 164,
        "scientificName": "Pittidae",
        "commonName": "Pittas",
        "orderId": 24
      },
      {
        "id": 165,
        "scientificName": "Pityriaseidae",
        "commonName": "Bristlehead",
        "orderId": 24
      },
      {
        "id": 166,
        "scientificName": "Platysteiridae",
        "commonName": "Wattle-eyes and Batises",
        "orderId": 24
      },
      {
        "id": 167,
        "scientificName": "Ploceidae",
        "commonName": "Weavers and Allies",
        "orderId": 24
      },
      {
        "id": 168,
        "scientificName": "Pluvianellidae",
        "commonName": "Magellanic Plover",
        "orderId": 9
      },
      {
        "id": 169,
        "scientificName": "Pluvianidae",
        "commonName": "Egyptian Plover",
        "orderId": 9
      },
      {
        "id": 170,
        "scientificName": "Pnoepygidae",
        "commonName": "Cupwings",
        "orderId": 24
      },
      {
        "id": 171,
        "scientificName": "Podargidae",
        "commonName": "Frogmouths",
        "orderId": 6
      },
      {
        "id": 172,
        "scientificName": "Podicipedidae",
        "commonName": "Grebes",
        "orderId": 29
      },
      {
        "id": 173,
        "scientificName": "Polioptilidae",
        "commonName": "Gnatcatchers",
        "orderId": 24
      },
      {
        "id": 174,
        "scientificName": "Pomatostomidae",
        "commonName": "Pseudo-Babblers",
        "orderId": 24
      },
      {
        "id": 175,
        "scientificName": "Procellariidae",
        "commonName": "Shearwaters and Petrels",
        "orderId": 30
      },
      {
        "id": 176,
        "scientificName": "Promeropidae",
        "commonName": "Sugarbirds",
        "orderId": 24
      },
      {
        "id": 177,
        "scientificName": "Prunellidae",
        "commonName": "Accentors",
        "orderId": 24
      },
      {
        "id": 178,
        "scientificName": "Psittacidae",
        "commonName": "New World and African Parrots",
        "orderId": 31
      },
      {
        "id": 179,
        "scientificName": "Psittaculidae",
        "commonName": "Old World Parrots",
        "orderId": 31
      },
      {
        "id": 180,
        "scientificName": "Psophiidae",
        "commonName": "Trumpeters",
        "orderId": 20
      },
      {
        "id": 181,
        "scientificName": "Psophodidae",
        "commonName": "Whipbirds and Wedgebills",
        "orderId": 24
      },
      {
        "id": 182,
        "scientificName": "Pteroclidae",
        "commonName": "Sandgrouse",
        "orderId": 32
      },
      {
        "id": 183,
        "scientificName": "Ptiliogonatidae",
        "commonName": "Silky-flycatchers",
        "orderId": 24
      },
      {
        "id": 184,
        "scientificName": "Ptilonorhynchidae",
        "commonName": "Bowerbirds",
        "orderId": 24
      },
      {
        "id": 185,
        "scientificName": "Pycnonotidae",
        "commonName": "Bulbuls",
        "orderId": 24
      },
      {
        "id": 186,
        "scientificName": "Rallidae",
        "commonName": "Rails, Gallinules, and Coots",
        "orderId": 20
      },
      {
        "id": 187,
        "scientificName": "Ramphastidae",
        "commonName": "Toucans",
        "orderId": 28
      },
      {
        "id": 188,
        "scientificName": "Recurvirostridae",
        "commonName": "Stilts and Avocets",
        "orderId": 9
      },
      {
        "id": 189,
        "scientificName": "Regulidae",
        "commonName": "Kinglets",
        "orderId": 24
      },
      {
        "id": 190,
        "scientificName": "Remizidae",
        "commonName": "Penduline-Tits",
        "orderId": 24
      },
      {
        "id": 191,
        "scientificName": "Rheidae",
        "commonName": "Rheas",
        "orderId": 33
      },
      {
        "id": 192,
        "scientificName": "Rhinocryptidae",
        "commonName": "Tapaculos",
        "orderId": 24
      },
      {
        "id": 193,
        "scientificName": "Rhipiduridae",
        "commonName": "Fantails",
        "orderId": 24
      },
      {
        "id": 194,
        "scientificName": "Rhynochetidae",
        "commonName": "Kagu",
        "orderId": 15
      },
      {
        "id": 195,
        "scientificName": "Rostratulidae",
        "commonName": "Painted-Snipes",
        "orderId": 9
      },
      {
        "id": 196,
        "scientificName": "Sagittariidae",
        "commonName": "Secretary-bird",
        "orderId": 1
      },
      {
        "id": 197,
        "scientificName": "Sapayoidae",
        "commonName": "Sapayoa",
        "orderId": 24
      },
      {
        "id": 198,
        "scientificName": "Sarothruridae",
        "commonName": "Flufftails",
        "orderId": 20
      },
      {
        "id": 199,
        "scientificName": "Scolopacidae",
        "commonName": "Sandpipers and Allies",
        "orderId": 9
      },
      {
        "id": 200,
        "scientificName": "Scopidae",
        "commonName": "Hamerkop",
        "orderId": 25
      },
      {
        "id": 201,
        "scientificName": "Semnornithidae",
        "commonName": "Toucan-Barbets",
        "orderId": 28
      },
      {
        "id": 202,
        "scientificName": "Sittidae",
        "commonName": "Nuthatches",
        "orderId": 24
      },
      {
        "id": 203,
        "scientificName": "Spheniscidae",
        "commonName": "Penguins",
        "orderId": 34
      },
      {
        "id": 204,
        "scientificName": "Steatornithidae",
        "commonName": "Oilbird",
        "orderId": 6
      },
      {
        "id": 205,
        "scientificName": "Stenostiridae",
        "commonName": "Fairy Flycatchers",
        "orderId": 24
      },
      {
        "id": 206,
        "scientificName": "Stercorariidae",
        "commonName": "Skuas and Jaegers",
        "orderId": 9
      },
      {
        "id": 207,
        "scientificName": "Strigidae",
        "commonName": "Owls",
        "orderId": 35
      },
      {
        "id": 208,
        "scientificName": "Strigopidae",
        "commonName": "New Zealand Parrots",
        "orderId": 31
      },
      {
        "id": 209,
        "scientificName": "Struthionidae",
        "commonName": "Ostrich",
        "orderId": 36
      },
      {
        "id": 210,
        "scientificName": "Sturnidae",
        "commonName": "Starlings",
        "orderId": 24
      },
      {
        "id": 211,
        "scientificName": "Sulidae",
        "commonName": "Boobies and Gannets",
        "orderId": 37
      },
      {
        "id": 212,
        "scientificName": "Sylviidae",
        "commonName": "Sylviid Warblers",
        "orderId": 24
      },
      {
        "id": 213,
        "scientificName": "Thamnophilidae",
        "commonName": "Typical Antbirds",
        "orderId": 24
      },
      {
        "id": 214,
        "scientificName": "Thinocoridae",
        "commonName": "Seedsnipes",
        "orderId": 9
      },
      {
        "id": 215,
        "scientificName": "Thraupidae",
        "commonName": "Tanagers and Allies",
        "orderId": 24
      },
      {
        "id": 216,
        "scientificName": "Threskiornithidae",
        "commonName": "Ibises and Spoonbills",
        "orderId": 25
      },
      {
        "id": 217,
        "scientificName": "Tichodromidae",
        "commonName": "Wallcreeper",
        "orderId": 24
      },
      {
        "id": 218,
        "scientificName": "Timaliidae",
        "commonName": "Tree-Babblers, Scimitar-Babblers, and Allies",
        "orderId": 24
      },
      {
        "id": 219,
        "scientificName": "Tinamidae",
        "commonName": "Tinamous",
        "orderId": 38
      },
      {
        "id": 220,
        "scientificName": "Tityridae",
        "commonName": "Tityras and Allies",
        "orderId": 24
      },
      {
        "id": 221,
        "scientificName": "Todidae",
        "commonName": "Todies",
        "orderId": 13
      },
      {
        "id": 222,
        "scientificName": "Trochilidae",
        "commonName": "Hummingbirds",
        "orderId": 3
      },
      {
        "id": 223,
        "scientificName": "Troglodytidae",
        "commonName": "Wrens",
        "orderId": 24
      },
      {
        "id": 224,
        "scientificName": "Trogonidae",
        "commonName": "Trogons",
        "orderId": 39
      },
      {
        "id": 225,
        "scientificName": "Turdidae",
        "commonName": "Thrushes and Allies",
        "orderId": 24
      },
      {
        "id": 226,
        "scientificName": "Turnicidae",
        "commonName": "Buttonquail",
        "orderId": 9
      },
      {
        "id": 227,
        "scientificName": "Tyrannidae",
        "commonName": "Tyrant Flycatchers",
        "orderId": 24
      },
      {
        "id": 228,
        "scientificName": "Tytonidae",
        "commonName": "Barn-Owls",
        "orderId": 35
      },
      {
        "id": 229,
        "scientificName": "Upupidae",
        "commonName": "Hoopoes",
        "orderId": 5
      },
      {
        "id": 230,
        "scientificName": "Urocynchramidae",
        "commonName": "Przevalski's Rosefinch",
        "orderId": 24
      },
      {
        "id": 231,
        "scientificName": "Vangidae",
        "commonName": "Vangas, Helmetshrikes, and Allies",
        "orderId": 24
      },
      {
        "id": 232,
        "scientificName": "Viduidae",
        "commonName": "Indigobirds",
        "orderId": 24
      },
      {
        "id": 233,
        "scientificName": "Vireonidae",
        "commonName": "Vireos, Shrike-Babblers, and Erpornis",
        "orderId": 24
      },
      {
        "id": 234,
        "scientificName": "Zosteropidae",
        "commonName": "White-eyes, Yuhinas, and Allies",
        "orderId": 24
      }
    ];

    var autoIncrement = 235;

    var storage = $localForage.createInstance({
      name: 'jfsBirdsApp', 
      storename:'famillies'
    });

    if(storage.length() === 0)
    {
      // Add default values to database
      for(var i = 0; i < famillies.length ; i++)
      {
        var family = famillies[i];
        storage.setItem(family.id, 
          {
            scientificName : family.scientificName, 
            commonName : family.commonName, 
            orderId : family.orderId
          }).
          then(function(data) {
            console.log(family.id + '(' + data.scientificName + ') family set in database');
          }).catch(function(err) {
            console.log(err);
          });
      }
      storage.setItem('autoIncrement', autoIncrement).
        then(function(data) {
          console.log('AutoIncrement set at ' + data + ' in database');
        }).catch(function(err) {
          console.log(err);
        });
    }

    this.load = function(){return storage;};

  }]);

