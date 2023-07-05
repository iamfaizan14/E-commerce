export const createProductController = async (req, res) => {
  try {
    // const {}
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while creating product",
      error: error.message,
    });
  }
};
