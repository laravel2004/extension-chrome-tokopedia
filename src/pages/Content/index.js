function addBlock() {
  const container = document.querySelector('.css-rjanld');
  if (container) {
    const productContainer = container.querySelector(
      "[data-testid='divSRPContentProducts']"
    );
    if (productContainer) {
      Array.from(productContainer.children).map((item, index) => {
        console.log(item);
        Array.from(item.children).map((product, key) => {
          if (product.classList.contains('css-llwpbs')) {
            const cardProduct = product.querySelector(
              '.css-54k5sq .css-uwyh54 .css-qa82pd .css-1c4umxf .css-1izdl9e'
            );
            const button = document.createElement('button');
            button.innerText = 'Block';
            cardProduct.append(button);
            button.onclick = () => {
              cardProduct.style.display = 'none';
              chrome.runtime.sendMessage({
                type: 'product',
                data: {
                  item: product.querySelector('.css-1f2quy8 a').href,
                  index: key,
                },
              });
            };
          }
        });
      });
    }
  }
}

document.onreadystatechange(addBlock());
