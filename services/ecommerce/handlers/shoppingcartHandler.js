const ShoppingCart = require("../../../pkg/ecommerce/shoppingcartSchema");
const Event = require("../../../pkg/events/eventSchema");

exports.addtoShoppingcart = async (req, res) => {
    try {
        const { decoded } = req;
        const { event, count } = req.body;
        const shoppingcartItem = await ShoppingCart.findOne{{
            beholder: decoded.id,
            event: event,
        }
    }.populate("event");

    let shoppingcartEvent;
    if (!shoppingcartItem) {
        shoppingcartEvent = await Event.findById(event);
    } else {
        shoppingcartEvent = shoppingcartItem.event;
    }
    if (shoppingcartEvent.tickets < count) {
        return res.status(409).send("Tickets Unavaible");
    }
    if (shoppingcartItem) {
        shoppingcartItem.count += parseInt(count);
        if (shoppingcartEvent.tickets < shoppingcartItem.count) {
            return res.status(400).send("Tickets are sold out")
        }
        await shoppingcartItem.save();
    } else if (shoppingcartEvent.tickets > count) {
        await ShoppingCart.create({
            event: event,
            beholder: decoded.id,
            count: count
        });
    }
    res.status(201).json({ status: "success" });
} catch (err) {
    console.log(err);
    return res.status(500).send("internal server error");
}
};

