/** @format */

import { NextFunction, Request, Response } from "express";
import { ErrorHandler, responseHandler } from "../helpers/response.handler";
import authService from "../services/auth.service";
import { cloudinaryRemove, cloudinaryUpload } from "../helpers/cloudinary";

class AuthController {
  async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await authService.signIn(req);
      responseHandler(res, "login success", data);
    } catch (error) {
      next(error);
    }
  }
  async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      await authService.signUp(req);
      responseHandler(res, "register success");
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await authService.updateUser(req);
      responseHandler(res, "register success", data);
    } catch (error) {
      next(error);
    }
  }

  async refreshToken(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await authService.refreshToken(req);
      responseHandler(res, "refresh token success", data);
    } catch (error) {
      next(error);
    }
  }

  async addImageCloudinary(req: Request, res: Response, next: NextFunction) {
    try {
      await authService.uploadAvatar(req);
      responseHandler(res, "upload image success");
    } catch (error) {
      next(error);
    }
  }

  async removeImageCloudinary(req: Request, res: Response, next: NextFunction) {
    try {
      const secure_url = req.body.image_url;
      await cloudinaryRemove(secure_url);
      responseHandler(res, "delete image success", secure_url);
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();
