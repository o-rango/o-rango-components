// Hack For CssClassMap
declare type CssClassMap = { [className: string]: boolean };
import { Component , Prop} from '@stencil/core';

@Component({
  tag: 'o-component-template',
  styleUrl: 'o-component-template.scss',
  shadow: true
})
export class OAlertComponent {
  @Prop() alertId?: string;
  @Prop() align: string = 'center' // left,right,center ;
  @Prop() type: string = 'default' //default, error, warning , info , success;
  @Prop() line: boolean= false;



  render() {
    const types = ['info', 'success','error','default','warning'];

    const cssClassName = types.includes(this.type) && this.line ? `o-component-template-line-${this.type}`
                                                                : `o-component-template-${this.type}`;
    const typeClasses : CssClassMap = {
      'o-component-template' : true,
      'o-component-template-text-light' : types.slice(0,4).includes(this.type) && !this.line,
      'o-component-template-text-dark'  : types.slice(4,5).includes(this.type) || this.line,
      ... {[cssClassName]:true }
    }

    const alignClasses : CssClassMap = {
      'wrap' : true,
      'o-component-template-align-center' : this.align === 'center',
      'o-component-template-align-left' : this.align === 'left',
    }

    return (
      <div id={this.alertId} class={typeClasses} role="alert">
            <slot name="start"></slot>
            <span class={alignClasses}><slot></slot></span>
            <slot name="end"></slot>
      </div>
    );
  }
}
