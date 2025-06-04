import RestaurantModel from "../modal/Resturant.modal.js";
export async function createRestaurant(req, res) {
    console.log("create resturant");
    try {
        let { name, imgUrl, rating, cuisines, deliveryTime } = req.body;
        const newRest = await RestaurantModel.create({ name, imgUrl, rating, cuisines, deliveryTime })
        return res.status(201).json(newRest);
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
}




// {
//     "name": "Burger King",
//     "rating": "4.4",
//     "cuisines": "Burger, Americans",
//     "deliveryTime":"20-25 mins",
//     "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/f67ccf11-0c7e-4ff6-aeb0-1b20304f6783_457403.jpg"
// }