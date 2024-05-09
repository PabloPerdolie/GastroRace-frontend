import instance from ".";

export default class ItemsService {
    static async getItems() {
        return instance.get('/api/v1/products')
    }

    static async addItem(formData) {
        return instance.post(`/api/v1/products`, formData,
        { 
            headers: {
                'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
            },
        }
        )
    }

    static async deleteItem(id) {
        return instance.delete(`/api/v1/products/remove?id=${id}`)
    }
}