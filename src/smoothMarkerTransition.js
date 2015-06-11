L.SmoothMarkerTransition = L.Marker.extend({
  options: {
    traverseTime: 1000,
    clickable: false,
    markerID: ''
  },

  transitionEnable: true,

  initialize: function (latlngs, options) {
    /*
    Constructor for this class.  Calls base class method with options
    that can be overridden.

    Args:
      latlngs: Lat/long object that contains the new coordinates to move to.
      options: Options that configure this marker class.  The user can apply 
        the L.Marker options extended option defined in this class.
    */
    L.Marker.prototype.initialize.call(this, latlngs, options);
  },

  transition: function(latlngs) {
    /*
    Transitions marker to new location using a CSS transition.
    Args:
      latlngs: Lat/long object that contains the new coordinates to move to.
    */

    // Move to the next position
    if (L.DomUtil.TRANSITION && this.transitionEnable) {
      if (this._icon) { this._icon.style[L.DomUtil.TRANSITION] = ('all ' + this.options.traverseTime + 'ms linear'); }
      if (this._shadow) { this._shadow.style[L.DomUtil.TRANSITION] = 'all ' + this.options.traverseTime + 'ms linear'; }
    }

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
    /*
    Fetches markerID 

    Returns:
      A string representing the markerID
    */
    return this.options.markerID;
  },

  setTransitionTime: function(transitionTime){
    /*
    Set transition time

    Args:
      transitionTime: A number representing the transition time in milliseconds
    */
    this.options.traverseTime = transitionTime;   
  }
});

L.smoothMarkerTransition = function (latlngs, options) {
  return new L.smoothMarkerTransition(latlngs, options);
};
