var lat = 33.9761; // 用户经度
var lon = -117.9053; // 用户纬度

var stores = [
  {name: "store1", lat: 33.9761, lon: -117.9053, desc: "blah"},
  {name: "store2", lat: 34.0286, lon: -117.8103, desc: "blah"},
  {name: "store3", lat: 33.7288, lon: -117.7659, desc: "blah"},
  {name: "store4", lat: 37.7739, lon: -122.4312, desc: "blah"},
  {name: "store5", lat: 37.3354, lon: -121.8930, desc: "blah"}
  //...更多店铺
];

function Equirectangular(lat1, lon1, lat2, lon2) {
  lat1 = lat1 * Math.PI / 180;
  lat2 = lat2 * Math.PI / 180;
  lon1 = lon1 * Math.PI / 180;
  lon2 = lon2 * Math.PI / 180;
  var R = 3958.75; // 3958.75 = mile; 6371 = km
  var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
  var y = (lat2 - lat1);
  var d = Math.sqrt(x * x + y * y) * R;
  return d;
}

function getNearestStores(latitude, longitude) {
  var minDif = 100; // mile
  var closest = [];

  for (index = 0; index < stores.length; ++index) {
    var dif = Equirectangular(latitude, longitude, stores[index]['lat'], stores[index]['lon']);
    if (dif < minDif) {
      stores[index]['dif'] = dif;
      // 如果需要可提前排序
      closest.push(stores[index]);
    }
  }
  // 显示最近的店铺
  console.log(closest);
}

getNearestStores(34.0522, -118.2436);
