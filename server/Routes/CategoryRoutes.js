import express from "express";
import asyncHandler from "express-async-handler";
import Category from "./../Models/CategoryModel.js";

const categoryRoute = express.Router();
//CREATE CATEGORY
categoryRoute.post(
    "/category/create",
    asyncHandler(async (req, res, next) => {
        try {
            const category = await Category.create(req.body);
            res.status(201).json({
                success: true,
                category
            })     
        } catch (error) {
            console.log(error);
            next(error) 
        }
    })
);

//GET ALL CATEGORIES
categoryRoute.get(
    "/category/all",
    asyncHandler(async (req, res, next) => {
        try {
            const category = await Category.find();
            res.status(201).json({
                success: true,
                category
            })     
        } catch (error) {
            console.log(error);
            next(error) 
        }
    })
);

export default categoryRoute;





