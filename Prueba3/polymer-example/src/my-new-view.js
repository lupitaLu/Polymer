import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-checkbox/paper-checkbox.js'
import '@polymer/paper-input/paper-input.js'
import '@polymer/paper-button/paper-button.js'

class MyNewView extends PolymerElement {
 constructor() {
  super();
 }
 static get template() {
  return html`
   <style include="shared-styles">
    :host {
     display: block;

     padding: 10px;
    }
   </style>

   <div class="card">
    <div class="circle">1</div>
    <h1>New View</h1>
    <paper-checkbox>Ready to deploy!</paper-checkbox>
    <p>Hello [[nameVisitor]]</p>
    <paper-input label="Enter your name!" char-counter value="{{nameVisitor}}"></paper-input>
    <paper-button raised onclick="alert('alerta de envio')">Send</paper-button>
   </div>
  `;
  }

  static get properties () {
   return {
    nameVisitor: {
     type: String,
     value: ''
    }
   };
  }

 }

window.customElements.define('my-new-view', MyNewView);

