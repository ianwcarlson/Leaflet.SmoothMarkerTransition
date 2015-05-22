L.SmoothMarkerTransition = L.Marker.extend({
  options: {
    traverseTime: 1000,
    clickable: false
  },

  _holdOffTransition: false,

  initialize: function (latlngs, options) {
    L.Marker.prototype.initialize.call(this, latlngs, options);
  },

  transition: function(latlngs) {
    this._applyStyleChanges();
    // Move to the next position
    this.setLatLng(latlngs);
  },

  getMarkerID: function(){
    return this.options.markerID;
  },

  disableTransition: function(){
    this._holdOffTransition = true;
    if (L.DomUtil.TRANSITION) {
      if (this._icon) { this._icon.style[L.DomUtil.TRANSITION] = ''; }
      if (this._shadow) { this._shadow.style[L.DomUtil.TRANSITION] = ''; }
    } 
  },

  enableTransition: function(){
    this._holdOffTransition = false;
  },

  setTransitionTime: function(transitionTime){
    this.options.traverseTime = transitionTime;     
  },

  _applyStyleChanges: function(){
    if (L.DomUtil.TRANSITION && !this._holdOffTransition) {
      if (this._icon) { this._icon.style[L.DomUtil.TRANSITION] = ('all ' + this.options.traverseTime + 'ms linear'); }
      if (this._shadow) { this._shadow.style[L.DomUtil.TRANSITION] = 'all ' + this.options.traverseTime + 'ms linear'; }
    }  
  }
});

L.smoothMarkerTransition = function (latlngs, options) {
  return new L.smoothMarkerTransition(latlngs, options);
};
