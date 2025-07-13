const createProduct = async (req, res) => {
  const product = req.body; // Assuming product is an object with product details
  return res.status(201).json({
    message: "Product created successfully",
    product: product,
  });
};

const getAllProducts = async (req, res) => {
  return res.status(200).json({
    message: "List of all products",
  });
};

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  return res.status(200).json({
    message: `Product with ID ${productId} updated successfully`,
  });
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  return res.status(200).json({
    message: `Product with ID ${productId} deleted successfully`,
  });
};

export { createProduct, getAllProducts, updateProduct, deleteProduct };
