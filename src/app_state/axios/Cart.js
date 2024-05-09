import instance from ".";

export default class CartService {
    static async cartAdd(id) {
        return instance.post(`/api/v1/cart/add?id=${id}`, "")
    }

    static async cartDelete(id) {
        return instance.post(`/api/v1/cart/remove?id=${id}`,"")
    }

    static async getCart() {
        return instance.get('/api/v1/cart')
    }
}