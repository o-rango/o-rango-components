# @o-rango/o-component-template
Provides feedback messages for  user actions with alert messages.


## Install
First, npm install within the project or use it directly from CDN:

```
npm install @o-rango/o-component-template --save
```

```code
lang: html
---
<script src="./node_modules/@o-rango/o-component-template/dist/o-component-template.js"></script>
// OR
<script src="https://unpkg.com/@o-rango/o-component-template/dist/o-component-template.js"></script>
```

## Usage

Demo with line

```html
<o-component-template line align="left" type="success"></o-component-template>
```

### Properties

```code
lang: js
---
  @Prop() name?: string;
  @Prop() align: string = 'center' // left,right,center ;
  @Prop() type: string = 'default' //default, error, warning , info , success;
  @Prop() line: boolean= false;
```


### Customization

```code
lang: css
---
 /* Generic Colors variables*/
 --o-component-template-default: #FAFBFC;
 --o-component-template-error : #DE350B;
 --o-component-template-warning:#FFC400;
 --o-component-template-info:  #0065FF;
 --o-component-template-success:#36B37E;

 /* Size Style variables  & Font Style variables */
 --o-component-template-height : 3.5em;
 --o-component-template-font-size :14px;
 --o-component-template-font-weight : 600;
 --o-component-template-font-family : 'San Francisco', -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', 'Helvetica Neue', Helvetica, sans-serif;
 --o-component-template-font-color-light : #FFFFFF;
 --o-component-template-font-color-dark : #091E42;

```
