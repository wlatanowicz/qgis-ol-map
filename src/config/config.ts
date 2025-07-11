export default {
  epsgs: {
    "EPSG:2180":
      "+proj=tmerc +lat_0=0 +lon_0=19 +k=0.9993 +x_0=500000 +y_0=-5300000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs +axis=neu",
  },
  layers: {
    caves: {
      type: "wfs",
      title: "Caves",
      zIndex: 400,
      url: "https://cbdgmapa.pgi.gov.pl/arcgis/services/jaskinie/MapServer/WFSServer",
      layer: "jaskinie:Jaskinie",
      version: "1.1.0",
      crs: "EPSG:4326",
    },
    kml: {
      type: "kml",
      title: "KML Sample",
      zIndex: 300,
      attribution: "KML Sample",
      url: "./data/KML_Samples.kml",
    },
    group: {
      type: "group",
      title: "Orthophotomap + Hill Shade",
      layers: {
        hillshade: {
          type: "wmts",
          title: "Hill Shade",
          zIndex: 200,
          opacity: 0.6,
          attribution: "Geoportal",
          url: "http://mapy.geoportal.gov.pl/wss/service/PZGIK/NMT/GRID1/WMTS/ShadedRelief",
          layer: "Cieniowanie",
          format: "image/jpeg",
          crs: "EPSG:2180",
        },
        ortho: {
          type: "wmts",
          zIndex: 100,
          title: "Orthophotomap",
          attribution: "Geoportal",
          url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMTS/HighResolution",
          layer: "ORTOFOTOMAPA",
          format: "image/jpeg",
          crs: "EPSG:2180",
        },
      },
    },
    base: {
      type: "xyz",
      title: "Open Street Map",
      zIndex: 0,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      url: "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
    },
  },
};
