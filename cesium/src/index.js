require('cesium/Widgets/widgets.css');
require('./css/main.css');

import Cesium from 'cesium/Cesium';
var viewer = new Cesium.Viewer('cesiumContainer',{
    baseLayerPicker:false,
    imageryProvider: new Cesium.TileCoordinatesImageryProvider({
        tilingScheme: new Cesium.WebMercatorTilingScheme()
    })
});
viewer.scene.mode = 1;
// var scene = viewer.scene;

// Load the NYC buildings tileset.
// var tileset = scene.primitives.add(new Cesium.Cesium3DTileset({
//     url: 'https://beta.cesium.com/api/assets/1461?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkYWJmM2MzNS02OWM5LTQ3OWItYjEyYS0xZmNlODM5ZDNkMTYiLCJpZCI6NDQsImFzc2V0cyI6WzE0NjFdLCJpYXQiOjE0OTkyNjQ3NDN9.vuR75SqPDKcggvUrG_vpx0Av02jdiAxnnB1fNf-9f7s'
// }));
//
// tileset.readyPromise.then(function (tileset) {
//     viewer.camera.viewBoundingSphere(tileset.boundingSphere);
// })