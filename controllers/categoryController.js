import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";
//GET ALL CATEGORIES CONTROLLER
export const categoryController = async (req, res) => {
  try {
    const categories = await categoryModel.find();
    res.status(201).send({
      success: true,
      message: "All categories list",
      categories,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all categories",
    });
  }
};

//GET SINGLE CATEGORY BY SLUG CONTROLLER
export const singleCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: "Get single category by slug successfully",
      category,
    });
  } catch (error) {
    res.status(500).send({
      success: true,
      message: "Error while getting single category",
      error,
    });
  }
};

//CREATE-CATEGORY CONTROLLER
export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({
        message: "Name is required",
      });
    }
    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: true,
        message: "Category already exist",
      });
    }
    const category = await new categoryModel({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "New category created",
      category,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while creating new category",
      error,
    });
  }
};

//UPDATE-CATEGORY CONTROLLER
export const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const updateCategory = await categoryModel.findByIdAndUpdate({
      id,
      name,
      slug: slugify(name),
    });
    res.status(201).send({
      success: true,
      message: "Category successfully updated",
      updateCategory,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while updating category",
      error,
    });
  }
};

//DELETE CATEGORY CONTROLLER
export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    await categoryModel.findByIdAndDelete({
      id,
    });
    res.status(201).send({
      success: true,
      message: "Category successfully deleted",
    });
  } catch (error) {
    res.status(500).send({
      success: false.valueOf,
      message: "Error while deleting category",
      error,
    });
  }
};
