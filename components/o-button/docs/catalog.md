# @o-rango/button
Provides feedback messages for  user actions with alert messages.

[![npm version](https://badge.fury.io/js/%40o-rango%2Fo-button.svg)](https://badge.fury.io/js/%40o-rango%2Fo-button)

[![Edit o-button on codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/6yrk93qw23)
## Demo
![](./docs/o-button_demo.gif)

## Get Started 
First, npm install within the project or use it directly from CDN:

```
npm install @o-rango/o-button --save
```
```code
<script src="./node_modules/@o-rango/o-button/dist/o-button.js"></script>
// OR
<script src="https://unpkg.com/@o-rango/o-button/dist/o-button.js"></script>
```

### Usage example 

Button usage examples
```html
	<script src="https://unpkg.com/@o-rango/o-alert/dist/o-alert.js"></script>

	  <o-button type="default" fill="solid">Submit</o-button>
		<o-button type="default" disabled fill="solid">Submit</o-button>
		<o-button type="default" fill="outline">Submit</o-button>
		<o-button type="default" disabled fill="dashed">Submit</o-button>
		<o-button type="default" fill="dashed">Submit</o-button>
		<o-button type="default" disabled fill="outline">Submit</o-button>
		<o-button type="default" rounded fill="outline">Submit</o-button>
		<o-button type="default" disabled rounded fill="outline">Submit</o-button>
```

Properties

```code
//o-button
  @Prop() size?: string; // lg - md - sm
  @Prop() href?: string;
  @Prop({ reflectToAttr: true }) target?: string = '_blank';
  @Prop() block? : boolean = false;
  @Prop() type: string = 'default' //default, error, warning , info , success;
  @Prop() rounded?: boolean = false;
  @Prop({ reflectToAttr: true }) disabled = false;
  @Prop({ reflectToAttr: true})  fill?: 'dashed' | 'outline' | 'solid' = 'solid';
```

### Customization 


```code
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