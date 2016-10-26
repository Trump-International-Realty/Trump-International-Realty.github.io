---
layout: default
listing: true
title: 415 Greenwich Street - The
img:
 - img/415green/TRMP1517223_Photo_1.jpg
 - img/415green/TRMP1517223_Photo_2.jpg
 - img/415green/TRMP1517223_Photo_3.jpg
 - img/415green/TRMP1517223_Photo_4.jpg
 - img/415green/TRMP1517223_Photo_5.jpg
 - img/415green/TRMP1517223_Photo_6.jpg
 - img/415green/TRMP1517223_Photo_7.jpg
location: Tribeca
price: $400 - $600
bedrooms: studio
bathrooms: 1
description: For America’s Neediest
url: listing_3.html
sqfeet: 1,433
agent: 
 name: Jeanine Le Ny
 img: img/agents/jleny.jpg
 title: Licensed Associate Re Broker - NY
 email: 
 phone: 347.620.4641
---

<div id="content">
  <div id="blurred_overlay"></div>

  <div id="full_content">

    <a href="javascript:window.history.back(-1);" id="back">Back to Search</a>




    {% include listing-title.html page=page %}
    
    {% include listing-gallery.html page=page %}

    <div id="share" class="social">
      <p><strong>SHARE LISTING</strong></p>
      <span class='st_facebook_button'></span>
      <span class='st_twitter_button'></span>
      <span class='st_linkedin_button'></span>
      <span><a style="color: #000" href="/cdn-cgi/l/email-protection#87b8a1f4f2e5ede2e4f3bad3f5f2eaf7a7cee9f3e2f5e9e6f3eee8e9e6eba7d5e2e6ebf3fea1e5e8e3febacbe8e8eca2b5b7e6f3a2b5b7f3efeef4a2b5b7e0f5e2e6Xt%20listing%20I%20found%20-%20https://www.trumpinternationalrealty.com/listings/TRMP1517223">EMAIL</a></span>
    </div>
    <div class="clear"></div>
    {% include listing-property-bar.html page=page %}
    <!-- Left Block -->
    <div id="property_left">

      <div id="property_desc" class="property_box">
        <h3>Sick people </h3>


        <p>Rarely available high floor AC line in the Sutton House, one of the Sutton areas most sought after buildings, is now available to any chronically sick individual who lost their healthcare after the Affordable Care Act was repealed. This bright corner unit offers skyline and city views to the west and north, perfect for someone who can’t afford their expensive brand name prescription drugs and is just waiting to die. This extremely quiet apartment will prepare you for your next residence - at the graveyard!</p>


        <p><i>Brought to you by TRMP - Trump International Realty</i></p>
      </div>
      <div id="property_feat" class="property_box">
        <h3>Features </h3>
        <ul>


















          <li>Garage</li>





          <li>Healthclub</li>





          <li>Doorman</li>


          <br class="clear">
        </ul>
      </div>


      <div id="property_calc" class="property_box">
        <h3>Mortgage Calculator</h3>
        <form action="#" id="mortgage_calc">
          <table cellpadding="2" cellspacing="0" border="0" width="100%">
            <tr>
              <td class="labeltxt" align="right">Sale Price</td>
              <td class="elemnt"><input type="text" size="10" name="sale_price" id="sale_price" value="4995000"></td>
              <td class="labeltxt" align="right">% Down</td>
              <td class="elemnt"><input type="text" size="5" name="down_percent" id="down_percent" value="20"></td>
            </tr>
            <tr>
              <td class="labeltxt" align="right">Length of Mortgage</td>
              <td class="elemnt"><input type="text" size="3" name="year_term" id="year_term" value="30" placeholder="years"></td>
              <td class="labeltxt" align="right">Annual Interest Rate</td>
              <td class="elemnt"><input type="text" size="5" name="annual_interest_percent" id="annual_interest_percent" value="4"></td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td><input type="submit" id="mortgage_calc_submit" value="Calculate"><br></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>
        </form>
        <div id="mortgage_result"></div>
      </div>

    </div>

    <!-- Right Block -->
    <div id="property_right">
      <!-- Agent -->
      
      {% include listing-agent.html agent=page.agent %}
      <!-- Details -->
      <div id="property_details" class="property_box">
        <h3>Key Details</h3>
        <table id="key_details">
          <tbody>
            <tr>
              <td>Web Id</td>
              <td>TRMP1517223</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>PERM OFF MKT</td>
            </tr>

            <tr>
              <td>Apartment</td>
              <td>THE</td>
            </tr>

            <tr>
              <td>Neighborhood</td>
              <td>


                Tribeca


              </td>
            </tr>

            <tr>
              <td>Type</td>
              <td>CONDO</td>
            </tr>
            <tr>
              <td>Building Type</td>
              <td>LOFT</td>
            </tr>
            <tr>
              <td>Year Built</td>
              <td>1912</td>
            </tr>


            
          </tbody>
        </table>
      </div>
      <!-- Location -->
      <div id="property_loc" class="property_box">
        <h3>Location</h3>
        <script src="/js/map.js"></script>
        <link rel="stylesheet" href="https://www.trumpinternationalrealty.com/themes/third_party/gmap/css/infobox.css" media="screen, projection">

        <script type="text/javascript" src="https://maps.google.com/maps/api/js?sensor=true&amp;key=&amp;language=en"></script>
        <script type="text/javascript" src="https://www.trumpinternationalrealty.com/themes/third_party/gmap/javascript/infobox.js"></script>
        <script type="text/javascript" src="https://www.trumpinternationalrealty.com/themes/third_party/gmap/javascript/markerclusterer.js"></script>
        <div id="map" class="google-map" style="width:100%;height:240px"></div>
        <script type="text/javascript">

        google.maps.visualRefresh = true;

        var map_options       = {zoom: 12, center: new google.maps.LatLng(0,0), mapTypeId: google.maps.MapTypeId.ROADMAP, no_div: false, scrollwheel: false};
        var map_canvas        = document.getElementById("map");
        var map_map         = new google.maps.Map(map_canvas, map_options);
        var map_bounds        = new google.maps.LatLngBounds();
        var map_markers       = [];
        var map_window        = {};
        var map_windows       = [];
        var map_responses       = [];
        var map_html        = [];
        var map_waypoints       = [];
        var map_regions       = [];
        var map_isRetina      = window.devicePixelRatio > 1;
        var map_geocoder      = new google.maps.Geocoder();
        var map_directionsService   = new google.maps.DirectionsService();
        var map_directionsDisplay = new google.maps.DirectionsRenderer({map: map_map});
        var map_clusterOptions    = {maxZoom: 0, gridSize: 0, styles:[]};
        var map_cluster       = new MarkerClusterer(map_map, map_markers, map_clusterOptions);
        var map_oms         = false;
        </script>
        <script type="text/javascript">
        var map_styleType = new google.maps.StyledMapType(stylez, map_options);
        map_map.mapTypes.set('map_styleType', map_styleType);
        map_map.setMapTypeId('map_styleType');</script>

        <script type="text/javascript">map_map.setCenter(new google.maps.LatLng(40.7217569,-74.0094353));</script><script type="text/javascript">map_map.setZoom(13);</script><script type="text/javascript">
        var index = map_markers.length;
        var newMarker   = new google.maps.Marker({map: map_map, icon: {url: "/images/site/icon_map.png"}, position: new google.maps.LatLng(40.7217569,-74.0094353)});
        var isDuplicate = false;
        
        if(typeof map_positions == "undefined") {
          map_positions = [];
        }
        
        if(map_markers.length > 0) {
          for(var i = 0; i < map_markers.length; i++) {

            var marker = map_markers[i];
            
            var a = newMarker.getPosition();
            var b = marker.getPosition();

            if(a.lat() == b.lat() && a.lng() == b.lng()) {
              newMarker.setMap(null);
            }   
          };
        }
        
        map_positions.push(newMarker.getPosition());
        map_markers[index] = newMarker;map_oms ? map_oms.addMarker(map_markers[index]) : false;map_markers[index].index = 0;
        (function () {
          var infowindow  = new google.maps.InfoWindow({content: '<div class="ui-infowindow-content"><a target="_blank" href="https://www.google.com/maps/dir/Current+Location/415 Greenwich Street New York NY 10013"><h4 style="color: #000;">415 Greenwich Street New York NY 10013</h4></a></div>'}); 
          var obj     = map_markers[index];

          map_windows.push(infowindow); 

          var callback = function(obj, e) {
            var currentPos = e.latLng;

            obj.window.setPosition(currentPos);

            if(obj.strokeColor) {
              obj.window.open(map_map);
            }
            else {
              obj.window.open(map_map, obj);
            }
          };  

          obj.window = infowindow;    

          if(!map_oms) {
            google.maps.event.addListener(obj, "click", function(e) {
              callback(obj, e);         
            });
          }
          else if(!map_oms.clickEventAdded) {
            map_oms.addListener("click", function(marker, e) {
              callback(marker, e);
            });

            map_oms.addListener("spiderfy", function(markers) {
              for(var x in map_windows) {
                var window = map_windows[x];

                window.close();
              }
            });

            map_oms.clickEventAdded = true;
          }

          map_window = infowindow;
        })();
        </script>

      </div>
    </div>
    <div class="clear"></div>

    <p id="disclaimer"><span>DISCLAIMER:</span> All information regarding a property (whether for sale or for rental), as well as information regarding related taxes or financing, is from sources deemed reliable.  However, no representation or warranty is made as to the accuracy of any such information, and such information is subject to errors, omission, change of price, rental, commission, prior sale, lease or financing, or withdrawal without notice.  All dimensions are approximate.  For exact dimensions, we advise you to hire your own architect or engineer. The number of bedrooms listed is not a legal conclusion. Each person should consult with his/her own attorney, architect or zoning expert to make a determination as to the number of rooms in the unit that may be legally used as a bedroom.</p>
  </div>
</div>