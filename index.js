/* Shang */
(function ($) {
    $(function () {

        var $carousel = $('.carousel').flickity();

        $carousel.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
            if ( !cellElement ) {
                return;
            }

            // change cell background with .is-clicked
            $carousel.find('.is-clicked').removeClass('is-clicked');
            $( cellElement ).addClass('is-clicked');
            console.log( 'Cell ' + ( cellIndex + 1 )  + ' clicked' );
        });

        /*
        var flkty2 = null,
            current_index2 = null,
            swipe_direction2 = null,
            flkty3 = null,
            current_index3 = null,
            swipe_direction3 = null;

        function bannerSliderPosition() {
            $('#banner-section #product-image-col').css('visibility', 'hidden');
            var window_width = $( window ).width();
            var banner_section_width = document.getElementById('banner-section').clientWidth;
            var margin_right_value = '-' + (((window_width - banner_section_width) / 2)+40);
            if ( window_width < 768 ) {
                $('#banner-section #product-image-col').css({'width':'100%', 'margin-right': margin_right_value + 'px'});	
            }
            else if ( window_width > 767 && window_width <= 1024 ) {
                $('#banner-section #product-image-col').css({'width':'51%', 'margin-right': margin_right_value + 'px'});	
            }
            else if ( window_width > 1024 && window_width <= 1200 ) {
                $('#banner-section #product-image-col').css({'width':'55%', 'margin-right': margin_right_value + 'px'});	
            }
            else if ( window_width > 1200 && window_width <= 1400 ) {
                $('#banner-section #product-image-col').css({'width':'70%', 'margin-right': margin_right_value + 'px'});	
            }
            else if ( window_width > 1400 && window_width <= 1600 ) {
                $('#banner-section #product-image-col').css({'width':'80%', 'margin-right': margin_right_value + 'px'});	
            }
            else if ( window_width > 1600 ) {
                $('#banner-section #product-image-col').css({'width':'100%', 'margin-right': margin_right_value + 'px'});	
            }
            
            setTimeout(() => {
                $('#banner-section #product-image-col').css('visibility', 'visible');
            }, 1000);
        }

        //document.addEventListener('DOMContentLoaded', function () {
            var second_previous = document.querySelector('.page-banner-carousel .carousel2 .flickity-button.flickity-prev-next-button.previous');
            var second_next     = document.querySelector('.page-banner-carousel .carousel2 .flickity-button.flickity-prev-next-button.next');

            var third_previous = document.querySelector('.page-banner-carousel .carousel3 .flickity-button.flickity-prev-next-button.previous');
            var third_next     = document.querySelector('.page-banner-carousel .carousel3 .flickity-button.flickity-prev-next-button.next');

            second_previous.addEventListener('click', function(event) {
                if ( typeof(third_previous) != 'undefined' && third_previous != null ) {
                    third_previous.click();
                    console.log('second_previous clicked!');
                }
            });

            third_next.addEventListener('click', function(event) {
                if ( typeof(second_next) != 'undefined' && second_next != null ) {
                    second_next.click();
                    console.log('third_next clicked!');
                }
            });
        //});

        // window.addEventListener('resize', bannerSliderPosition);

        // configuration
        // Determine which direction is swiped
        function getSwipeDirection(moveVector) {

            var swipeDirection = null;

            if (moveVector.x > 0) {
                console.log('swiped right');
                swipeDirection = 'right';
            } else {
                console.log('swiped left');
                swipeDirection = 'left';
            }
            console.log(swipeDirection);

            return swipeDirection;
        }

        var $carousel2 = $('.carousel2').flickity();
        flkty2 = $carousel2.data('flickity');
        current_index2 = flkty2.selectedIndex;

        var $carousel3 = $('.carousel3').flickity();
        flkty3 = $carousel3.data('flickity');
        current_index3 = flkty3.selectedIndex;

        // Detect swipe direction
        $carousel2.on( 'dragMove.flickity', function( event, pointer, moveVector ) {

            current_index2 = flkty2.selectedIndex;
            swipe_direction2 = getSwipeDirection(moveVector);

        });

        $carousel3.on( 'dragMove.flickity', function( event, pointer, moveVector ) {

            current_index3 = flkty3.selectedIndex;
            swipe_direction3 = getSwipeDirection(moveVector);

        });

        // Do stuff based on a successful swipe and it's direction
        $carousel2.on( 'dragEnd.flickity', function( touchend ) {

            if (flkty2.selectedIndex !== current_index2) {

                // We moved to a new cell
                console.log('Swipe successful to index ' + flkty2.selectedIndex);

                if (swipe_direction2 === 'left') {
                    console.log('Swiped left');
                    //second_next.click();
                    //third_next.click();
                    $carousel3.flickity( 'next', true, false );
                } else {
                    console.log('Swiped right');
                    //second_previous.click();
                    //third_previous.click();
                    $carousel3.flickity( 'previous', true, false );
                }

            } else {

                // We swiped but not enough to move to the next cell
                console.log('swipe failed');

            }
        });

        $carousel3.on( 'dragEnd.flickity', function( touchend ) {

            if (flkty3.selectedIndex !== current_index3) {

                // We moved to a new cell
                console.log('Swipe successful to index ' + flkty3.selectedIndex);

                if (swipe_direction3 === 'left') {
                    console.log('Swiped left');
                    //second_next.click();
                    //third_next.click();
                    $carousel2.flickity( 'next', true, false );
                } else {
                    console.log('Swiped right');
                    //second_previous.click();
                    //third_previous.click();
                    $carousel2.flickity( 'previous', true, false );
                }

            } else {

                // We swiped but not enough to move to the next cell
                console.log('swipe failed');

            }
        });

        $carousel2.on( 'settle.flickity', function() {

            if ( flkty2.selectedIndex != current_index2 ) {
                current_index2 = flkty2.selectedIndex;
            }
        });

        $carousel3.on( 'settle.flickity', function() {

            if ( flkty3.selectedIndex != current_index3 ) {
                current_index3 = flkty3.selectedIndex;
            }
        });
        */

    });
})(jQuery);