import { Component , Prop ,Element} from '@stencil/core';
import {CssClassMap} from './utils'

@Component({
  tag: 'o-alert',
  styleUrl: 'o-alert.scss',
  shadow: true
})
export class OAlertComponent {
  @Element() el : HTMLElement;
  @Prop() align: string = 'center' // left,right,center ;
  @Prop() type: string = 'default' //default, error, warning , info , success;
  @Prop() line: boolean= false;

  render() {

    const typeClasses : CssClassMap = {
      'o-alert' : true,
      'o-alert-text-light' : ['info' ,'success'].includes(this.type) && !this.line,
      'o-alert-text-dark' :['default','warning','error'].includes(this.type) || this.line,
      'o-alert-line-default': this.type === 'default' && this.line,
      'o-alert-line-error': this.type === 'error'&& this.line,
      'o-alert-line-warning': this.type === 'warning'&& this.line,
      'o-alert-line-info': this.type === 'info'&& this.line,
      'o-alert-line-success': this.type === 'success'&& this.line,
      'o-alert-default': this.type === 'default' && !this.line,
      'o-alert-error': this.type === 'error' && !this.line,
      'o-alert-warning': this.type === 'warning' && !this.line,
      'o-alert-info': this.type === 'info' && !this.line,
      'o-alert-success': this.type === 'success' && !this.line,
    }

    const alignClasses : CssClassMap = {
      'wrap' : true,
      'o-alert-align-center' : this.align === 'center',
      'o-alert-align-left' : this.align === 'left',
    }

    return (
      <div class={typeClasses} role="alert">
            <slot name="start"></slot>
            <span class={alignClasses}><slot></slot></span>
            <slot name="end"></slot>
      </div>
    );
  }
}
