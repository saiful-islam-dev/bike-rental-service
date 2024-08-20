"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/User/user.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    // {
    //   path: '/api/auth',
    //   route: authRoutes
    // },
    // {
    //   path: '/api/bikes',
    //   route: bikeRoutes
    // },
    // {
    //   path: '/api/rentals',
    //   route: rentalRoutes
    // },
    {
        path: '/users',
        route: user_route_1.userRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
