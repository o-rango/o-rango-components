# @o-rango/button
Provides feedback messages for  user actions with alert messages.

[![Edit o-button codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/n7m2y31n44)

## Demo
![](./docs/o-button_demo.gif)

## Get Started 
First, npm install within the project or use it directly from CDN:

```
npm install @o-rango/o-button --save
```
or
```html
<script src="./node_modules/@o-rango/o-button/dist/o-button.js"></script>
// OR
<script src="https://unpkg.com/@o-rango/o-button/dist/o-button.js"></script>
```

### Usage example 

Default Alert

```html
  // Default Alert
  <o-button  align="center" type="default">This is an default alert banner !!!!</o-button>
  // Success Alert aligned left
  <o-button align="left" type="success">This is an success alert banner</o-button>
  // Alert using slots 
  <o-button type="error" align="center">
          <div slot="start"> Start</div>
          This is an error alert banner
          <div slot="end">X</div>
  </o-button>
```


Alert with Line

```html
  // Success Alert aligned left
  <o-button line align="left" type="success">This is an success alert banner</o-button>
  // Alert using slots 
  <o-button line type="error" align="center">
          <div slot="start"> Start</div>
          This is an error alert banner
          <div slot="end">X</div>
  </o-button>
```



Properties

```js
//o-content-alert
  @Prop() name?: string;
  @Prop() align: string = 'center' // left,right,center ;
  @Prop() type: string = 'default' //default, error, warning , info , success;
  @Prop() line: boolean= false;

```


### Customization 


```css
 /* Generic Colors variables*/
 --o-button-default: #FAFBFC;
 --o-button-error : #DE350B;
 --o-button-warning:#FFC400;
 --o-button-info:  #0065FF;
 --o-button-success:#36B37E;

 /* Size Style variables  & Font Style variables */
 --o-button-height : 3.5em;
 --o-button-font-size :14px;
 --o-button-font-weight : 600;
 --o-button-font-family : 'San Francisco', -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', 'Helvetica Neue', Helvetica, sans-serif;
 --o-button-font-color-light : #FFFFFF;
 --o-button-font-color-dark : #091E42;

```
