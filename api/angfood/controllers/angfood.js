'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {homepage: async (ctx) => {
    let entities;
    entities = await strapi.services.angfood.find();
    //console.log("entities", entities);
    return await ctx.render("angfood_amu", {
      data: entities,
      title: "FOOOOOOD",
    });
  },};
