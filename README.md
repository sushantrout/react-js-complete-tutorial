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




```
file: File;
workbook: XLSX.WorkBook;
worksheet: XLSX.WorkSheet;

// Method to open and read the Excel file
openExcelFile() {
  this.http.get('assets/path/to/your/excel/file.xlsx', { responseType: 'arraybuffer' })
    .subscribe((arrayBuffer: ArrayBuffer) => {
      const data = new Uint8Array(arrayBuffer);
      const arr = new Array();
      for (let i = 0; i !== data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      const bstr = arr.join('');
      const workbook = XLSX.read(bstr, { type: 'binary' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      this.workbook = workbook;
      this.worksheet = worksheet;
    });
}

```
