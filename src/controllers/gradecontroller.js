import express from 'express';
import {promises as fs} from 'fs';
import path from 'path';

const {readFile, writeFile} = fs;

const routes = express.Router();

routes.post('/', async (request, response) => {
    try {
        
        let grade = request.body;
        
        const filePath = path.resolve('grades.json');

        const data = JSON.parse(await readFile(filePath));

        grade = {id: data.nextId, ...grade, timestamp: new Date().toISOString()};

        data.grades.push(grade);

        await writeFile(filePath, JSON.stringify(data, null, 2));

        response.send(grade);
    } catch (err) {
        response.status(400).send({ error: err.message})        
    }
});
export default routes;