import express from 'express';
import jobs from './jobs.json' with { type: 'json' };
import { DEFAULTS } from './defaults.js';


const PORT = process.env.PORT || DEFAULTS.PORT;

const app = express();


app.use((req, res, next) => {
    const timeString = new Date().toISOString();
    console.log(`[${timeString}] ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Express server!</h1>');
});

app.get('/health', (req, res) => {
    return res.json({ 
        status: 'OK',
        uptime: process.uptime()
     });
});

app.get('/jobs', (req, res) => {
    const {text, title, level, limit = DEFAULTS.LIMIT_PAGINATION, technology, offset = DEFAULTS.LIMIT_OFFSET} = req.query
    let filteredJobs = jobs

    if(text){        
        const searchTerm = text.toLowerCase()
        filteredJobs = filteredJobs.filter(job =>
            job.titulo.toLowerCase().includes(searchTerm) || 
            job.descripcion.toLowerCase().includes(searchTerm)
        )
    }

    if(technology){
        filteredJobs = filteredJobs.filter(job => 
            job.technologias.includes(technology)
        )
    }

    const limitNumber = Number(limit)
    const offsetNumber = Number(offset)

    const paginatedJobs = filteredJobs.slice(offsetNumber,offsetNumber + limitNumber )

    return res.json(paginatedJobs);
});



app.get('/jobs/:id', (req, res) => {
    const jobId = parseInt(req.params.id, 10);
    const job = jobs.find(j => j.id === jobId);
    console.log(job);
    if (!job) {
        return res.status(404).json({ error: 'Job not found' });
    }
    return res.json(job);
});

app.post('/jobs', (req, res) => {
    //post
});

app.put('/jobs/:id', (req, res) => {
    //put
});

app.patch('/jobs/:id', (req, res) => {
    //patch
});

app.delete('/jobs/:id', (req, res) => {
    //delete
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});