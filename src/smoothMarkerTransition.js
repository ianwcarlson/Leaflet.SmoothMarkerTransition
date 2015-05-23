L.SmoothMarkerTransition = L.Marker.extend({
  options: {
    traverseTime: 1000,
    clickable: false,
    markerID: ''
  },

  _holdOffTransition: false,

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
    // Not why I can't do this on initialize()
    this._applyStyleChanges();
    // Move to the next position
    this.setLatLng(latlngs);
  },

  getMarkerID: function(){
    /*
    Fetches markerID 

    Returns:
      A string representing the markerID
    */
    return this.options.markerID;
  },

  disableTransition: function(){
    /*
    Disables the transition animation.  Used primarly to work around
    zooming animations that can be annoying
    */
    this._holdOffTransition = true;
    if (L.DomUtil.TRANSITION) {
      if (this._icon) { this._icon.style[L.DomUtil.TRANSITION] = ''; }
      if (this._shadow) { this._shadow.style[L.DomUtil.TRANSITION] = ''; }
    } 
  },

  enableTransition: function(){
    /*
    Re-enables transition animation.  By default, the animation will be 
    enabled
    */
    this._holdOffTransition = false;
  },

  setTransitionTime: function(transitionTime){
    /*
    Set transition time

    Args:
      transitionTime: A number representing the transition time in milliseconds
    */
    this.options.traverseTime = transitionTime;
    this._applyStyleChanges();     
  },

  _applyStyleChanges: function(){
    /*
    Apply style changes to marker object.  Sets the CSS transition attribute
    */
    if (L.DomUtil.TRANSITION && !this._holdOffTransition) {
      if (this._icon) { this._icon.style[L.DomUtil.TRANSITION] = ('all ' + this.options.traverseTime + 'ms linear'); }
      if (this._shadow) { this._shadow.style[L.DomUtil.TRANSITION] = 'all ' + this.options.traverseTime + 'ms linear'; }
    }  
  }
});

L.smoothMarkerTransition = function (latlngs, options) {
  return new L.smoothMarkerTransition(latlngs, options);
};
