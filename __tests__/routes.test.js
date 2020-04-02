const request = require('supertest');
const app = require('../server');
const routers = require('../routes')

describe('Post Endpoints', () => {

    describe('Routes', () => {
        it('should have 6 routes', () => {
            expect(routers.stack.length).toBe(6)
        })
    })

    it('should create a new post', async () => {
        const res = await request(app)
            .post('/api/posts')
            .send({
                userId: 1,
                title: 'test is cool',
            })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('post')
    })
})