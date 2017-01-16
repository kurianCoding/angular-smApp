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
#### Scope of directive
When directive is declared a scope is created along with it. This scope is shared between all same directive. We can make this scope isolated from other scopes of similar directives or it can inherit from root scope or parent scope.
# Module
# Dependency Injection
