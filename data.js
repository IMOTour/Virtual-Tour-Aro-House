var APP_DATA = {
  "scenes": [
    {
      "id": "0-road-entrance",
      "name": "Road entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.0893133719890162,
        "pitch": -0.2982401411738955,
        "fov": 1.5295458668774975
      },
      "linkHotspots": [
        {
          "yaw": -1.681204390924588,
          "pitch": -0.05370949980154727,
          "rotation": 3.141592653589793,
          "target": "1-side-view"
        },
        {
          "yaw": -1.030366903963376,
          "pitch": 0.12138938715549052,
          "rotation": 3.141592653589793,
          "target": "4-lower-level"
        },
        {
          "yaw": -1.3785303091171563,
          "pitch": 0.06631809161967261,
          "rotation": 0,
          "target": "2-garage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-side-view",
      "name": "Side view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.791101150360884,
        "pitch": 0.020084759297636978,
        "fov": 1.5295458668774975
      },
      "linkHotspots": [
        {
          "yaw": -1.720932408439598,
          "pitch": 0.09411200643987527,
          "rotation": 3.141592653589793,
          "target": "0-road-entrance"
        },
        {
          "yaw": -2.400513549550576,
          "pitch": 0.1276769743082049,
          "rotation": 3.141592653589793,
          "target": "2-garage"
        },
        {
          "yaw": 2.8069493911276533,
          "pitch": 0.2316883164149619,
          "rotation": 3.141592653589793,
          "target": "3-lower-access"
        },
        {
          "yaw": 2.261093374174216,
          "pitch": 0.0496149167647193,
          "rotation": 0.7853981633974483,
          "target": "6-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-garage",
      "name": "Garage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.7546650424800347,
        "pitch": -0.019081993823256482,
        "fov": 1.5295458668774975
      },
      "linkHotspots": [
        {
          "yaw": 2.672170060590963,
          "pitch": 0.10290923921854045,
          "rotation": 3.141592653589793,
          "target": "3-lower-access"
        },
        {
          "yaw": 2.43471529672464,
          "pitch": 0.007253069823889291,
          "rotation": 0.7853981633974483,
          "target": "6-entrance"
        },
        {
          "yaw": -0.35078905885788103,
          "pitch": -0.03216273384716217,
          "rotation": 3.141592653589793,
          "target": "0-road-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-lower-access",
      "name": "Lower access",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.6926173372685138,
        "pitch": 0.4580058800795719,
        "fov": 1.5295458668774975
      },
      "linkHotspots": [
        {
          "yaw": 1.1465424395390382,
          "pitch": 0.431817982974664,
          "rotation": 3.141592653589793,
          "target": "4-lower-level"
        },
        {
          "yaw": 2.309450538858189,
          "pitch": 0.17967272730849082,
          "rotation": 3.141592653589793,
          "target": "2-garage"
        },
        {
          "yaw": -1.6338164491096858,
          "pitch": 0.31103701672686057,
          "rotation": 0.7853981633974483,
          "target": "6-entrance"
        },
        {
          "yaw": -2.7743275345530733,
          "pitch": -0.12080099257388888,
          "rotation": 3.141592653589793,
          "target": "1-side-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-lower-level",
      "name": "Lower level",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.535233997595669,
        "pitch": -0.09537599238725747,
        "fov": 1.5295458668774975
      },
      "linkHotspots": [
        {
          "yaw": 1.1178552646820936,
          "pitch": -0.013191321111161614,
          "rotation": 0,
          "target": "3-lower-access"
        },
        {
          "yaw": 1.7849360086522132,
          "pitch": 0.23654836612385033,
          "rotation": 0,
          "target": "5-lower-garage"
        },
        {
          "yaw": -0.14027780197234563,
          "pitch": -0.09005259830831314,
          "rotation": 3.141592653589793,
          "target": "0-road-entrance"
        },
        {
          "yaw": 0.2534216750187941,
          "pitch": -0.34487976221440775,
          "rotation": 0.7853981633974483,
          "target": "2-garage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-lower-garage",
      "name": "Lower garage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.972575907734033,
        "pitch": 0.30764495120169144,
        "fov": 1.5295458668774975
      },
      "linkHotspots": [
        {
          "yaw": 2.136943860389266,
          "pitch": 0.006223640294896526,
          "rotation": 0,
          "target": "4-lower-level"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.637434715607025,
        "pitch": 0.1215246908327039,
        "fov": 1.5295458668774975
      },
      "linkHotspots": [
        {
          "yaw": -0.9565412541508014,
          "pitch": 0.056644349007680006,
          "rotation": 3.141592653589793,
          "target": "2-garage"
        },
        {
          "yaw": -1.5233067281699544,
          "pitch": 0.30169966978479934,
          "rotation": 3.9269908169872414,
          "target": "3-lower-access"
        },
        {
          "yaw": 0.20405501649376134,
          "pitch": -0.02560997149313593,
          "rotation": 3.141592653589793,
          "target": "1-side-view"
        },
        {
          "yaw": -2.8437075449153593,
          "pitch": 0.03381158902387327,
          "rotation": 0,
          "target": "7-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.1075169545942014,
        "pitch": 0.17155765009035662,
        "fov": 1.5295458668774975
      },
      "linkHotspots": [
        {
          "yaw": 2.4414734263825206,
          "pitch": 0.016195280444350146,
          "rotation": 11.780972450961727,
          "target": "6-entrance"
        },
        {
          "yaw": -2.7376618128772634,
          "pitch": 0.011518313962271876,
          "rotation": 0.7853981633974483,
          "target": "8-kitchen"
        },
        {
          "yaw": -0.6747342715881928,
          "pitch": -0.014434490797812671,
          "rotation": 5.497787143782138,
          "target": "12-1st-floor-access"
        },
        {
          "yaw": -0.1514766257799227,
          "pitch": 0.09950837059201767,
          "rotation": 5.497787143782138,
          "target": "11-wc-1"
        },
        {
          "yaw": 0.6214251510953499,
          "pitch": 0.1501469467426837,
          "rotation": 0.7853981633974483,
          "target": "9-sitting-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.22342050849562334,
          "pitch": -0.0057860622720529165,
          "title": "Storage",
          "text": "Storage"
        }
      ]
    },
    {
      "id": "8-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.0402349913893367,
        "pitch": 0.20505342884173672,
        "fov": 1.5295458668774975
      },
      "linkHotspots": [
        {
          "yaw": 0.35688019065795196,
          "pitch": 0.5163559459366187,
          "rotation": 0,
          "target": "7-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.21301799092280582,
          "pitch": -0.08651031376286511,
          "title": "Storage",
          "text": "Storage"
        }
      ]
    },
    {
      "id": "9-sitting-room",
      "name": "Sitting room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.925059984691039,
        "pitch": 0.5539267229709601,
        "fov": 1.5295458668774975
      },
      "linkHotspots": [
        {
          "yaw": -0.71699800247473,
          "pitch": 0.00708978883593403,
          "rotation": 0,
          "target": "2-garage"
        },
        {
          "yaw": 2.450751715440928,
          "pitch": 0.00509088720617612,
          "rotation": 3.141592653589793,
          "target": "10-dinning-room"
        },
        {
          "yaw": 1.004723414857537,
          "pitch": 0.045146960989077556,
          "rotation": 0.7853981633974483,
          "target": "7-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-dinning-room",
      "name": "Dinning room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.5369397796594075,
        "pitch": 0.2748277259525551,
        "fov": 1.5295458668774975
      },
      "linkHotspots": [
        {
          "yaw": -1.4894113394883668,
          "pitch": 0.15533679038755643,
          "rotation": 3.141592653589793,
          "target": "9-sitting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-wc-1",
      "name": "WC 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.2946387771585606,
        "pitch": 0.25347338215746085,
        "fov": 1.5295458668774975
      },
      "linkHotspots": [
        {
          "yaw": 1.9997721055187618,
          "pitch": 0.00906309802145877,
          "rotation": 0,
          "target": "7-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-1st-floor-access",
      "name": "1st floor access",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.9892359195611586,
        "pitch": 0.2857302755898097,
        "fov": 1.5295458668774975
      },
      "linkHotspots": [
        {
          "yaw": 2.7409395693755307,
          "pitch": 0.6610728389242464,
          "rotation": 3.141592653589793,
          "target": "7-hall"
        },
        {
          "yaw": 3.0043253312797056,
          "pitch": -0.06528696559611546,
          "rotation": 3.141592653589793,
          "target": "13-upper-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-upper-hall",
      "name": "Upper hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.7208063826953435,
        "pitch": 0.17218980463619893,
        "fov": 1.5295458668774975
      },
      "linkHotspots": [
        {
          "yaw": -2.782201067855963,
          "pitch": 0.4362123176138315,
          "rotation": 3.141592653589793,
          "target": "12-1st-floor-access"
        },
        {
          "yaw": 1.8468053048501858,
          "pitch": -0.0029826314643894847,
          "rotation": 0.7853981633974483,
          "target": "14-bedroom-1"
        },
        {
          "yaw": -1.6599542068029418,
          "pitch": 0.0340199752952941,
          "rotation": 5.497787143782138,
          "target": "15-wc-2"
        },
        {
          "yaw": -0.8604280294637405,
          "pitch": 0.13213570881291403,
          "rotation": 1.5707963267948966,
          "target": "16-bedroom-2"
        },
        {
          "yaw": -1.0992522409485286,
          "pitch": 0.3187572473661575,
          "rotation": 0,
          "target": "17-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.796978013736272,
        "pitch": 0.255747453685629,
        "fov": 1.5295458668774975
      },
      "linkHotspots": [
        {
          "yaw": -0.9594305788973969,
          "pitch": -0.07348861938325157,
          "rotation": 4.71238898038469,
          "target": "13-upper-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-wc-2",
      "name": "WC 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.1119223304823738,
        "pitch": 0.2387710583945939,
        "fov": 1.5295458668774975
      },
      "linkHotspots": [
        {
          "yaw": 1.5643324351144603,
          "pitch": 0.00799267242015489,
          "rotation": 0,
          "target": "13-upper-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.3269509606344716,
        "pitch": 0.159040135148949,
        "fov": 1.5295458668774975
      },
      "linkHotspots": [
        {
          "yaw": 1.3711940445495117,
          "pitch": 0.49870996478581553,
          "rotation": 3.141592653589793,
          "target": "13-upper-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.0819927508295386,
        "pitch": 0.21128846195106732,
        "fov": 1.5295458668774975
      },
      "linkHotspots": [
        {
          "yaw": 0.4711223268052507,
          "pitch": -0.057162741076588475,
          "rotation": 3.141592653589793,
          "target": "18-balcony-view"
        },
        {
          "yaw": 3.050484487905095,
          "pitch": 0.4481140659097509,
          "rotation": 3.141592653589793,
          "target": "13-upper-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-balcony-view",
      "name": "Balcony view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.006398859947237767,
        "pitch": 0.17263906270197893,
        "fov": 1.5295458668774975
      },
      "linkHotspots": [
        {
          "yaw": 1.5140616252849526,
          "pitch": 0.4179622097892768,
          "rotation": 3.141592653589793,
          "target": "1-side-view"
        },
        {
          "yaw": 0.39555582799449596,
          "pitch": 0.3874599620561856,
          "rotation": 3.141592653589793,
          "target": "2-garage"
        },
        {
          "yaw": -1.0992806980247245,
          "pitch": 0.6599407001685975,
          "rotation": 3.141592653589793,
          "target": "4-lower-level"
        },
        {
          "yaw": -3.108882094984107,
          "pitch": 0.17592243214897962,
          "rotation": 0,
          "target": "17-bedroom-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
