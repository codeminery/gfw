/**
 * The Urthecast layer module for use on canvas.
 *
 * @return UrthecastLayer class (extends CartoDBLayerClass)
 */
define([
  'abstract/layer/ImageMaptypeLayerClass',
], function(ImageMaptypeLayerClass) {

  'use strict';

  if (!sessionStorage.getItem('urthe')) {
      var params = {
         'color_filter': 'rgb',
         'cloud': '100',
         'mindate': '2000-09-01',
         'maxdate': '2015-09-01'
       }
    } else {
      var params = JSON.parse(sessionStorage.getItem('urthe'));
    }

  var UrthecastLayer = ImageMaptypeLayerClass.extend({
    options: {
      urlTemplate:'http://uc.gfw-apis.appspot.com/urthecast/map-tiles/rgb/{/z}{/x}{/y}?cloud_coverage_lte=100&acquired_gte=2000-09-01T00:00:00Z&acquired_lte=2015-09-01T00:00:00Z'
    }

  });

  return UrthecastLayer;

});
