/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface OButton {
      'block': boolean;
      'disabled': boolean;
      'fill': 'dashed' | 'outline' | 'solid';
      'href': string;
      'rounded': boolean;
      'size': string;
      'target': string;
      'type': string;
    }
  }

  interface HTMLOButtonElement extends StencilComponents.OButton, HTMLStencilElement {}

  var HTMLOButtonElement: {
    prototype: HTMLOButtonElement;
    new (): HTMLOButtonElement;
  };
  interface HTMLElementTagNameMap {
    'o-button': HTMLOButtonElement;
  }
  interface ElementTagNameMap {
    'o-button': HTMLOButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'o-button': JSXElements.OButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface OButtonAttributes extends HTMLAttributes {
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
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;