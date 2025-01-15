A dialog is a popup-like element, that opens as an interstatial overlay above the UI, usually in response to user interaction. A modal is dialog that blocks the entire application UI, and prevents interaction with any content outside the modal itself.

Regular dialogs will mostly use position: absolute; , while modals will often be assigned position: fixed;.

To create such an element, several concerns need to be addressed, including accessibility.

The dialog or its wrapper should be a sibling of the content it covers in the DOM.

The content beneath the dialog should be visually obscured by an overlay even if the dialog itself covers only part of the area.

The dialog should use a <dialog> element, or, alternatively, hav a role of dialog.

<section>
  <div id="sectionContent">
   <!-- content -->
  </div>
  <dialog>
   <!-- dialog content -->
   </dialog>
</section>
On opening the dialog, the DOM element wrapping the content (the div with the sectionConent id in the example above) should be assigned an aria-hidden="true" attribute, to prevent assisitive tech, namely screen readers, from interacting with it.

EXTRA: This is the legacy way to do this, but for modals, there's an easier, more modern way to do this with ARIA 1.1. It has less browser suppport, but if you feel like it, you can implement it like that.

On opening the dialog, focus should be set to the first interactive element

The tab-cycled focus should be trapped inside dialog

Any click outside the dialog (on the overlay) should close the dialog

Hitting the Esc key should close the dialog.

On closing the dialog, the aria-hidden attribute should be removed from the DOM element wrapping the content.

On closing the dialog, focus should be restored to the element which was focused before the dialog was opened.

Using React hooks or the render-prop pattern and whichever technical stack you'd like, build a reusable React component that handles the above concerns, while leaving design choices completely in the hands of the component's consumer. The component should only concern itself with providing acceibilty and behaviour primitives for the consumer to hook into, and have absolutely no opinion on how the UI will look like.

Please make sure to avoid direct interaction with the DOM. Hint: React's Portal feature can come in handy when reparenting the dialog.