const persona: [string, number] = ["Roman", 12]

const [personaNombre, personaAge] = persona

// Coords

type Coordenadas = [lattitude:number, longitude:number]
const [lat, lon]: Coordenadas = [1,2]

//RGB

type RGB = [red:number,green:number,blue:number]
const rojo: RGB= [255,0,0]

//useState React
type EstadoContador = [number, (nuevoValor: number) => void]

//Tublas con REST elements

type StringNumbers= [string, ...number[]]
const data : StringNumbers= ["HOLA",1,1,1,1,1,1,2,1,1,1]

type Config = readonly[server:string, port:number, SSL:boolean]