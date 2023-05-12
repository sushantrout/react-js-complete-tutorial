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

## Props (Props is read only)

```
  const PropExample = ({name} : any) => <h1>Prop Example {name}</h1>
  
  <PropExample name="1 as Prop"></PropExample>
  <PropExample name="2 as prop"></PropExample>
```

## State vs Props

props- props get passed to the componet
Functiona Parameters
props are immutable
props- Functiinal Compnent
this.props in class componnet

state- state ismanaged in the compnent
variables declares in the function body
state can be changed
useState Hook
this.state

setState is asynchronous function


```
  this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
    console.log(this.state.count);
    
    
    Always the console will print the current value but not the upadted value so we need to write in the call back function.
    
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    }, () => {
      console.log(this.state.count);
    });
    
    React bind multiple setState method into one if we want to make it call multiple time we need to pass as one function
    
    this.setState((prevState) => ({
        count: prevState.count + 1
      }));
    
```

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




toggleGroup(groupName: string) {
  const groupOptions = this.options.filter((option) => option.group === groupName);

  if (groupOptions.length > 0) {
    const isCollapsed = groupOptions[0].collapsed;

    groupOptions.forEach((option) => {
      option.collapsed = !isCollapsed;
    });

    const optionElements = document.querySelectorAll(`.option-item[data-group="${groupName}"]`);

    if (optionElements) {
      optionElements.forEach((option) => {
        if (isCollapsed) {
          option.classList.remove('hidden');
        } else {
          option.classList.add('hidden');
        }
      });
    }
  }
}


<ng-template let-item="item" let-itemIndex="index" let-group="group" let-groupIndex="groupIndex">
    <div class="option-item" [attr.data-group]="group" [ngClass]="{ hidden: item.collapsed }">
      <input type="checkbox" [checked]="item.checked" (change)="onChange(item)" />
      <span>{{ item.name }}</span>
    </div>
    <div class="group-toggle" *ngIf="groupIndex === 0 || group !== options[itemIndex - 1].group">
      <span (click)="toggleGroup(group)">+</span>
    </div>
  </ng-template>
