import { readdir,  stat } from "node:fs/promises";
import { join } from "node:path";

// Recuperar la carpeta

const dir = process.argv[2] ?? './';

// Formateo

const formatBytes = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

//leer los nombres

const files = await readdir(dir);

//pedir información de cada archivo

const entries = await Promise.all(
    files.map(async (file) => {
        const filePath = join(dir, file);
        const info = await stat(filePath);

        return{
            name: file,
            isDir: info.isDirectory(),
            size: formatBytes(info.size),
            lastModified: info.mtime
        }
    })
)

entries.sort((a, b) => {
    if (a.isDir && !b.isDir) return -1;
    if (!a.isDir && b.isDir) return 1;
});


if (process.argv.includes('--files-only')) {
    let filesOnly = entries.filter(entry => !entry.isDir);

    for (const entrie of filesOnly){
        const icon = '📄' 
        const size =`${entrie.size}`;
        console.log(`${icon} ${entrie.name.padEnd(20)}${size} - Last Modified: ${entrie.lastModified}`);
    }

}else{
    for (const entrie of entries){
        const icon = entrie.isDir ? '📁' : '📄';
        const size = entrie.isDir ? '' : ` - ${entrie.size}`;
        console.log(`${icon} ${entrie.name.padEnd(20)}${size.padEnd(20)} - Last Modified: ${entrie.lastModified}`);
    }
}






//Filter tener en cuenta --files-only 