# @o-rango/button
Provides set of buttons as ui web components.

## Install
First, npm install within the project or use it directly from CDN:

```
npm install @o-rango/o-button --save
```
```code
lang: html
---
<script src="./node_modules/@o-rango/o-button/dist/o-button.js"></script>
// OR
<script src="https://unpkg.com/@o-rango/o-button/dist/o-button.js"></script>
```

## Usage

Random buttons

```html



	  <o-button type="default" fill="solid">Submit</o-button>
		<o-button type="default" disabled fill="solid">Submit</o-button>
		<o-button type="default" fill="outline">Submit</o-button>
		<o-button type="default" disabled fill="dashed">Submit</o-button>
		<o-button type="default" fill="dashed">Submit</o-button>
		<o-button type="default" disabled fill="outline">Submit</o-button>
		<o-button type="default" rounded fill="outline">Submit</o-button>
    <o-button type="default" disabled rounded fill="outline">Submit</o-button>
    <br>
        <o-button type="default" fill="solid">Submit</o-button>
          
          
            <o-button type="warning" fill="solid">Submit</o-button>
          
          
            <o-button type="error" fill="solid">Submit</o-button>
          
          
            <o-button type="success" fill="solid">Submit</o-button>
          
          
            <o-button type="info" fill="solid">Submit</o-button>
    <br>
     
            <o-button type="default" fill="outline">Submit</o-button>
          
          
            <o-button type="warning" fill="outline">Submit</o-button>
          
          
            <o-button type="error" fill="outline">Submit</o-button>
          
          
            <o-button type="success" fill="outline">Submit</o-button>
          
          
            <o-button type="info" fill="outline">Submit</o-button>
          

```

Rounded buttons

```html
  <p>
            <o-button type="default" block="" rounded="" fill="dashed">Submit</o-button>
          
          <p>
            <o-button type="warning" rounded="" fill="dashed">Submit</o-button>
          
          <p>
            <o-button type="error" rounded="" fill="dashed">Submit</o-button>
          
          <p>
            <o-button type="success" rounded="" fill="dashed">Submit</o-button>
          
          <p>
            <o-button type="info" rounded="" fill="dashed">Submit</o-button>
          
          <p>
            <o-button type="default" rounded="" fill="solid">Submit</o-button>
          
          <p>
            <o-button type="warning" rounded="" fill="solid">Submit</o-button>
          
          <p>
            <o-button type="error" rounded="" block="" fill="solid">Submit</o-button>
          
          <p>
            <o-button type="success" rounded="" fill="solid">Submit</o-button>
          
          <p>
            <o-button type="info" rounded="" fill="solid">Submit</o-button>
          
```


### Properties

```code
lang: js
---
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
lang: css
---
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