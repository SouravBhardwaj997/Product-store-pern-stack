import sql from "../config/db.js";

const createProduct = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "All fields are requied",
      });
    }
    const { name, price, image } = req.body;
    if (!name || !price || !image) {
      return res.status(400).json({
        success: false,
        message: "All fields are requied",
      });
    }
    const product = await sql`
    INSERT INTO PRODUCTS(NAME, PRICE, IMAGE)
    VALUES(${name},${price},${image}) RETURNING *
    `;
    return res.status(201).json({
      message: "Product created successfully",
      product: product,
    });
  } catch (error) {
    console.log("Error while creating product", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAllProducts = async (_, res) => {
  try {
    const products = await sql`
    SELECT * FROM PRODUCTS
    `;
    return res.status(200).json({
      products,
      success: true,
    });
  } catch (error) {
    console.log("Error while fetching the products", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const { name, price, image } = req.body;
    if (!name || !price || !image) {
      return res
        .status(400)
        .json({ success: false, message: "all fields are required" });
    }
    const updated =
      await sql`UPDATE PRODUCTS SET NAME=${name},PRICE=${price}, IMAGE=${image} WHERE ID=${id}  RETURNING *`;
    return res.status(200).json({
      message: `Product with ID ${id} updated successfully`,
      updated: updated[0],
    });
  } catch (error) {
    console.log("Error while updating the product", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const deleted = await sql`DELETE FROM PRODUCTS WHERE ID=${id}  RETURNING *`;
    return res.status(200).json({
      message: `Product with ID ${id} deleted successfully`,
      deleted: deleted[0],
    });
  } catch (error) {
    console.log("Error while deleting the product", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export { createProduct, getAllProducts, updateProduct, deleteProduct };
