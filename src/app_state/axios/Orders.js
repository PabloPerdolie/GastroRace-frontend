import instance from ".";

export default class OrderService {
    static async addOrder() {
        return instance.post(`/api/v1/orders`, "")
    }

    static async getOrders() {
        return instance.get('/api/v1/orders')
    }

    static async getAllOrders() {
        return instance.get('/api/v1/orders/admin')
    }
}