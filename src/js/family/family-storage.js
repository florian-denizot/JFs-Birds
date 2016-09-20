angular.module('family').
  service('familyStorage', ['$indexedDB', '$q', function($indexedDB, $q){
    
    var setDefaultValues = function(){
      var families = [
        {
          "id": 1,
          "name": "Acanthisittidae",
          "description": "New Zealand Wrens",
          "orderId": 24
        },
        {
          "id": 2,
          "name": "Acanthizidae",
          "description": "Thornbills and Allies",
          "orderId": 24
        },
        {
          "id": 3,
          "name": "Accipitridae",
          "description": "Hawks, Eagles, and Kites",
          "orderId": 1
        },
        {
          "id": 4,
          "name": "Acrocephalidae",
          "description": "Reed-Warblers and Allies",
          "orderId": 24
        },
        {
          "id": 5,
          "name": "Aegithalidae",
          "description": "Long-tailed Tits",
          "orderId": 24
        },
        {
          "id": 6,
          "name": "Aegithinidae",
          "description": "Ioras",
          "orderId": 24
        },
        {
          "id": 7,
          "name": "Aegothelidae",
          "description": "Owlet-nightjars",
          "orderId": 6
        },
        {
          "id": 8,
          "name": "Alaudidae",
          "description": "Larks",
          "orderId": 24
        },
        {
          "id": 9,
          "name": "Alcedinidae",
          "description": "Kingfishers",
          "orderId": 13
        },
        {
          "id": 10,
          "name": "Alcidae",
          "description": "Auks, Murres, and Puffins",
          "orderId": 9
        },
        {
          "id": 11,
          "name": "Anatidae",
          "description": "Ducks, Geese, and Waterfowl",
          "orderId": 2
        },
        {
          "id": 12,
          "name": "Anhimidae",
          "description": "Screamers",
          "orderId": 2
        },
        {
          "id": 13,
          "name": "Anhingidae",
          "description": "Anhingas",
          "orderId": 37
        },
        {
          "id": 14,
          "name": "Anseranatidae",
          "description": "Magpie Goose",
          "orderId": 2
        },
        {
          "id": 15,
          "name": "Apodidae",
          "description": "Swifts",
          "orderId": 3
        },
        {
          "id": 16,
          "name": "Apterygidae",
          "description": "Kiwis",
          "orderId": 4
        },
        {
          "id": 17,
          "name": "Aramidae",
          "description": "Limpkin",
          "orderId": 20
        },
        {
          "id": 18,
          "name": "Ardeidae",
          "description": "Herons, Egrets, and Bitterns",
          "orderId": 25
        },
        {
          "id": 19,
          "name": "Artamidae",
          "description": "Woodswallows",
          "orderId": 24
        },
        {
          "id": 20,
          "name": "Atrichornithidae",
          "description": "Scrub-birds",
          "orderId": 24
        },
        {
          "id": 21,
          "name": "Balaenicipitidae",
          "description": "Shoebill",
          "orderId": 25
        },
        {
          "id": 22,
          "name": "Bernieridae",
          "description": "Malagasy Warblers",
          "orderId": 24
        },
        {
          "id": 23,
          "name": "Bombycillidae",
          "description": "Waxwings",
          "orderId": 24
        },
        {
          "id": 24,
          "name": "Brachypteraciidae",
          "description": "Ground-Rollers",
          "orderId": 13
        },
        {
          "id": 25,
          "name": "Bucconidae",
          "description": "Puffbirds",
          "orderId": 17
        },
        {
          "id": 26,
          "name": "Bucerotidae",
          "description": "Hornbills",
          "orderId": 5
        },
        {
          "id": 27,
          "name": "Bucorvidae",
          "description": "Ground-Hornbills",
          "orderId": 5
        },
        {
          "id": 28,
          "name": "Buphagidae",
          "description": "Oxpeckers",
          "orderId": 24
        },
        {
          "id": 29,
          "name": "Burhinidae",
          "description": "Thick-knees",
          "orderId": 9
        },
        {
          "id": 30,
          "name": "Cacatuidae",
          "description": "Cockatoos",
          "orderId": 31
        },
        {
          "id": 31,
          "name": "Calcariidae",
          "description": "Longspurs and Snow Buntings",
          "orderId": 24
        },
        {
          "id": 32,
          "name": "Callaeidae",
          "description": "Wattlebirds",
          "orderId": 24
        },
        {
          "id": 33,
          "name": "Calyptomenidae",
          "description": "African and Green Broadbills",
          "orderId": 24
        },
        {
          "id": 34,
          "name": "Campephagidae",
          "description": "Cuckooshrikes",
          "orderId": 24
        },
        {
          "id": 35,
          "name": "Capitonidae",
          "description": "New World Barbets",
          "orderId": 28
        },
        {
          "id": 36,
          "name": "Caprimulgidae",
          "description": "Nightjars and Allies",
          "orderId": 6
        },
        {
          "id": 37,
          "name": "Cardinalidae",
          "description": "Cardinals and Allies",
          "orderId": 24
        },
        {
          "id": 38,
          "name": "Cariamidae",
          "description": "Seriemas",
          "orderId": 7
        },
        {
          "id": 39,
          "name": "Casuariidae",
          "description": "Cassowaries",
          "orderId": 8
        },
        {
          "id": 40,
          "name": "Cathartidae",
          "description": "New World Vultures",
          "orderId": 1
        },
        {
          "id": 41,
          "name": "Certhiidae",
          "description": "Treecreepers",
          "orderId": 24
        },
        {
          "id": 42,
          "name": "Cettiidae",
          "description": "Bush-Warblers and Allies",
          "orderId": 24
        },
        {
          "id": 43,
          "name": "Chaetopidae",
          "description": "Rockjumpers",
          "orderId": 24
        },
        {
          "id": 44,
          "name": "Charadriidae",
          "description": "Plovers and Lapwings",
          "orderId": 9
        },
        {
          "id": 45,
          "name": "Chionidae",
          "description": "Sheathbills",
          "orderId": 9
        },
        {
          "id": 46,
          "name": "Chloropseidae",
          "description": "Leafbirds",
          "orderId": 24
        },
        {
          "id": 47,
          "name": "Ciconiidae",
          "description": "Storks",
          "orderId": 10
        },
        {
          "id": 48,
          "name": "Cinclidae",
          "description": "Dippers",
          "orderId": 24
        },
        {
          "id": 49,
          "name": "Cinclosomatidae",
          "description": "Quail-thrushes and Jewel-babblers",
          "orderId": 24
        },
        {
          "id": 50,
          "name": "Cisticolidae",
          "description": "Cisticolas and Allies",
          "orderId": 24
        },
        {
          "id": 51,
          "name": "Climacteridae",
          "description": "Australasian Treecreepers",
          "orderId": 24
        },
        {
          "id": 52,
          "name": "Cnemophilidae",
          "description": "Satinbirds",
          "orderId": 24
        },
        {
          "id": 53,
          "name": "Coliidae",
          "description": "Mousebirds",
          "orderId": 11
        },
        {
          "id": 54,
          "name": "Columbidae",
          "description": "Pigeons and Doves",
          "orderId": 12
        },
        {
          "id": 55,
          "name": "Conopophagidae",
          "description": "Gnateaters",
          "orderId": 24
        },
        {
          "id": 56,
          "name": "Coraciidae",
          "description": "Rollers",
          "orderId": 13
        },
        {
          "id": 57,
          "name": "Corcoracidae",
          "description": "White-winged Chough and Apostlebird",
          "orderId": 24
        },
        {
          "id": 58,
          "name": "Corvidae",
          "description": "Crows, Jays, and Magpies",
          "orderId": 24
        },
        {
          "id": 59,
          "name": "Cotingidae",
          "description": "Cotingas",
          "orderId": 24
        },
        {
          "id": 60,
          "name": "Cracidae",
          "description": "Guans, Chachalacas, and Curassows",
          "orderId": 18
        },
        {
          "id": 61,
          "name": "Cracticidae",
          "description": "Bellmagpies and Allies",
          "orderId": 24
        },
        {
          "id": 62,
          "name": "Cuculidae",
          "description": "Cuckoos",
          "orderId": 14
        },
        {
          "id": 63,
          "name": "Dasyornithidae",
          "description": "Bristlebirds",
          "orderId": 24
        },
        {
          "id": 64,
          "name": "Dicaeidae",
          "description": "Flowerpeckers",
          "orderId": 24
        },
        {
          "id": 65,
          "name": "Dicruridae",
          "description": "Drongos",
          "orderId": 24
        },
        {
          "id": 66,
          "name": "Diomedeidae",
          "description": "Albatrosses",
          "orderId": 30
        },
        {
          "id": 67,
          "name": "Donacobiidae",
          "description": "Donacobius",
          "orderId": 24
        },
        {
          "id": 68,
          "name": "Dromadidae",
          "description": "Crab Plover",
          "orderId": 9
        },
        {
          "id": 69,
          "name": "Dromaiidae",
          "description": "Emu",
          "orderId": 8
        },
        {
          "id": 70,
          "name": "Dulidae",
          "description": "Palmchat",
          "orderId": 24
        },
        {
          "id": 71,
          "name": "Elachuridae",
          "description": "Spotted Elachura",
          "orderId": 24
        },
        {
          "id": 72,
          "name": "Emberizidae",
          "description": "Buntings and New World Sparrows",
          "orderId": 24
        },
        {
          "id": 73,
          "name": "Estrildidae",
          "description": "Waxbills and Allies",
          "orderId": 24
        },
        {
          "id": 74,
          "name": "Eupetidae",
          "description": "Rail-babbler",
          "orderId": 24
        },
        {
          "id": 75,
          "name": "Eurylaimidae",
          "description": "Asian and Grauer's Broadbills",
          "orderId": 24
        },
        {
          "id": 76,
          "name": "Eurypygidae",
          "description": "Sunbittern",
          "orderId": 15
        },
        {
          "id": 77,
          "name": "Falconidae",
          "description": "Falcons and Caracaras",
          "orderId": 16
        },
        {
          "id": 78,
          "name": "Formicariidae",
          "description": "Antthrushes",
          "orderId": 24
        },
        {
          "id": 79,
          "name": "Fregatidae",
          "description": "Frigatebirds",
          "orderId": 37
        },
        {
          "id": 80,
          "name": "Fringillidae",
          "description": "Finches, Euphonias, and Allies",
          "orderId": 24
        },
        {
          "id": 81,
          "name": "Furnariidae",
          "description": "Ovenbirds and Woodcreepers",
          "orderId": 24
        },
        {
          "id": 82,
          "name": "Galbulidae",
          "description": "Jacamars",
          "orderId": 17
        },
        {
          "id": 83,
          "name": "Gaviidae",
          "description": "Loons",
          "orderId": 19
        },
        {
          "id": 84,
          "name": "Glareolidae",
          "description": "Pratincoles and Coursers",
          "orderId": 9
        },
        {
          "id": 85,
          "name": "Grallariidae",
          "description": "Antpittas",
          "orderId": 24
        },
        {
          "id": 86,
          "name": "Gruidae",
          "description": "Cranes",
          "orderId": 20
        },
        {
          "id": 87,
          "name": "Haematopodidae",
          "description": "Oystercatchers",
          "orderId": 9
        },
        {
          "id": 88,
          "name": "Heliornithidae",
          "description": "Finfoots",
          "orderId": 20
        },
        {
          "id": 89,
          "name": "Hemiprocnidae",
          "description": "Treeswifts",
          "orderId": 3
        },
        {
          "id": 90,
          "name": "Hirundinidae",
          "description": "Swallows",
          "orderId": 24
        },
        {
          "id": 91,
          "name": "Hydrobatidae",
          "description": "Storm-Petrels",
          "orderId": 30
        },
        {
          "id": 92,
          "name": "Hyliotidae",
          "description": "Hyliotas",
          "orderId": 24
        },
        {
          "id": 93,
          "name": "Hylocitreidae",
          "description": "Hylocitrea",
          "orderId": 24
        },
        {
          "id": 94,
          "name": "Hypocoliidae",
          "description": "Hypocolius",
          "orderId": 24
        },
        {
          "id": 95,
          "name": "Ibidorhynchidae",
          "description": "Ibisbill",
          "orderId": 9
        },
        {
          "id": 96,
          "name": "Icteridae",
          "description": "Troupials and Allies",
          "orderId": 24
        },
        {
          "id": 97,
          "name": "Indicatoridae",
          "description": "Honeyguides",
          "orderId": 28
        },
        {
          "id": 98,
          "name": "Irenidae",
          "description": "Fairy-bluebirds",
          "orderId": 24
        },
        {
          "id": 99,
          "name": "Jacanidae",
          "description": "Jacanas",
          "orderId": 9
        },
        {
          "id": 100,
          "name": "Laniidae",
          "description": "Shrikes",
          "orderId": 24
        },
        {
          "id": 101,
          "name": "Laridae",
          "description": "Gulls, Terns, and Skimmers",
          "orderId": 9
        },
        {
          "id": 102,
          "name": "Leiothrichidae",
          "description": "Laughingthrushes and Allies",
          "orderId": 24
        },
        {
          "id": 103,
          "name": "Leptosomidae",
          "description": "Cuckoo-Roller",
          "orderId": 21
        },
        {
          "id": 104,
          "name": "Locustellidae",
          "description": "Grassbirds and Allies",
          "orderId": 24
        },
        {
          "id": 105,
          "name": "Lybiidae",
          "description": "African Barbets",
          "orderId": 28
        },
        {
          "id": 106,
          "name": "Machaerirhynchidae",
          "description": "Boatbills",
          "orderId": 24
        },
        {
          "id": 107,
          "name": "Macrosphenidae",
          "description": "African Warblers",
          "orderId": 24
        },
        {
          "id": 108,
          "name": "Malaconotidae",
          "description": "Bushshrikes and Allies",
          "orderId": 24
        },
        {
          "id": 109,
          "name": "Maluridae",
          "description": "Fairywrens",
          "orderId": 24
        },
        {
          "id": 110,
          "name": "Megalaimidae",
          "description": "Asian Barbets",
          "orderId": 28
        },
        {
          "id": 111,
          "name": "Megapodiidae",
          "description": "Megapodes",
          "orderId": 18
        },
        {
          "id": 112,
          "name": "Melanocharitidae",
          "description": "Berrypeckers and Longbills",
          "orderId": 24
        },
        {
          "id": 113,
          "name": "Melanopareiidae",
          "description": "Crescentchests",
          "orderId": 24
        },
        {
          "id": 114,
          "name": "Meliphagidae",
          "description": "Honeyeaters",
          "orderId": 24
        },
        {
          "id": 115,
          "name": "Menuridae",
          "description": "Lyrebirds",
          "orderId": 24
        },
        {
          "id": 116,
          "name": "Meropidae",
          "description": "Bee-eaters",
          "orderId": 13
        },
        {
          "id": 117,
          "name": "Mesitornithidae",
          "description": "Mesites",
          "orderId": 22
        },
        {
          "id": 118,
          "name": "Mimidae",
          "description": "Mockingbirds and Thrashers",
          "orderId": 24
        },
        {
          "id": 119,
          "name": "Mohouidae",
          "description": "Whiteheads",
          "orderId": 24
        },
        {
          "id": 120,
          "name": "Momotidae",
          "description": "Motmots",
          "orderId": 13
        },
        {
          "id": 121,
          "name": "Monarchidae",
          "description": "Monarch Flycatchers",
          "orderId": 24
        },
        {
          "id": 122,
          "name": "Motacillidae",
          "description": "Wagtails and Pipits",
          "orderId": 24
        },
        {
          "id": 123,
          "name": "Muscicapidae",
          "description": "Old World Flycatchers",
          "orderId": 24
        },
        {
          "id": 124,
          "name": "Musophagidae",
          "description": "Turacos",
          "orderId": 14
        },
        {
          "id": 125,
          "name": "Nectariniidae",
          "description": "Sunbirds and Spiderhunters",
          "orderId": 24
        },
        {
          "id": 126,
          "name": "Neosittidae",
          "description": "Sittellas",
          "orderId": 24
        },
        {
          "id": 127,
          "name": "Nicatoridae",
          "description": "Nicators",
          "orderId": 24
        },
        {
          "id": 128,
          "name": "Notiomystidae",
          "description": "Stitchbird",
          "orderId": 24
        },
        {
          "id": 129,
          "name": "Numididae",
          "description": "Guineafowl",
          "orderId": 18
        },
        {
          "id": 130,
          "name": "Nyctibiidae",
          "description": "Potoos",
          "orderId": 6
        },
        {
          "id": 131,
          "name": "Odontophoridae",
          "description": "New World Quail",
          "orderId": 18
        },
        {
          "id": 132,
          "name": "Opisthocomidae",
          "description": "Hoatzin",
          "orderId": 14
        },
        {
          "id": 133,
          "name": "Oreoicidae",
          "description": "Australo-Papuan Bellbirds",
          "orderId": 24
        },
        {
          "id": 134,
          "name": "Oriolidae",
          "description": "Old World Orioles",
          "orderId": 24
        },
        {
          "id": 135,
          "name": "Orthonychidae",
          "description": "Logrunners",
          "orderId": 24
        },
        {
          "id": 136,
          "name": "Otididae",
          "description": "Bustards",
          "orderId": 23
        },
        {
          "id": 137,
          "name": "Oxyruncidae",
          "description": "Sharpbill",
          "orderId": 24
        },
        {
          "id": 138,
          "name": "Pachycephalidae",
          "description": "Whistlers and Allies",
          "orderId": 24
        },
        {
          "id": 139,
          "name": "Pandionidae",
          "description": "Osprey",
          "orderId": 1
        },
        {
          "id": 140,
          "name": "Panuridae",
          "description": "Bearded Reedling",
          "orderId": 24
        },
        {
          "id": 141,
          "name": "Paradisaeidae",
          "description": "Birds-of-Paradise",
          "orderId": 24
        },
        {
          "id": 142,
          "name": "Paradoxornithidae",
          "description": "Parrotbills, Wrentit, and Allies",
          "orderId": 24
        },
        {
          "id": 143,
          "name": "Paramythiidae",
          "description": "Tit Berrypecker and Crested Berrypecker",
          "orderId": 24
        },
        {
          "id": 144,
          "name": "Pardalotidae",
          "description": "Pardalotes",
          "orderId": 24
        },
        {
          "id": 145,
          "name": "Paridae",
          "description": "Tits, Chickadees, and Titmice",
          "orderId": 24
        },
        {
          "id": 146,
          "name": "Parulidae",
          "description": "New World Warblers",
          "orderId": 24
        },
        {
          "id": 147,
          "name": "Passeridae",
          "description": "Old World Sparrows",
          "orderId": 24
        },
        {
          "id": 148,
          "name": "Pedionomidae",
          "description": "Plains-wanderer",
          "orderId": 9
        },
        {
          "id": 149,
          "name": "Pelecanidae",
          "description": "Pelicans",
          "orderId": 25
        },
        {
          "id": 150,
          "name": "Pelecanoididae",
          "description": "Diving-Petrels",
          "orderId": 30
        },
        {
          "id": 151,
          "name": "Pellorneidae",
          "description": "Ground Babblers and Allies",
          "orderId": 24
        },
        {
          "id": 152,
          "name": "Petroicidae",
          "description": "Australasian Robins",
          "orderId": 24
        },
        {
          "id": 153,
          "name": "Peucedramidae",
          "description": "Olive Warbler",
          "orderId": 24
        },
        {
          "id": 154,
          "name": "Phaethontidae",
          "description": "Tropicbirds",
          "orderId": 26
        },
        {
          "id": 155,
          "name": "Phalacrocoracidae",
          "description": "Cormorants and Shags",
          "orderId": 37
        },
        {
          "id": 156,
          "name": "Phasianidae",
          "description": "Pheasants, Grouse, and Allies",
          "orderId": 18
        },
        {
          "id": 157,
          "name": "Philepittidae",
          "description": "Asities",
          "orderId": 24
        },
        {
          "id": 158,
          "name": "Phoenicopteridae",
          "description": "Flamingos",
          "orderId": 27
        },
        {
          "id": 159,
          "name": "Phoeniculidae",
          "description": "Woodhoopoes and Scimitar-bills",
          "orderId": 5
        },
        {
          "id": 160,
          "name": "Phylloscopidae",
          "description": "Leaf Warblers",
          "orderId": 24
        },
        {
          "id": 161,
          "name": "Picathartidae",
          "description": "Rockfowl",
          "orderId": 24
        },
        {
          "id": 162,
          "name": "Picidae",
          "description": "Woodpeckers",
          "orderId": 28
        },
        {
          "id": 163,
          "name": "Pipridae",
          "description": "Manakins",
          "orderId": 24
        },
        {
          "id": 164,
          "name": "Pittidae",
          "description": "Pittas",
          "orderId": 24
        },
        {
          "id": 165,
          "name": "Pityriaseidae",
          "description": "Bristlehead",
          "orderId": 24
        },
        {
          "id": 166,
          "name": "Platysteiridae",
          "description": "Wattle-eyes and Batises",
          "orderId": 24
        },
        {
          "id": 167,
          "name": "Ploceidae",
          "description": "Weavers and Allies",
          "orderId": 24
        },
        {
          "id": 168,
          "name": "Pluvianellidae",
          "description": "Magellanic Plover",
          "orderId": 9
        },
        {
          "id": 169,
          "name": "Pluvianidae",
          "description": "Egyptian Plover",
          "orderId": 9
        },
        {
          "id": 170,
          "name": "Pnoepygidae",
          "description": "Cupwings",
          "orderId": 24
        },
        {
          "id": 171,
          "name": "Podargidae",
          "description": "Frogmouths",
          "orderId": 6
        },
        {
          "id": 172,
          "name": "Podicipedidae",
          "description": "Grebes",
          "orderId": 29
        },
        {
          "id": 173,
          "name": "Polioptilidae",
          "description": "Gnatcatchers",
          "orderId": 24
        },
        {
          "id": 174,
          "name": "Pomatostomidae",
          "description": "Pseudo-Babblers",
          "orderId": 24
        },
        {
          "id": 175,
          "name": "Procellariidae",
          "description": "Shearwaters and Petrels",
          "orderId": 30
        },
        {
          "id": 176,
          "name": "Promeropidae",
          "description": "Sugarbirds",
          "orderId": 24
        },
        {
          "id": 177,
          "name": "Prunellidae",
          "description": "Accentors",
          "orderId": 24
        },
        {
          "id": 178,
          "name": "Psittacidae",
          "description": "New World and African Parrots",
          "orderId": 31
        },
        {
          "id": 179,
          "name": "Psittaculidae",
          "description": "Old World Parrots",
          "orderId": 31
        },
        {
          "id": 180,
          "name": "Psophiidae",
          "description": "Trumpeters",
          "orderId": 20
        },
        {
          "id": 181,
          "name": "Psophodidae",
          "description": "Whipbirds and Wedgebills",
          "orderId": 24
        },
        {
          "id": 182,
          "name": "Pteroclidae",
          "description": "Sandgrouse",
          "orderId": 32
        },
        {
          "id": 183,
          "name": "Ptiliogonatidae",
          "description": "Silky-flycatchers",
          "orderId": 24
        },
        {
          "id": 184,
          "name": "Ptilonorhynchidae",
          "description": "Bowerbirds",
          "orderId": 24
        },
        {
          "id": 185,
          "name": "Pycnonotidae",
          "description": "Bulbuls",
          "orderId": 24
        },
        {
          "id": 186,
          "name": "Rallidae",
          "description": "Rails, Gallinules, and Coots",
          "orderId": 20
        },
        {
          "id": 187,
          "name": "Ramphastidae",
          "description": "Toucans",
          "orderId": 28
        },
        {
          "id": 188,
          "name": "Recurvirostridae",
          "description": "Stilts and Avocets",
          "orderId": 9
        },
        {
          "id": 189,
          "name": "Regulidae",
          "description": "Kinglets",
          "orderId": 24
        },
        {
          "id": 190,
          "name": "Remizidae",
          "description": "Penduline-Tits",
          "orderId": 24
        },
        {
          "id": 191,
          "name": "Rheidae",
          "description": "Rheas",
          "orderId": 33
        },
        {
          "id": 192,
          "name": "Rhinocryptidae",
          "description": "Tapaculos",
          "orderId": 24
        },
        {
          "id": 193,
          "name": "Rhipiduridae",
          "description": "Fantails",
          "orderId": 24
        },
        {
          "id": 194,
          "name": "Rhynochetidae",
          "description": "Kagu",
          "orderId": 15
        },
        {
          "id": 195,
          "name": "Rostratulidae",
          "description": "Painted-Snipes",
          "orderId": 9
        },
        {
          "id": 196,
          "name": "Sagittariidae",
          "description": "Secretary-bird",
          "orderId": 1
        },
        {
          "id": 197,
          "name": "Sapayoidae",
          "description": "Sapayoa",
          "orderId": 24
        },
        {
          "id": 198,
          "name": "Sarothruridae",
          "description": "Flufftails",
          "orderId": 20
        },
        {
          "id": 199,
          "name": "Scolopacidae",
          "description": "Sandpipers and Allies",
          "orderId": 9
        },
        {
          "id": 200,
          "name": "Scopidae",
          "description": "Hamerkop",
          "orderId": 25
        },
        {
          "id": 201,
          "name": "Semnornithidae",
          "description": "Toucan-Barbets",
          "orderId": 28
        },
        {
          "id": 202,
          "name": "Sittidae",
          "description": "Nuthatches",
          "orderId": 24
        },
        {
          "id": 203,
          "name": "Spheniscidae",
          "description": "Penguins",
          "orderId": 34
        },
        {
          "id": 204,
          "name": "Steatornithidae",
          "description": "Oilbird",
          "orderId": 6
        },
        {
          "id": 205,
          "name": "Stenostiridae",
          "description": "Fairy Flycatchers",
          "orderId": 24
        },
        {
          "id": 206,
          "name": "Stercorariidae",
          "description": "Skuas and Jaegers",
          "orderId": 9
        },
        {
          "id": 207,
          "name": "Strigidae",
          "description": "Owls",
          "orderId": 35
        },
        {
          "id": 208,
          "name": "Strigopidae",
          "description": "New Zealand Parrots",
          "orderId": 31
        },
        {
          "id": 209,
          "name": "Struthionidae",
          "description": "Ostrich",
          "orderId": 36
        },
        {
          "id": 210,
          "name": "Sturnidae",
          "description": "Starlings",
          "orderId": 24
        },
        {
          "id": 211,
          "name": "Sulidae",
          "description": "Boobies and Gannets",
          "orderId": 37
        },
        {
          "id": 212,
          "name": "Sylviidae",
          "description": "Sylviid Warblers",
          "orderId": 24
        },
        {
          "id": 213,
          "name": "Thamnophilidae",
          "description": "Typical Antbirds",
          "orderId": 24
        },
        {
          "id": 214,
          "name": "Thinocoridae",
          "description": "Seedsnipes",
          "orderId": 9
        },
        {
          "id": 215,
          "name": "Thraupidae",
          "description": "Tanagers and Allies",
          "orderId": 24
        },
        {
          "id": 216,
          "name": "Threskiornithidae",
          "description": "Ibises and Spoonbills",
          "orderId": 25
        },
        {
          "id": 217,
          "name": "Tichodromidae",
          "description": "Wallcreeper",
          "orderId": 24
        },
        {
          "id": 218,
          "name": "Timaliidae",
          "description": "Tree-Babblers, Scimitar-Babblers, and Allies",
          "orderId": 24
        },
        {
          "id": 219,
          "name": "Tinamidae",
          "description": "Tinamous",
          "orderId": 38
        },
        {
          "id": 220,
          "name": "Tityridae",
          "description": "Tityras and Allies",
          "orderId": 24
        },
        {
          "id": 221,
          "name": "Todidae",
          "description": "Todies",
          "orderId": 13
        },
        {
          "id": 222,
          "name": "Trochilidae",
          "description": "Hummingbirds",
          "orderId": 3
        },
        {
          "id": 223,
          "name": "Troglodytidae",
          "description": "Wrens",
          "orderId": 24
        },
        {
          "id": 224,
          "name": "Trogonidae",
          "description": "Trogons",
          "orderId": 39
        },
        {
          "id": 225,
          "name": "Turdidae",
          "description": "Thrushes and Allies",
          "orderId": 24
        },
        {
          "id": 226,
          "name": "Turnicidae",
          "description": "Buttonquail",
          "orderId": 9
        },
        {
          "id": 227,
          "name": "Tyrannidae",
          "description": "Tyrant Flycatchers",
          "orderId": 24
        },
        {
          "id": 228,
          "name": "Tytonidae",
          "description": "Barn-Owls",
          "orderId": 35
        },
        {
          "id": 229,
          "name": "Upupidae",
          "description": "Hoopoes",
          "orderId": 5
        },
        {
          "id": 230,
          "name": "Urocynchramidae",
          "description": "Przevalski's Rosefinch",
          "orderId": 24
        },
        {
          "id": 231,
          "name": "Vangidae",
          "description": "Vangas, Helmetshrikes, and Allies",
          "orderId": 24
        },
        {
          "id": 232,
          "name": "Viduidae",
          "description": "Indigobirds",
          "orderId": 24
        },
        {
          "id": 233,
          "name": "Vireonidae",
          "description": "Vireos, Shrike-Babblers, and Erpornis",
          "orderId": 24
        },
        {
          "id": 234,
          "name": "Zosteropidae",
          "description": "White-eyes, Yuhinas, and Allies",
          "orderId": 24
        }
      ];
      
      var dbInsertions = [];
      var dbInsertion;

      $indexedDB.openStore('families', function(store){
        dbInsertion = store.insert(families).then(function(e){
          return "Inserted 234 values in Family database";
        }).catch(function(err) {
          console.log(err);
        });
        dbInsertions.push(dbInsertion);
      });
      
      autoincrement = [{'storeName':'families', 'value':235}];
      $indexedDB.openStore('autoincrement', function(store){
        dbInsertion = store.insert(autoincrement).
          then(function(e){
            return "Family autoincrement set to 235";
          }).catch(function(err) {
            console.log(err);
          });
          
        dbInsertions.push(dbInsertion);
      });
      
      return $q.all(dbInsertions).
        then(function(){
          return "Default values set in Family database";
        }).catch(function(err){
          console.log(err);
        });
    };
    
    this.init = function(){
      
      $indexedDB.openStore('autoincrement', function(autoincrement){
        autoincrement.find('families')
          .then(function(data){
            if(!data){
              return setDefaultValues().
                then(function(message){
                  return message;
                }).catch(function(err){
                  console.log(err);
                });
            }
            else
            {
              return "Family database already exist";
            }
          }).catch(function(err){
            console.log(err);
          });
      });
    };

    this.load = $indexedDB.openStore('families', function(store){
      store.getAll().then(function(values) {  
        return values;
      }).catch(function(err){
        console.log(err);
      });
    });
  }]);

