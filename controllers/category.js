import { CategoryModel } from "../models/category.js";

export const getCategories = async (req, res, next) => {
    try {
        // Get query params
        const {   
            filter = "{}",
            sort = "{}",
            fields = "{}",
            limit = 10, 
            skip = 0
        } = req.query;
        // Get all categories from database
        const allCategories = await CategoryModel
            .find(JSON.parse(filter))
            .sort(JSON.parse(sort))
            .select(JSON.parse(fields))
            .limit(JSON.parse(limit))
            .skip(JSON.parse(skip));
        // Return response
        res.status(200).json(allCategories);
    } catch (error) {
        next(error)
    }
}

export const postCategory = async (req, res, next) => {
    try {
        // Add a category to the database
        const newCategory = await CategoryModel.create({
            ...req.body,
            image: req.file.filename
        });
        // Return response
        res.status(201).json(newCategory);
    } catch (error) {
        next(error)
    }
}


