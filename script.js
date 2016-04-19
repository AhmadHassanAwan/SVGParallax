    jQuery(document).ready(function($){
        var steeper = 400;
        var result = "<polygon points='" + $(window).width() + ",0 " + $(window).width() + "," + ($(window).height()+300+steeper) + " " + ($(window).width()/2) + "," + ($(window).height()) + " 0," + ($(window).height()+300+steeper) + " 0,0" + "' vector-effect='non-scaling-stroke'/>";

        $('#myClip').html(result);
        //$('path').attr('d',result);
        //<path d="M0,0 L 0,100 50,50 100,100 100,0 Z" vector-effect="non-scaling-stroke"/>

    });
