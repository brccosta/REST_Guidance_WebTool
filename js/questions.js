function Question(subsection, question, content) {
    var select = subsection + '_' + question + 'Question';
    this.selectorQuestion = '.' + select;
    this.content = content;
    this.callerSelector = '.' + subsection + question + 'Question';
    this.caller = '(<b><a style="cursor: pointer;" class="' + select + '-btn"><i class="glyphicon glyphicon-share"></i>subsection ' + subsection + ', question ' + question + '</a></b>)</div><div class="panel-body bg-info ' + select + '" style="display: none;">' + content + '</div>';
}

var self = {
    
    init: function () {        
        self.prepareQuestions();
    },
    prepareQuestions: function () {
        var selector;
        var Questions = [];
        
        Questions.push(new Question('B', '1', '<h4>1) What format is used to represent resources?</h4><p>A resource is represented by a document with a media type identified by a name (such as text/xml), and declared in Content-Type http headers. XML (application/xml) is a very common representation format for resources, although other formats, such as HTML, ATOM, and JSON, are also widely used. Development frameworks and platforms provide different levels of support for different formats. The choice of representation format also affects performance and reliability. To achieve interoperability quality attribute scenarios like<a class="I2Scenario badge scenario-badge"><b>I2</b></a>, a REST service may need to use different representations of resources suitable for different devices and systems.</p>'));
        
        Questions.push(new Question('B', '2', '<h4>2) Is a standardized vocabulary defined for the resource?</h4><p>A resource representation should follow a predefined vocabulary. For XML documents, the vocabulary can be defined by an XML schema. The vocabulary should also be standardized across all services that handle that same resource, as previously discussed in question A.3. Using a vocabulary known by service consumers improves interoperability scenario <a class="I3Scenario badge scenario-badge"><b>I3</b></a>. Also, all information needed to understand the resource must be included in the request and response messages (constraint Stateless, session IV). The HATEOAS (Hypermedia as the Engine of Application State) constraint [3] is used for this purpose. This constraint states that the hypermedia document that represents the resource should be used to find associated resources. For instance, the following fragment of the representation of resource “course” from a university contains a link to another resource representing the lecturers that teach the course:<br><code><i>&lt;course&gt; <br>&lt;name&gt; Software Architecture &lt;/name&gt; <br>&lt;area&gt;Software Engineering&lt;/area&gt; <br>&lt;instructors&gt; <br>&lt;uri&gt;/courses/sa/lecturers&lt;/uri&gt; <br>&lt;/instructors&gt; <br>&lt;/course&gt; <br></i></code></p><p>HATEOAS positively affects discoverability scenario <a class="D1Scenario badge scenario-badge"><b>D1</b></a>. The response time for a service request decreases because the representation does not need to bring all information about the linked resources, but only references (hyperlinks). However, a greater number of network requests may be necessary to retrieve linked information and the overall performance may be negatively impacted.</p>'));
        
        Questions.push(new Question('B', '3', '<h4>3) How do you design resources URIs?</h4><p>The Uniform Resource Identifier (URI) is a string of characters used to uniquely identify a web resource. A resource must have at least one URI that makes it addressable via http. Several principles for designing URIs [11] can be used for the specification of REST resource identifiers.</p>   <p> Designing descriptive URIs related to the hierarchy of the domain model improves reliability scenario <a class="R2Scenario badge scenario-badge"><b>R2</b></a>. Examples of descriptive URIs are listed below:<ul><li><a href="http://www.myweather.com/current/city/Brasilia">http://www.myweather.com/current/city/Brasilia</a></li><li><a href="http://www.ufrj.edu/courses/programming101">http://www.ufrj.edu/courses/programming101</a></li></ul></p><p>However, URIs are not always descriptive. An example of URI where a resource is identified by a numeric ID (52545) is <a href="http://www.resoucerslib.com/52545" >http://www.resoucerslib.com/52545</a>. Resource identification by ID positively impacts the modifiability quality attribute scenario <a class="M2Scenario badge scenario-badge"><b>M2</b></a>, but impacts negatively in reliability scenario <a class="R2Scenario badge scenario-badge"><b>R2</b></a>. Other strategies to design resource identifiers can be used. Evaluators should inspect the trade-offs between descriptive and non-descriptive URIs according to both the usability and adaptability requirements. Establishing a pattern to define URIs for REST services is a good practice that positively impacts the functionality scenario <a class="F1Scenario badge scenario-badge"><b>F1</b></a>.</p><p>In general, URIs should use nouns, not verbs. According to the Uniform Interface constraint, the operation to be executed should be specified by the http verb, not in the URI. For example, instead of URI <a href="http://www.ufrj.com/getcourses">http://www.ufrj.com/getcourses</a>, we should use http get on URI <a href="http://www.ufrj.com/courses">http://www.ufrj.com/courses</a>. If verbs are used in the URI, functionality, as in scenario <a class="F5Scenario badge scenario-badge"><b>F5</b></a>, could be negatively impacted.</p>'));
        
        Questions.push(new Question('B', '4', '<h4>4) What is the approach for resource versioning?</h4><p>Representations of resources are accessed by their identification (URI). If a representation is modified, service consumers that request that resource can be negatively impacted. The reason for such modification can be evolution of the domain model that impacts in the resource representation. Versioning of resources is a good practice to solve this problem that positively affects the modifiability scenario <a class="M3Scenario badge scenario-badge"><b>M3</b></a>. A commonly used strategy to version resources is to include a version number within the URL. For instance:<ul><li><a href="http://www.ufrj.com/courses/v1/comperscience">http://www.ufrj.com/courses/v1/comperscience</a></li></ul></p>  <p>Another alternative is to include the version in the http header, for example: “Accept: <i>Content-type: application/xml; version=1.0”</i>. Evaluators should inspect the trade-off between URI versioning and http header versioning. For example, for human users requesting resources via web browsers, URI versioning may be a better solution and, in this case, reliability quality attribute scenario <a class="R1Scenario badge scenario-badge"><b>R1</b></a> is positively impacted.</p>'));
        
        Questions.push(new Question('B', '5', '<h4>5) How do you map operations on resources to http verbs?</h4><p>This question is related to question 2 (<i>How to Identify Resources?</i>). Per the Uniform Interface constraint (Section IV), the interface must use common http methods (also called verbs) to indicate the action to be performed on a resource: POST to create a new resource; PUT to update a resource; DELETE to remove a resource; and OPTIONS to list what methods are supported on a resource. By using http verbs functionality scenarios like <a class="F5Scenario badge scenario-badge"><b>F5</b></a> are promoted.</p>  <p>Important concepts when designing the resource exposure are idempotent and safe methods. Safe methods are http methods that do not modify resources (for instance GET and OPTIONS); they only request information. An idempotent http method is a method that can be called many times without different outcomes. For instance, consider two actions that assign a value to variable var: (a) var = 5; (b) var++. The first example (a) is idempotent; no matter how many times the method is executed the result will always be 5. The second example (b) is not idempotent. Different number of execution results in different outcomes. Http PUT and DELETE are idempotent, POST is not. Safety quality attribute scenarios <a class="Sa1Scenario badge scenario-badge"><b>Sa1</b></a> and <a class="Sa2Scenario badge scenario-badge"><b>Sa2</b></a> are related to idempotent and safe methods.</p>'));
        
        Questions.push(new Question('C', '1', '<h4>1) How resources should be documented?</h4><p>Developers of service consumers need to understand how to interact with the service interface to access and use resources. Effective service interface documentation positively impacts the functionality scenario <a class="F2Scenario badge scenario-badge"><b>F2</b></a>.</p>'));
        
        Questions.push(new Question('C', '2', '<h4>2) How service consumers can perform tests in resources?</h4><p>It is important for service consumers and developers to perform tests in the service interface. Dynamic tests can be executed using a “service sandbox”. Http methods like GET and PUT can be executed against the sandbox environment. This is a typical scenario to improve the testability quality attribute scenario <a class="T1Scenario badge scenario-badge"><b>T1</b></a>.</p>'));
        
        Questions.push(new Question('D', '2', '<h4>2) Does the response http header contain information about the resource?</h4><p>When service consumers perform actions in a resource, the service implementation must include in the http responses the header field “Location” filled with the URI of the manipulated resource. Service consumers can correlate the URI of the new resource created with the URI in the Location header response, positively affecting functionality scenarios like <a class="F3Scenario badge scenario-badge"><b>F3</b></a>.</p>'));
        
        Questions.push(new Question('D', '5', '<h4>5) Is it possible to include the subset of desired attributes in the URI?</h4><p>Suppose a service consumer only wants a subset of attributes and the service interface only supports responses containing the full representation of a resource. In this case, performance and functionality scenarios <a class="P1Scenario badge scenario-badge"><b>P1</b></a> and <a class="F4Scenario badge scenario-badge"><b>F4</b></a> are negatively impacted. A good practice is to include a filter in the URI. For example, the following URI will retrieve only the name and number of credits for courses at UFRJ: http://www.ufrj.com/courses?attributes= name,credits.</p>'));
        
        Questions.push(new Question('D', '6', '<h4>6) How to protect the web server from request overload?</h4><p>Service consumers can perform a huge number of requests resulting in web server overload. Evaluators should ask about mechanisms in place to prevent request overload, and hence promote promote availability, as in scenario <a class="Av1Scenario badge scenario-badge"><b>Av1</b></a>.</p>'));
        
        Questions.push(new Question('E', '2', '<h4>2) What are the security mechanisms for service consumers to perform actions on resources?</h4><p>Some resources are restricted to specific groups of service consumers. Security mechanism to ensure authentication and authorization of service consumers may be required. Some commonly adopted standards are OAuth [12] and OpenID [13]. Http Basic Authentication can also be used. The version 2.0 of OAuth has proven to be a good strategy for secure authorization in REST-based architectures. A typical scenario for related to this question is <a class="S2Scenario badge scenario-badge"><b>S2</b></a>.</p>'));
        
        Questions.forEach(function(question) {
            $(question.callerSelector).html(question.caller);
            $(question.selectorQuestion).html(question.content);
            $(question.selectorQuestion + "-btn" ).click(function() {
              $(question.selectorQuestion).toggle();
            });
        });
    }
};

self.init();