# Leaflet.SmoothMarkerTransition
Plugin for Leaflet that extends the basic marker and whenever position is updated the marker will use CSS transition to move to the new position.  This repo is highly inspired by this [Leaflet plugin](https://github.com/openplans/Leaflet.AnimatedMarker).

This type of animation is good for real-time mapping applications that update GPS coordinates at regular intervals.  Without the animation, the markers have stuttered movement.

For more about [Leaflet](http://leafletjs.com/)

# Running Demo
To run the example app locally:
- Install [Node](http://nodejs.org/)
- Install [Git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Git clone this repo `git clone https://github.com/ianwcarlson/Leaflet.SmoothMarkerTransition` in your development directory
- Navigate to new project file and Install NPM packages
```
npm install
```
- Start server
```
node example/server.js
```
- Open a browser up to `localhost:3698`


