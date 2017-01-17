# Reddit Clone using angular1

# Expressions
angular JS expresssions are those givent between {{}} in the template.
They are executed whenever $watch runs. Some distinct properties of expressions are
*  All expressions executed in the context of the scope have acess to local $scope variables
*  Expressions don't throw errors if there is a typeerror or referenceerror.
*  They do not allow for control flow functions(if/else).
*  They can accept a filter or filter chains.

angular services like $parse, $interpolate can act on expressions.
## Form validation in angular
# Directives
They perform user defined functions on a particular DOM element.
## Definition of A directive
Directive is defined by calling the `directive` method of `angular`.
It takes in two arguments, a name and a function. This function will return an javascript
object that will decide how the the directive is configured. Attributes of this object are
1. *restrict*: To tell angular in which way to declare the attribute, it can be an attribute(A),element(A),class(C)or comment(M). If directive is to be used in more than one way simply include both the flags like EA for being both element and attribute.
-  *priority*: This can be a numerical value(highest being the largest), telling angular the order of priority in which directives are to be executed.
-  *terminal*: Is an attribute that can be set to either true or false. this tells angular whether or not to invoke attirbutes of higher importance on that element.
- *template*: Should either be a string or a function that takes in an html template and variables and returns a string.
- *templateUrl*: Should either be a path to an html template or a function that takes in two arguements and returns the path to an html file.
- *replace*:  Directive template will replace the directive element (<custom-tags></custom-tags>) in the html if this is set to true, otherwise the template will be added as a child of the directive element.
- *scope* : When angular creates scope it will do so by inheriting from parent scope and scope of the sourrounding elements. If we want to isolate the scope of directive we can do soby setting scope={} in the declaration of directive.
- *transclude*: This can be set to true in order to  when we want to create a directive that also takes in the content given by user, in order to use this we must specify in our template, where to include the content given by the user. This is shown by the ng-transclude tag.
- *controller*: This can either be a string or an anonymous function. The string will be the name of a controller declared on the same angular module. In addition to scope, the controller declared inside a directive can also pass in $attrs(attributes of the html element), $element(current directive element), $scope passed into controller will be the scope of the
directive element.
- *controllerAs*: Renaming controllers with more readable names.
- *require*: A string that is the name of another directive on the same application.
- *link*: Javascript expression that executes after the compilation of the directive before the dom element is inserted back in HTML DOM.
- *compile*: Javascript expression that gets executed right before the html component is generated by angular. at this  point data and template have been combined together to create the HTML DOM component.

#### Scope of directive
When directive is declared a scope is created along with it. This scope is shared between all same directive. We can make this scope isolated from other scopes of similar directives or it can inherit from root scope or parent scope.


## Life Cycle of angular directive
angular directives are complied and then linked. Before compliation directive exists as text/code. when compiling angular combines templates and values to render and html. Linking involves puttin this rendered html in the HTML DOM.

#ngModel

# Module
## config
## run
run blocks are javascript expressions are the very first to be executed in angular application.

# Dependency Injection
