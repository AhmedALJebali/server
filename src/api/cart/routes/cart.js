'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/carts/sync-one',
      handler: 'cart.syncOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },

    // باقي الراوتات التلقائية لو عايز ترجعها يدويًا (اختياري):
    {
      method: 'GET',
      path: '/carts',
      handler: 'cart.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/carts/:id',
      handler: 'cart.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/carts',
      handler: 'cart.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/carts/:id',
      handler: 'cart.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/carts/:id',
      handler: 'cart.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ], 
};  