import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';

const swaggerDocument = YAML.load(path.resolve(__dirname, './swagger.yaml'));


export default (app: express.Application) => {
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
