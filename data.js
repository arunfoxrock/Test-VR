var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "Living",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.10498195387844156,
        "pitch": -0.04846306189846317,
        "fov": 1.0070494407677437
      },
      "linkHotspots": [
        {
          "yaw": 0.9663756548871909,
          "pitch": 0.012137897707987122,
          "rotation": 0.7853981633974483,
          "target": "1-stair"
        },
        {
          "yaw": 0.7694106798021139,
          "pitch": 0.07430702138522705,
          "rotation": 5.497787143782138,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-stair",
      "name": "Stair",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.0872664625997217,
        "pitch": 0.04442194961461787,
        "fov": 1.3900591270580378
      },
      "linkHotspots": [
        {
          "yaw": 1.1206096544813668,
          "pitch": 0.12541734539500382,
          "rotation": 4.71238898038469,
          "target": "0-living"
        },
        {
          "yaw": -2.267677744180169,
          "pitch": 0.17363452794040413,
          "rotation": 5.497787143782138,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "Dining",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.07743524994718598,
        "pitch": -0.007403776975010601,
        "fov": 1.3220893730255416
      },
      "linkHotspots": [
        {
          "yaw": -2.020687064529744,
          "pitch": 0.13082216661688406,
          "rotation": 0,
          "target": "1-stair"
        },
        {
          "yaw": -1.590751076533147,
          "pitch": 0.09569897642117553,
          "rotation": 4.71238898038469,
          "target": "0-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Test VR Project",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
