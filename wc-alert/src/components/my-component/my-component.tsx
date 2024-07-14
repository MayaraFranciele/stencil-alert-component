import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The type 
   */
  @Prop() type: string;
  /**
   * The button state
   */
  @Prop() btnClose: boolean;

  render() {
    return(
      <div class="content-alert information">
        <div class="icon-alert">
          <div class="icons">⚠️</div>
          <div class="icons">ℹ️</div>
        </div>
        <div class="main-alert">
          <slot></slot>
        </div>
        <div class="btn-close">✖️</div>
      </div>
    )
  }
}
