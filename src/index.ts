// By Westbrook Johnson @westbrookj

import {
  LitElement,
  html,
  customElement,
  TemplateResult,
  css,
} from "lit-element";
import "@spectrum-web-components/card/sp-card.js";

@customElement("my-card")
export default class MyActionGroup extends LitElement {
  static styles = [
    css`
      h1,
      h2 {
        all: unset;
      }
    `,
  ];
  protected render(): TemplateResult {
    return html`
      <sp-card variant="quiet" heading="Card Heading" subheading="JPG Photo">
        <img
          slot="preview"
          src="https://place.dog/200/300"
          alt="Demo Image"
        />
      </sp-card>
    `;
  }
}
