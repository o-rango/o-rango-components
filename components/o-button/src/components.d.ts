/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface OButton {
    'block'?: boolean;
    'disabled': boolean;
    'fill'?: 'dashed' | 'outline' | 'solid';
    'href'?: string;
    'rounded'?: boolean;
    'size'?: string;
    'target'?: string;
    'type': string;
  }
  interface OButtonAttributes extends StencilHTMLAttributes {
    'block'?: boolean;
    'disabled'?: boolean;
    'fill'?: 'dashed' | 'outline' | 'solid';
    'href'?: string;
    'rounded'?: boolean;
    'size'?: string;
    'target'?: string;
    'type'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'OButton': Components.OButton;
  }

  interface StencilIntrinsicElements {
    'o-button': Components.OButtonAttributes;
  }


  interface HTMLOButtonElement extends Components.OButton, HTMLStencilElement {}
  var HTMLOButtonElement: {
    prototype: HTMLOButtonElement;
    new (): HTMLOButtonElement;
  };

  interface HTMLElementTagNameMap {
    'o-button': HTMLOButtonElement
  }

  interface ElementTagNameMap {
    'o-button': HTMLOButtonElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
