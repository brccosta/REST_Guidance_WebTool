var self = {
    
    init: function () {        
        self.prepareCarousel();
        self.prepareToggle();
    },
    prepareCarousel: function() {
        var selector = $('#Carousel-Proof');
        selector.carousel({
          interval: 0
        });

        $('.carousel-linked-nav > li > a').click(function() {
            var item = Number($(this).attr('href').substring(1));
            selector.carousel(item - 1);
            $('.carousel-linked-nav .active').removeClass('active');
            $(this).parent().addClass('active');
            return false;
        });

        selector.bind('slid', function() {
            $('.carousel-linked-nav .active').removeClass('active');
            var idx = $('#Carousel-Proof .item.active').index();
            $('.carousel-linked-nav li:eq(' + idx + ')').addClass('active');
        });
        
        $(document).bind('keyup', function(e) {
            if(e.which == 39){
                selector.carousel('next');
            }
            else if(e.which == 37){
                selector.carousel('prev');
            }
        });
    },
    prepareToggle: function() {
        $( "#btn-toggle-subB-q2" ).click(function() {
          $( "#toggle-subB-q2" ).toggle();
        });
    }
};

self.init();