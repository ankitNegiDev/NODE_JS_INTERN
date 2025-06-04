import { createRestaurant } from "../controller/resturantController.js";


export function resturantRoutes(app) {
    app.post('/api/restaurant', createRestaurant)
    
}
