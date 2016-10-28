/*!
 * ShadowboxAutocloseGallery.js
 *
 * This file was made for users of Shadowbox v3.0.3 source(d7f1f313f0bf5004a9b3df6a0bcddd7ba7d25ae7) on 08-14-2011 by Gilbert Suarez, a fan of Shadowbox-js. Feel free to modify this markup as you see fit.
 *
 * Please report any bugs, suggestions and your own improvements for Topic "Shadowbox Autoclose Gallery DEMO" at the Shadowbox Forum. Thank you!
 * 
 */

       var SBShutdownMethod;
       var SBCountDown;
       var SBForwardShutdown;
       var SBReverseShutdown;

       function SBOpen(){

           if (Shadowbox.hasNext() === true && Shadowbox.gallery.length === 2) {
                SBShutdownMethod = "just2";
                SBCountDown = 2;
           }

           if (Shadowbox.hasNext() === true && Shadowbox.gallery.length > 2) {

                SBShutdownMethod = "over2";

                if (Shadowbox.current > 1) {
                     SBForwardShutdown = "ENABLED";
                     SBReverseShutdown = "Disabled";
                }

                if (Shadowbox.current === 1) {
                     SBForwardShutdown = "Disabled";
                     SBReverseShutdown = "Disabled";
                }

                if (Shadowbox.current === 0) {
                     SBForwardShutdown = "Disabled";
                     SBReverseShutdown = "ENABLED";
                }
           }
       }

        function SBChange() {

            if (Shadowbox.hasNext() === true && SBShutdownMethod == "just2") {

                 SBCountDown -= 1;

                 if (SBCountDown === 0) {
                      setTimeout("Shadowbox.close()", 0);
                 }
            }

            if (Shadowbox.hasNext() === true && SBShutdownMethod == "over2") {

                 if (SBReverseShutdown == "ENABLED" && SBForwardShutdown == "Disabled" && Shadowbox.current === (Shadowbox.gallery.length-1)) {
                      setTimeout("Shadowbox.close()", 0);
                 }

                 if (SBForwardShutdown == "ENABLED" && SBReverseShutdown == "Disabled" && Shadowbox.current === 0) {
                      setTimeout("Shadowbox.close()", 0);
                 }

                 if (Shadowbox.current > 1) {
                      SBForwardShutdown = "ENABLED";
                      SBReverseShutdown = "Disabled";
                 }

                 if (Shadowbox.current === 1) {
                      SBForwardShutdown = "Disabled";
                      SBReverseShutdown = "Disabled";
                 }

                 if (Shadowbox.current === 0) {
                      SBForwardShutdown = "Disabled";
                      SBReverseShutdown = "ENABLED";
                 }
            }
        }
