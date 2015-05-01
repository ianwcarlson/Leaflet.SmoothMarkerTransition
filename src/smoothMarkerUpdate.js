L.SmoothMarkerUpdate = L.Marker.extend({
  options: {
    traverseTime: 1000,
    clickable: false
  },

  initialize: function (latlngs, options) {
    L.Marker.prototype.initialize.call(this, latlngs, options);
  },

  transition: function(latlngs) {

    if (L.DomUtil.TRANSITION) {
      if (this._icon) { this._icon.style[L.DomUtil.TRANSITION] = ('all ' + this.options.traverseTime + 'ms linear'); }
      if (this._shadow) { this._shadow.style[L.DomUtil.TRANSITION] = 'all ' + this.options.traverseTime + 'ms linear'; }
    }

    // Move to the next position
    this.setLatLng(latlngs);
  }
});

L.smoothMarkerUpdate = function (latlngs, options) {
  return new L.SmoothMarkerUpdate(latlngs, options);
};
