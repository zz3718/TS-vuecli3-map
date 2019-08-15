import { loadModules, loadCss } from 'esri-loader'
const options = { version: '3.22' }
loadCss(options.version)

import { autoList } from '@/utils/data'
const maxIndex = autoList.length - 1
const VectorTileServer = 'http://172.18.2.90:6081/arcgis/rest/services/Hosted/HZ_Dark/VectorTileServer'
const mapExtent = {
  spatialReference: {
    latestWkid: 4490,
    wkid: 4490
  },
  xmax: 121.31414657807291,
  xmin: 117.73958118592718,
  ymax: 30.550523245135203,
  ymin: 29.20318705886489
}


export default {
  data () {
    return {
      startZoom: 0,
      zoom: 0,
      geometry: null,
      geometries: [],
      graphicsLayer: null,
      simpleFillSymbol: null,
      crossLayers: [],
      showSlider: false,
      layerIndex: 0,
      interval: 6000
    }
  },
  computed: {

  }
}
