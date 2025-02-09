function groupProductsByCategory(products) {
  return products.reduce((acc, product) => {
    const { category, name, images } = product;

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(images);
    return acc;
  }, {});
}

// Example usage:

export default groupProductsByCategory;
