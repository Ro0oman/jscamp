import {mkdir, readFile, writeFile} from 'node:fs/promises';
import { join } from 'node:path';

const contenido = await readFile('./archivo.txt', 'utf-8');



const outputDir = join('output','files','documents');
await mkdir(outputDir, {recursive: true});

const uppercaseContent = contenido.toUpperCase();

const outputFilePath = join(outputDir, 'archivo-uppercase.txt');

await writeFile(outputFilePath, uppercaseContent);


console.log(contenido)