import express from 'express';
import gradesRoutes from './controllers/gradecontroller.js';

const routes = express.Router();

routes.use('/grades', gradesRoutes);

routes.get('/', (request, response) => {
    return response.json({message: 'hello world!!!'})
})
export default routes;