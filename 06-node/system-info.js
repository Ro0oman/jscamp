import os from 'node:os'
import ms from 'ms'

console.log('Tiempo de sistema:', ms(os.uptime()*1000, { long: true}));