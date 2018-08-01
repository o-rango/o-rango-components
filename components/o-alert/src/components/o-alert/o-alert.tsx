// Hack For CssClassMap
export type CssClassMap = { [className: string]: boolean };
import { Component , Prop} from '@stencil/core';

@Component({
  tag: 'o-alert',
  styleUrl: 'o-alert.scss',
  shadow: true
})
export class OAlertComponent {
  @Prop() name?: string;
  @Prop() align: string = 'center' // left,right,center ;
  @Prop() type: string = 'default' //default, error, warning , info , success;
  @Prop() line: boolean= false;


  render() {
    const types = ['info', 'success','error','warning','default'];

    const cssClassName = types.includes(this.type) && this.line ? `o-alert-line-${this.type}`
                                                                : `o-alert-${this.type}`;
    const typeClasses : CssClassMap = {
      'o-alert' : true,
      'o-alert-text-light' : types.slice(0,3).includes(this.type) && !this.line,
      'o-alert-text-dark'  : types.slice(3,5).includes(this.type) || this.line,
      ... {[cssClassName]:true }
    }

    const alignClasses : CssClassMap = {
      'wrap' : true,
      'o-alert-align-center' : this.align === 'center',
      'o-alert-align-left' : this.align === 'left',
    }

    return (
      <div id={this.name} class={typeClasses} role="alert">
            <slot name="start"></slot>
            <span class={alignClasses}><slot></slot></span>
            <slot name="end"></slot>
      </div>
    );
  }
}
