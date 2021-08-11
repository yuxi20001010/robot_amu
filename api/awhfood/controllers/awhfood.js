'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {homepage: async (ctx) => {
    let entities;
    entities = await strapi.services.awhfood.find();
    //console.log("entities", entities);
    return await ctx.render("awhfood_amu", {
      data: entities,
      title: "FOOOOOOD",
    });
  },};
