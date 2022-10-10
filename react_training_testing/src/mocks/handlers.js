import { rest } from 'msw';

export const handlers = [
    rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) =>{
        return res(
            ctx.json([
                {"id": 1,name: 'Praveen Joshi', username: 'praveen'}
            ])
        )
    }),

    rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) =>{
        return res(
            ctx.json([
                {"id": 1,name: 'Praveen Joshi', username: 'praveen'}
            ])
        )
    })
]