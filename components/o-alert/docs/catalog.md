# @o-rango/o-alert
Provides feedback messages for  user actions with alert messages.

[![npm version](https://badge.fury.io/js/%40o-rango%2Fo-alert.svg)](https://badge.fury.io/js/%40o-rango%2Fo-alert)

[![Edit o-alert codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/n7m2y31n44)

## Get Started 
First, npm install within the project or use it directly from CDN:

```
npm install @o-rango/o-alert --save
```

```code
<script src="./node_modules/@o-rango/o-alert/dist/o-alert.js"></script>
// OR
<script src="https://unpkg.com/@o-rango/o-alert/dist/o-alert.js"></script>
```

## o-alert
The HTML specimen allows the documentation of HTML as well as JavaScript and CSS based views.

```html

					<o-alert line align="left" type="success">This is an success alert banner</o-alert>
					<br>
					<o-alert line type="info">This is an success info alert banner</o-alert>
					<br>
					<o-alert line type="warning">This is an warning alert banner</o-alert>
					<br>
					<o-alert line type="error" align="center">
						<div slot="start"> Start</div>
						Error Banner
						<div slot="end">X</div>
					</o-alert>
```

### Properties

```code
//o-content-alert
  @Prop() name?: string;
  @Prop() align: string = 'center' // left,right,center ;
  @Prop() type: string = 'default' //default, error, warning , info , success;
  @Prop() line: boolean= false;

```


### Customization 

```code
 /* Generic Colors variables*/
 --o-alert-default: #FAFBFC;
 --o-alert-error : #DE350B;
 --o-alert-warning:#FFC400;
 --o-alert-info:  #0065FF;
 --o-alert-success:#36B37E;

 /* Size Style variables  & Font Style variables */
 --o-alert-height : 3.5em;
 --o-alert-font-size :14px;
 --o-alert-font-weight : 600;
 --o-alert-font-family : 'San Francisco', -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', 'Helvetica Neue', Helvetica, sans-serif;
 --o-alert-font-color-light : #FFFFFF;
 --o-alert-font-color-dark : #091E42;

```
