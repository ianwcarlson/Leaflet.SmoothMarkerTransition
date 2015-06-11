L.SmoothMarkerTransition = L.Marker.extend({
  options: {
    traverseTime: 1000,
    clickable: false,
    markerID: ''
  },

  transitionEnable: true,

  initialize: function (latlngs, options) {
    L.Marker.prototype.initialize.call(this, latlngs, options);
  },

  transition: function(latlngs) {

    if (L.DomUtil.TRANSITION && this.transitionEnable) {
      if (this._icon) { this._icon.style[L.DomUtil.TRANSITION] = ('all ' + this.options.traverseTime + 'ms linear'); }
      if (this._shadow) { this._shadow.style[L.DomUtil.TRANSITION] = 'all ' + this.options.traverseTime + 'ms linear'; }
    }

    // Move to the next position
    this.setLatLng(latlngs);
  },

  disableTransition: function(){
    this.transitionEnable = false;
    if (L.DomUtil.TRANSITION) {
      if (this._icon) { this._icon.style[L.DomUtil.TRANSITION] = 'all ' + 0 + 'ms linear'; }
      if (this._shadow) { this._shadow.style[L.DomUtil.TRANSITION] = 'all ' + 0 + 'ms linear'; }
    }
  },

  enableTransition: function(){
    this.transitionEnable = true;
  },

  getMarkerID: function(){
    return this.options.markerID;
  }
});

L.smoothMarkerTransition = function (latlngs, options) {
  return new L.smoothMarkerTransition(latlngs, options);
};
