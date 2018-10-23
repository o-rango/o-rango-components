
// Hack For CssClassMap
declare type CssClassMap = { [className: string]: boolean };
import { Component , Prop} from '@stencil/core';




@Component({
  tag: 'o-button',
  styleUrl: 'o-button.scss',
  shadow: true
})


export class OButtonComponent {
  @Prop() size?: string; // lg - md - sm
  @Prop() href?: string;
  @Prop({ reflectToAttr: true }) target?: string = '_blank';
  @Prop() block? : boolean = false;
  @Prop() type: string = 'default' //default, error, warning , info , success;
  @Prop() rounded?: boolean = false;
  @Prop({ reflectToAttr: true }) disabled = false;
  @Prop({ reflectToAttr: true})  fill?: 'dashed' | 'outline' | 'solid' = 'solid';



  onFocus() {
    console.log('Focus');
  }

  onKeyUp() {
    console.log('KeyUp');
  }

  onBlur() {
    console.log('Blur');
  }

  onClick() {
    console.log('Click');
  }

  render() {
    const TagType = this.href ? 'a' : 'button';
    const attrs = (TagType === 'button') ? { type: this.type } : { href: this.href , target: this.target };

    const cssClassName =  `${this.fill}-${this.type}`;

    const cssClasses : CssClassMap = {
          'block' : this.block,
          'rounded' : this.rounded,
          [cssClassName] : true
    }

    return (
      <TagType
        {...attrs}
        class={cssClasses}
        disabled={this.disabled}
        >
        <slot/>
      </TagType>
    );
  }
}
