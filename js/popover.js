function Scenarios(shortName, content) {
    this.selectorBaseHtml = '.' + shortName + 'Scenario';
    this.title = shortName + ' Scenario';
    this.content = content;
    this.shortName = shortName;
    this.scenarioContentHTML = '<p><b>' + shortName + '</b>- ' + content + '</p>';
}

var self = {
    
    init: function () {
        var seletor;
        
        //Interoperability
        var I1Scenario = new Scenarios('I1', 'A service consumer ‘A’ requests a resource ‘R1’ and receives the representation of the actual state of ‘R1’ in response message.');
        var I2Scenario = new Scenarios('I2', 'A service consumer ‘A’ requests a resource ‘R1’ in a specific format (media type) and receives the representation of the actual state of ‘R1’ in response according to the requested format.');
        var I3Scenario = new Scenarios('I3', 'A service consumer ‘A’ requests a resource ‘R1’ and can understand all information presented in the response message.');
        
        //Reliability
        var R1Scenario = new Scenarios('R1', 'A service consumer ‘A’ requests a resource ‘R1’ in a specific version specified directly in the URI and receives the representation of the actual state of ‘R1’ in response message.');
        var R2Scenario = new Scenarios('R2', 'Based on the domain model, a service consumer ‘A’ builds the URI of resource ‘R1’ and receives the representation of the actual state of ‘R1’ in response.');
        
        //Security
        var S1Scenario = new Scenarios('S1', 'A service consumer ‘A’ with insufficient privileges requests confidential information to a service interface ‘X’, ‘X’ denies the request and informs ‘A’ about the lack of authorization.');
        var S2Scenario = new Scenarios('S2', 'An authenticated and authorized service consumer ‘A’ requests a confidential resource ‘R1’ which it has access to and receives the representation of the actual state of ‘R1’ in response.');
        
        //Testability
        var T1Scenario = new Scenarios('T1', 'A developer wants to test a service. If an error occurs when processing the request, the service can be configured to provide in the response all information to identify the error, including the execution trace.');
        
        //Performance
        var P1Scenario = new Scenarios('P1', 'A service consumer ‘A’ performs an action in a resource ‘R1’ and receives the representation of actual state of ‘R1’ in response in less than n milliseconds.');
        
        //Availability
        var Av1Scenario = new Scenarios('Av1', 'The web server where the REST services run is flooded with a number of requests N percent higher than normal and the services remain responsive.');
        
        //Modifiability
        var M1Scenario = new Scenarios('M1', 'A developer modifies the core logic and internal data sources of a service, but the service contract (uniform interface, supported URIs and representations) remains the same; the effort to effect these changes is bound to N person-days.');
        var M2Scenario = new Scenarios('M2', 'The representation structure of a resource ‘R1’ and its relations to other resources change, and resource identification (URI) is not affected.');
        var M3Scenario = new Scenarios('M3', 'Resource representations are modified and the respective services must correctly process requests from service consumers that use the old version and consumers that use the new version of the resources under the same URI.');
        
        //Safety
        var Sa1Scenario = new Scenarios('Sa1', 'A service consumer ‘A’ performs many requests by using the idempotent method http PUT and the resource has the same value as the first request performed.');
        var Sa2Scenario = new Scenarios('Sa2', ' A service consumer ‘A’ performs requests by using safe methods (such as http GET and OPTIONS) and the resource is not modified.');
        
        //Discoverability
        var D1Scenario = new Scenarios('D1', 'A service consumer ‘A’ requests a resource ‘R1’ and receives the URIs to find resources associated to ‘R1’');
        
        //Functionality
        var F1Scenario = new Scenarios('F1', 'Based on the default organization of a resource identification in a service interface, a service consumer ‘A’ can compose a resource URI.');
        var F2Scenario = new Scenarios('F2', 'The developer of a service consumer finds clear and up-to-date documentation of the service interface.');
        var F3Scenario = new Scenarios('F3', ' A service consumer ‘A’ performs an action on a resource and receives its identification (URI) in the http header field Location.');
        var F4Scenario = new Scenarios('F4', 'A service consumer ‘A’ requests a representation of some attributes of a resource ‘R1’, defines the number n of pages and receives the actual state of attributes requested of ‘R1’ in n pages in response.');
        var F5Scenario = new Scenarios('F5', 'A service consumer ‘A’ wants to perform operations in a resource and ‘A’ can only use http primitives for that.');
        
        
        var Scenarios = [];
        Scenarios.push(I1Scenario, I2Scenario, I3Scenario, R1Scenario, R2Scenario, S1Scenario, S2Scenario, T1Scenario, P1Scenario, Av1Scenario, M1Scenario, M2Scenario, M3Scenario, Sa1Scenario, Sa2Scenario, D1Scenario, F1Scenario, F2Scenario, F3Scenario, F4Scenario, F5Scenario);
        
        //Add popover functionality to scenarios
        Scenarios.forEach(function(cenario) {
            selector = $(cenario.selectorBaseHtml);
            selector.attr('tabindex', 0);
            selector.attr('data-toggle', 'popover');
            selector.attr('data-trigger', 'focus');
            selector.attr('title', cenario.title);
            selector.attr('data-content', cenario.content);
            $(cenario.selectorBaseHtml + 'Content').html(cenario.scenarioContentHTML);
            selector.popover({placement : 'top'});
        });
    }
};

self.init();