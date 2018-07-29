import { Component , Prop} from '@stencil/core';
import {CssClassMap} from './utils'

@Component({
  tag: 'o-alert',
  styleUrl: 'o-alert.css',
  shadow: true
})
export class OAlertComponent {

  @Prop() align: string = 'center' // left,right,center ;
  @Prop() type: string = 'default' //default, error, warning , info , success;
  @Prop() close: boolean = false // sm , md , lg

  render() {

    const typeClasses : CssClassMap = {
      'o-alert' : true,
      'o-alert-align-center' : this.align === 'center',
      'o-alert-align-left' : this.align === 'left',
      'o-alert-default': this.type === 'default',
      'o-alert-error': this.type === 'error',
      'o-alert-warning': this.type === 'warning',
      'o-alert-info': this.type === 'info',
      'o-alert-success': this.type === 'success',
    }

    return (
      <div class={typeClasses} role="alert">
            <slot name="start"></slot>
            <slot></slot>
            <slot name="end"></slot>
      </div>
    );
  }
}
