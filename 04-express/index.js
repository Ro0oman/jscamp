import express from 'express';
import jobs from './jobs.json' with { type: 'json' };

const PORT = process.env.PORT || 3000;

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

app.get('/get-jobs', (req, res) => {
    return res.json(jobs);
});

app.get('/get-job/:id', (req, res) => {
    const jobId = parseInt(req.params.id, 10);
    const job = jobs.find(j => j.id === jobId);
    console.log(job);
    if (!job) {
        return res.status(404).json({ error: 'Job not found' });
    }
    return res.json(job);
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});