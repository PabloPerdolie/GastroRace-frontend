import instance from ".";

export default class ItemsService {
    static async getItems() {
        return instance.get('/api/v1/products')
    }

    static async addItem(formData) {
        return instance.post(`/api/v1/products`, formData)
    }

    static async deleteItem(id) {
        return instance.post(`/api/v1/products/remove?id=${id}`)
    }
}