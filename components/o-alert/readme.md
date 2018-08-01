# o-alert
Provides feedback messages for  user actions with alert messages.

[![Edit o-alert codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/n7m2y31n44)

## Demo
![](./docs/o-alert_demo.gif)

## Get Started 
First, npm install within the project or use it directly from CDN:

```
npm install @o-rango/o-alert --save
```

or

```html
<script src="./node_modules/@o-rango/o-alert/dist/o-alert.js"></script>
// OR
<script src="https://unpkg.com/@o-rango/o-alert/dist/o-alert.js"></script>
```

### Usage example 

Simple

```html
  // Default Alert
  <o-alert  align="center" type="default">This is an default alert banner !!!!</o-alert>
  // Success Alert aligned left
  <o-alert align="left" type="success">This is an success alert banner</o-alert>
  // Alert using slots 
  <o-alert type="error" align="center">
          <div slot="start"> Start</div>
          This is an error alert banner
          <div slot="end">X</div>
  </o-alert>
```


With Line

```html
  // Success Alert aligned left
  <o-alert line align="left" type="success">This is an success alert banner</o-alert>
  // Alert using slots 
  <o-alert line type="error" align="center">
          <div slot="start"> Start</div>
          This is an error alert banner
          <div slot="end">X</div>
  </o-alert>
```

Properties

```html
//o-content-alert
  @Prop() name?: string;
  @Prop() align: string = 'center' // left,right,center ;
  @Prop() type: string = 'default' //default, error, warning , info , success;
  @Prop() line: boolean= false;

```
