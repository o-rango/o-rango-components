import { Component} from '@stencil/core';

@Component({
  tag: 'o-alert',
  styleUrl: 'o-alert.css',
  shadow: true
})
export class OAlertComponent {
  render() {
    return (
      <div>
        Alert Init
      </div>
    );
  }
}
