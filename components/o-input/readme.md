# @o-rango/button
Provides feedback messages for  user actions with alert messages.

[![npm version](https://badge.fury.io/js/%40o-rango%2Fo-input.svg)](https://badge.fury.io/js/%40o-rango%2Fo-input)

[![Edit o-input on codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/6yrk93qw23)
## Demo
![](./docs/o-input_demo.gif)

## Get Started 
First, npm install within the project or use it directly from CDN:

```
npm install @o-rango/o-input --save
```
or
```html
<script src="./node_modules/@o-rango/o-input/dist/o-input.js"></script>
// OR
<script src="https://unpkg.com/@o-rango/o-input/dist/o-input.js"></script>
```

### Usage example 

Button usage examples
```html
	  <o-input type="default" fill="solid">Submit</o-input>
		<o-input type="default" disabled fill="solid">Submit</o-input>
		<o-input type="default" fill="outline">Submit</o-input>
		<o-input type="default" disabled fill="dashed">Submit</o-input>
		<o-input type="default" fill="dashed">Submit</o-input>
		<o-input type="default" disabled fill="outline">Submit</o-input>
		<o-input type="default" rounded fill="outline">Submit</o-input>
		<o-input type="default" disabled rounded fill="outline">Submit</o-input>
```

Properties

```js
//o-input
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


```css
 /* Generic Colors variables*/
 --o-input-default: #FAFBFC;
 --o-input-error : #DE350B;
 --o-input-warning:#FFC400;
 --o-input-info:  #0065FF;
 --o-input-success:#36B37E;

 /* Size Style variables  & Font Style variables */
 --o-input-height : 3.5em;
 --o-input-font-size :14px;
 --o-input-font-weight : 600;
 --o-input-font-family : 'San Francisco', -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', 'Helvetica Neue', Helvetica, sans-serif;
 --o-input-font-color-light : #FFFFFF;
 --o-input-font-color-dark : #091E42;

```
