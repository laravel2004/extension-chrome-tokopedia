console.log('This is the background page.');
console.log('Put the background scripts here.');

console.log('hallo');
let linkBlock = [];
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type == 'product') {
    linkBlock.push(request.data);
  }
  console.log(linkBlock);
});
