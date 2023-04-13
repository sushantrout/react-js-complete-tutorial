# react-js-complete-tutorial
## Component
  Components describe a part of the user interface.
  They are re-usable and can be nested inside other component.
  Types- 
    Functional Componnet
    Class Component
    
## Component TYpe
## Stateless Functional Component-
  ``` 
  function Wellcome(props) {
    return <h1>Hello WOrld</h1>
  }
  ```
  
  -Optional resive properties (props)
  Simple Solution
Use func component as much as possible
Absense of this keyword
Solution without using state
Mailnly responsible for the UI
Stateless/Dumb/Presentatil
  
  
##  Statefull Class Component
  ```
    class Wellcome extends Recat.Component {
      render() {
        return <h1>Hello WOrld</h1>
      }
    }
  ```
  -prop and private state
  -More feature rich
  Maintain there own data- state
  Complex UI logic
  provide lifecycle hooks
  Statefull/smart/Container



## Componnet Type
## Pure Componnet
Pure Compnnet vs Regular Component

## Pure Componnet
  A pure componnet does implmnet the shouldComponnetUpdate method. it always do shallow comparison.
  
  ### Shallow Comparison
  Primitive - a nd b return true if value same
  Complex - same refrence then return true.
  
## Regular Componnet
  A regular componnet does not implmnet the shouldComponnetUpdate method. it always return true by default.
  
##  Memo
 ----------------
