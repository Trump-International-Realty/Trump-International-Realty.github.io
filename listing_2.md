---
layout: default
listing: true
title: 29 West 19th Street - Penthouse
img:
 - img/29west/TRMP1507834_Photo_1.jpg
 - img/29west/TRMP1507834_Photo_2.jpg
 - img/29west/TRMP1507834_Photo_3.jpg
 - img/29west/TRMP1507834_Photo_4.jpg
 - img/29west/TRMP1507834_Photo_5.jpg
 - img/29west/TRMP1507834_Photo_6.jpg
 - img/29west/TRMP1507834_Photo_7.jpg
 - img/29west/TRMP1507834_Photo_8.jpg
location: Flatiron
price: $795 - $1195
bedrooms: 1
bathrooms: 1.5
description: For Mexicans Who Built the Wall
url: listing_2.html
sqfeet: 2,020
agent: 
 name: Michael Weiner
 img: img/agents/micheal.jpg
 title: Licensed Re Salesperson - NY
 email: 
 phone: 646.389.5768
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
      <span><a style="color: #000" href="#">EMAIL</a></span>
    </div>
    <div class="clear"></div>
    {% include listing-property-bar.html page=page %}
    <!-- Left Block -->
    <div id="property_left">

      <div id="property_desc" class="property_box">
        <h3>Mexicans who built the wall</h3>


        <p>We are very appreciative of all the Mexicans who volunteered to build the wall after their government refused to pay for it. This loft like huge one bedroom, one and a half bath corner unit boasts floor to ceiling windows with city views, 9 foot ceiling and gracious closet space for your tools. This diamond in the rough is worthy of your hard work.  Located on Fifth Avenue, it is  just steps from Central Park and some of the city's finest shopping and dining. The utmost in security and comfort, except for comforts related to drugs, gangs or cartels, which are prohibited from our luxury affordable condominiums.</p>


        <p><i>Brought to you by TRMP - Trump International Realty</i></p>
      </div>
      <div id="property_feat" class="property_box">
        <h3>Features </h3>
        <ul>










          <li>Roof Garden</li>


















          <br class="clear">
        </ul>
      </div>


      <div id="property_calc" class="property_box">
        <h3>Mortgage Calculator</h3>
        <form action="#" id="mortgage_calc">
          <table cellpadding="2" cellspacing="0" border="0" width="100%">
            <tr>
              <td class="labeltxt" align="right">Sale Price</td>
              <td class="elemnt"><input type="text" size="10" name="sale_price" id="sale_price" value="5395000"></td>
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
              <td>TRMP1507834</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>CONTRACT SIGNED</td>
            </tr>

            <tr>
              <td>Apartment</td>
              <td>PENTHOUSE</td>
            </tr>

            <tr>
              <td>Neighborhood</td>
              <td>


                Flatiron


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
              <td>1854</td>
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

        <script type="text/javascript">map_map.setCenter(new google.maps.LatLng(40.7399308,-73.9928598));</script><script type="text/javascript">map_map.setZoom(13);</script><script type="text/javascript">
        var index = map_markers.length;
        var newMarker   = new google.maps.Marker({map: map_map, icon: {url: "/images/site/icon_map.png"}, position: new google.maps.LatLng(40.7399308,-73.9928598)});
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
          var infowindow  = new google.maps.InfoWindow({content: '<div class="ui-infowindow-content"><a target="_blank" href="https://www.google.com/maps/dir/Current+Location/29 West 19th Street New York NY 10011"><h4 style="color: #000;">29 West 19th Street New York NY 10011</h4></a></div>'}); 
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