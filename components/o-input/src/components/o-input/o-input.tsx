// Hack For CssClassMap
export type CssClassMap = { [className: string]: boolean };
import { Component,Prop} from '@stencil/core';

@Component({
  tag: 'o-input',
  styleUrl: 'o-input.scss',
  shadow: true
})


export class OInputComponent {

  @Prop() autoComplete: any; // lg - md - sm
  @Prop() autoFocus: any;
  @Prop() form:any;
  @Prop() innerRef:any;
  @Prop() maxLength:any;
  @Prop() min:any;
  @Prop() max:any;
  @Prop() name:any;
  @Prop() onBlur:any;
  @Prop() onChange:any;
  @Prop() onFocus:any;
  @Prop() onKeyDown:any;
  @Prop() onKeyPress:any;
  @Prop() onKeyUp:any;
  @Prop() pattern:any;
  @Prop() placeholder:any;
  @Prop() readOnly:any;
  @Prop() required:any;
  @Prop() spellCheck:any;
  @Prop() type:any;
  @Prop() value:any;


  @Prop({ reflectToAttr: true }) disabled : boolean = false

  @Prop() block? : boolean = false;
 // @Prop() type: string = 'default' //default, error, warning , info , success;
  @Prop() rounded?: boolean = false;

  @Prop({ reflectToAttr: true})  fill?: 'dashed' | 'outline' | 'solid' = 'solid';


  render() {

    return (
        <input
        autoComplete={this.autoComplete}
        autoFocus={this.autoFocus}
        disabled={this.disabled}
        form={this.form}
        maxLength={this.maxLength}
        min={this.min}
        max={this.max}
        name={this.name}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onFocus={this.onFocus}
        onKeyDown={this.onKeyDown}
        onKeyPress={this.onKeyPress}
        onKeyUp={this.onKeyUp}
        pattern={this.pattern}
        placeholder={this.placeholder}
        readOnly={this.readOnly}
        required={this.required}
        spellCheck={this.spellCheck}
        type={this.type}
        value={this.value}
        />
    );
  }
}
