function Scenario(shortName, content) {
    this.selectorBaseHtml = '.' + shortName + 'Scenario';
    this.title = shortName + ' Scenario';
    this.content = content;
    this.shortName = shortName;
    this.scenarioContentHTML = '<p><b>' + shortName + '</b>- ' + content + '</p>';
}

var self = {
    
    init: function () {
        var selector;
        var Scenarios = [];
        
        //Interoperability
        Scenarios.push(new Scenario('I1', 'A service consumer ‘A’ requests a resource ‘R1’ and receives the representation of the actual state of ‘R1’ in response message.'));
        Scenarios.push(new Scenario('I2', 'A service consumer ‘A’ requests a resource ‘R1’ in a specific format (media type) and receives the representation of the actual state of ‘R1’ in response according to the requested format.'));
        Scenarios.push(new Scenario('I3', 'A service consumer ‘A’ requests a resource ‘R1’ and can understand all information presented in the response message.'));
        
        //Reliability
        Scenarios.push(new Scenario('R1', 'A service consumer ‘A’ requests a resource ‘R1’ in a specific version specified directly in the URI and receives the representation of the actual state of ‘R1’ in response message.'));
        Scenarios.push(new Scenario('R2', 'Based on the domain model, a service consumer ‘A’ builds the URI of resource ‘R1’ and receives the representation of the actual state of ‘R1’ in response.'));
        
        //Security
        Scenarios.push(new Scenario('S1', 'A service consumer ‘A’ with insufficient privileges requests confidential information to a service interface ‘X’, ‘X’ denies the request and informs ‘A’ about the lack of authorization.'));
        Scenarios.push(new Scenario('S2', 'An authenticated and authorized service consumer ‘A’ requests a confidential resource ‘R1’ which it has access to and receives the representation of the actual state of ‘R1’ in response.'));
        
        //Testability
        Scenarios.push(new Scenario('T1', 'A developer wants to test a service. If an error occurs when processing the request, the service can be configured to provide in the response all information to identify the error, including the execution trace.'));
        
        //Performance
        Scenarios.push(new Scenario('P1', 'A service consumer ‘A’ performs an action in a resource ‘R1’ and receives the representation of actual state of ‘R1’ in response in less than n milliseconds.'));
        
        //Availability
        Scenarios.push(new Scenario('Av1', 'The web server where the REST services run is flooded with a number of requests N percent higher than normal and the services remain responsive.'));
        
        //Modifiability
        Scenarios.push(new Scenario('M1', 'A developer modifies the core logic and internal data sources of a service, but the service contract (uniform interface, supported URIs and representations) remains the same; the effort to effect these changes is bound to N person-days.'));
        Scenarios.push(new Scenario('M2', 'The representation structure of a resource ‘R1’ and its relations to other resources change, and resource identification (URI) is not affected.'));
        Scenarios.push(new Scenario('M3', 'Resource representations are modified and the respective services must correctly process requests from service consumers that use the old version and consumers that use the new version of the resources under the same URI.'));
        
        //Safety
        Scenarios.push(new Scenario('Sa1', 'A service consumer ‘A’ performs many requests by using the idempotent method http PUT and the resource has the same value as the first request performed.'));
        Scenarios.push(new Scenario('Sa2', ' A service consumer ‘A’ performs requests by using safe methods (such as http GET and OPTIONS) and the resource is not modified.'));
        
        //Discoverability
        Scenarios.push(new Scenario('D1', 'A service consumer ‘A’ requests a resource ‘R1’ and receives the URIs to find resources associated to ‘R1’'));
        
        //Functionality
        Scenarios.push(new Scenario('F1', 'Based on the default organization of a resource identification in a service interface, a service consumer ‘A’ can compose a resource URI.'));
        Scenarios.push(new Scenario('F2', 'The developer of a service consumer finds clear and up-to-date documentation of the service interface.'));
        Scenarios.push(new Scenario('F3', ' A service consumer ‘A’ performs an action on a resource and receives its identification (URI) in the http header field Location.'));
        Scenarios.push(new Scenario('F4', 'A service consumer ‘A’ requests a representation of some attributes of a resource ‘R1’, defines the number n of pages and receives the actual state of attributes requested of ‘R1’ in n pages in response.'));
        Scenarios.push(new Scenario('F5', 'A service consumer ‘A’ wants to perform operations in a resource and ‘A’ can only use http primitives for that.'));
        
        self.preparePopover(Scenarios);
        self.prepareCarousel();
    },
    prepareCarousel: function() {
        var selector = $('#Carousel-Content');
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
            var idx = $('#myCarousel .item.active').index();
            $('.carousel-linked-nav li:eq(' + idx + ')').addClass('active');
        });
    },
    preparePopover: function(Scenarios) {
        
        var options = {
            placement: function (context, source) {
                var $win, $source, winWidth, popoverWidth, popoverHeight, offset, toRight, toLeft, placement, scrollTop;

                $win = $(window);
                $source = $(source);
                placement = $source.attr('data-placement');
                popoverWidth = 400;
                popoverHeight = 110;
                offset = $source.offset();

                if (placement.match(/^right|left$/)) {
                    winWidth = $win.width();
                    toRight = winWidth - offset.left - source.offsetWidth;
                    toLeft = offset.left;

                    if (placement === 'left') {
                        if (toLeft > popoverWidth) {
                            return 'left';
                        } else if (toRight > popoverWidth) {
                            return 'right';
                        }
                    } else {
                        if (toRight > popoverWidth) {
                            return 'right';
                        } else if (toLeft > popoverWidth) {
                            return 'left';
                        }
                    }
                }

                scrollTop = $win.scrollTop();
                if (placement === 'bottom') {
                    if (($win.height() + scrollTop) - (offset.top + source.offsetHeight) > popoverHeight) {
                        return 'bottom';
                    }
                    return 'top';
                } else {
                    if (offset.top - scrollTop > popoverHeight) {
                        return 'top';
                    }
                    return 'bottom';
                }
            }
        };
        
        //Add popover functionality to scenarios
        Scenarios.forEach(function(cenario) {
            selector = $(cenario.selectorBaseHtml);
            selector.attr('tabindex', 0);
            selector.attr('data-toggle', 'popover');
            selector.attr('data-trigger', 'focus');
            selector.attr('title', cenario.title);
            selector.attr('data-content', cenario.content);
            selector.attr('data-placement', 'right');
            selector.attr('z-index', 1002);
            $(cenario.selectorBaseHtml + 'Content').html(cenario.scenarioContentHTML);
            selector.popover(options);
        });
    }
};

self.init();