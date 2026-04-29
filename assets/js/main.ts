import { copyCodeToClipboard } from './copy-codeblock'

window.copyCode = function (elementId, buttonId) {
  console.log("ele= " + elementId +"  btn= "+ buttonId)
  copyCodeToClipboard(elementId, buttonId)
}
