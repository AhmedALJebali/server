"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::cart.cart", ({ strapi }) => ({
  async syncOne(ctx) {
    try {
      const { productid, quantity } = ctx.request.body;
      const userId = ctx.state?.user?.id;

      if (
        !userId ||
        !productid ||
        typeof quantity !== "number" ||
        quantity <= 0
      ) {
        return ctx.badRequest("Invalid input or unauthenticated user.");
      }

      // تحقق من وجود المنتج
      const product = await strapi.entityService.findOne(
        "api::product.product",
        productid
      );
      if (!product) {
        return ctx.notFound("Product not found.");
      }

      // البحث عن العنصر الموجود في السلة باستخدام entityService
      const existingItems = await strapi.entityService.findMany(
        "api::cart.cart",
        {
          filters: {
            user: userId,
            productid,
          },
          limit: 1,
        }
      );

      if (existingItems.length > 0) {
        const updatedCart = await strapi.entityService.update(
          "api::cart.cart",
          existingItems[0].id,
          {
            data: {
              quantity: existingItems[0].quantity + quantity,
            },
          }
        );

        return ctx.send({ message: "Cart item updated", cart: updatedCart });
      } else {
       
        const newCartItem = await strapi.entityService.create(
          "api::cart.cart",
          {
            data: {
              user: userId,
              productid,
              quantity,
            },
          }
        );

        return ctx.send({ message: "Cart item created", cart: newCartItem });
      }
    } catch (err) {
      console.error("❌ syncOne error:", err);
      return ctx.internalServerError("Something went wrong.");
    }
  },
}));
