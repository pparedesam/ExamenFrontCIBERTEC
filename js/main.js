import { calcularPromedioExcluyendoNotaBaja } from './alumnos.js';
import { generarNumerosPrimos } from './primos.js';
import { generarCamisas } from './ropa.js';
import { OperadorTelefonia, obtenerOperadorConMasPromociones, obtenerMejoresClientesPorOperador } from './operadorTelefonia.js';
import { FondoPension } from './fondoPension.js';
import { EntidadFinanciera, Cliente, evaluarAccesoCredito } from './entidadFinanciera.js';




let alumnos = [
    { nombre: "María López", notas: [14, 15, 16, 17] },
    { nombre: "Pedro Martínez", notas: [10, 11, 12, 13] },
    { nombre: "Sofía García", notas: [18, 19, 19, 20] },
    { nombre: "Juan Rodríguez", notas: [15, 16, 16, 17] },
    { nombre: "Laura Pérez", notas: [19, 19, 20, 20] },
    { nombre: "Carlos Gómez", notas: [12, 13, 13, 14] }
];

console.log('----------PROMEDIO DE NOTAS CON EXCLUSION DE LA MINIMA NOTA----------')
calcularPromedioExcluyendoNotaBaja(alumnos);


console.log('----------NUMEROS PRIMOS----------')
const primos = generarNumerosPrimos();
console.log('Los 40 primeros números primos son:', primos);


let ropaVestir = [
    { tipo: "camisa", marca: "Zara", precio: 35, descripcion: "Camisa de algodón" },
    { tipo: "pantalon", marca: "Levi's", precio: 60, descripcion: "Pantalón denim" },
    { tipo: "chaqueta", marca: "H&M", precio: 45, descripcion: "Chaqueta ligera" },
    { tipo: "falda", marca: "Mango", precio: 40, descripcion: "Falda midi plisada" },
    { tipo: "sueter", marca: "Gap", precio: 50, descripcion: "Suéter de punto" },
    { tipo: "vestido", marca: "Forever 21", precio: 55, descripcion: "Vestido estampado" },
    { tipo: "chaqueta", marca: "Zara", precio: 70, descripcion: "Chaqueta de cuero" },
    { tipo: "pantalon", marca: "Hollister", precio: 65, descripcion: "Pantalón chino" },
    { tipo: "camisa", marca: "Pull&Bear", precio: 30, descripcion: "Camisa de cuadros" },
    { tipo: "vestido", marca: "Stradivarius", precio: 45, descripcion: "Vestido largo" },
    { tipo: "camisa", marca: "Tommy Hilfiger", precio: 50, descripcion: "Camisa de algodón a rayas" },
    { tipo: "pantalon", marca: "Calvin Klein", precio: 70, descripcion: "Pantalón chino de corte recto" },
    { tipo: "vestido", marca: "Ralph Lauren", precio: 120, descripcion: "Vestido de cóctel con falda plisada" },
    { tipo: "camisa", marca: "Hugo Boss", precio: 60, descripcion: "Camisa de lino manga larga" },
    { tipo: "pantalon", marca: "Armani Exchange", precio: 90, descripcion: "Pantalón de vestir slim fit" },
    { tipo: "vestido", marca: "Michael Kors", precio: 150, descripcion: "Vestido largo de noche con escote en V" },
    { tipo: "camisa", marca: "Ralph Lauren", precio: 55, descripcion: "Camisa Oxford de manga corta" },
    { tipo: "pantalon", marca: "Gucci", precio: 200, descripcion: "Pantalón de traje con pinzas" },
    { tipo: "vestido", marca: "Versace", precio: 250, descripcion: "Vestido ajustado con estampado barroco" }

];

generarCamisas(ropaVestir);


const entel = new OperadorTelefonia('Entel');
const bitel = new OperadorTelefonia('Bitel');
const movistar = new OperadorTelefonia('Movistar');
const claro = new OperadorTelefonia('Claro');

const allOperadores = [entel, bitel, movistar, claro];

let clientesDePruebaEntel = [
    { nombre: "Ana García", calificacion: 8, promociones: ["Promo1", "Promo2"], deuda: 100, categoria: "VIP" },
    { nombre: "Luis Fernández", calificacion: 7, promociones: ["Promo3"], deuda: 0, categoria: "Estándar" },
    { nombre: "Juan López", calificacion: 9, promociones: ["Promo1", "Promo3"], deuda: 200, categoria: "Moroso" },
    { nombre: "María Martínez", calificacion: 6, promociones: [], deuda: 300, categoria: "Estándar" },
    { nombre: "Pedro González", calificacion: 5, promociones: ["Promo2"], deuda: 0, categoria: "VIP" },
    { nombre: "Esteban Quito", calificacion: 8, promociones: ["Promo3", "Promo2"], deuda: 220, categoria: "Estándar" },
    { nombre: "Susana Oria", calificacion: 7, promociones: ["Promo1"], deuda: 150, categoria: "Moroso" },
    { nombre: "Tomás Turbado", calificacion: 9, promociones: ["Promo1", "Promo2"], deuda: 300, categoria: "VIP" },
    { nombre: "Elba Lazo", calificacion: 6, promociones: [], deuda: 500, categoria: "Estándar" },
    { nombre: "Armando Paredes", calificacion: 5, promociones: ["Promo3"], deuda: 0, categoria: "VIP" }
];

clientesDePruebaEntel.forEach(cliente => entel.agregarCliente(cliente));

let clientesDePruebaBitel = [
    { nombre: "Sofía Cruz", calificacion: 8, promociones: ["Promo2"], deuda: 150, categoria: "VIP" },
    { nombre: "Ivan Ruiz", calificacion: 6, promociones: ["Promo1", "Promo3"], deuda: 50, categoria: "Estándar" },
    { nombre: "Marta Solano", calificacion: 9, promociones: [], deuda: 0, categoria: "VIP" },
    { nombre: "Oscar Blanco", calificacion: 4, promociones: ["Promo3"], deuda: 300, categoria: "Moroso" },
    { nombre: "Lola Mento", calificacion: 7, promociones: ["Promo2", "Promo3"], deuda: 20, categoria: "Estándar" },
    { nombre: "Luz Cuesta", calificacion: 8, promociones: ["Promo3"], deuda: 0, categoria: "Estándar" },
    { nombre: "Inés Pirable", calificacion: 6, promociones: ["Promo1", "Promo2"], deuda: 180, categoria: "Moroso" },
    { nombre: "René Sados", calificacion: 9, promociones: ["Promo2", "Promo3"], deuda: 20, categoria: "VIP" },
    { nombre: "Aitor Tilla", calificacion: 4, promociones: ["Promo1"], deuda: 300, categoria: "VIP" },
    { nombre: "Alba Bosa", calificacion: 7, promociones: [], deuda: 150, categoria: "Estándar" }
]

clientesDePruebaBitel.forEach(cliente => bitel.agregarCliente(cliente));

movistar.agregarCliente({ nombre: "Carmen Soto", calificacion: 8, promociones: ["Promo1"], deuda: 100, categoria: "VIP" });
movistar.agregarCliente({ nombre: "Alberto Torres", calificacion: 7, promociones: ["Promo2", "Promo3"], deuda: 200, categoria: "Moroso" });
movistar.agregarCliente({ nombre: "Nora Quintana", calificacion: 6, promociones: [], deuda: 400, categoria: "Estándar" });
movistar.agregarCliente({ nombre: "Hugo Varela", calificacion: 9, promociones: ["Promo1", "Promo2"], deuda: 0, categoria: "VIP" });
movistar.agregarCliente({ nombre: "Pilar Campos", calificacion: 5, promociones: ["Promo3"], deuda: 150, categoria: "Estándar" });
movistar.agregarCliente({ nombre: "Elena Nito", calificacion: 8, promociones: ["Promo2"], deuda: 100, categoria: "VIP" });
movistar.agregarCliente({ nombre: "Sara Vista", calificacion: 7, promociones: ["Promo1", "Promo3"], deuda: 200, categoria: "Moroso" });
movistar.agregarCliente({ nombre: "Estela Gartija", calificacion: 6, promociones: [], deuda: 400, categoria: "Estándar" });
movistar.agregarCliente({ nombre: "Marcos Texto", calificacion: 9, promociones: ["Promo1", "Promo2"], deuda: 0, categoria: "VIP" });
movistar.agregarCliente({ nombre: "Lola Mento", calificacion: 5, promociones: ["Promo3"], deuda: 150, categoria: "Estándar" });


claro.agregarCliente({ nombre: "Roberto Moreno", calificacion: 8, promociones: ["Promo1", "Promo2", "Promo3"], deuda: 50, categoria: "VIP" });
claro.agregarCliente({ nombre: "Diana Salazar", calificacion: 7, promociones: [], deuda: 100, categoria: "Estándar" });
claro.agregarCliente({ nombre: "Julio Esteban", calificacion: 9, promociones: ["Promo1"], deuda: 300, categoria: "Moroso" });
claro.agregarCliente({ nombre: "Lucía Méndez", calificacion: 6, promociones: ["Promo2"], deuda: 0, categoria: "VIP" });
claro.agregarCliente({ nombre: "Antonio Gala", calificacion: 5, promociones: ["Promo3"], deuda: 150, categoria: "Estándar" });
claro.agregarCliente({ nombre: "Luz Roja", calificacion: 8, promociones: ["Promo1", "Promo2", "Promo3"], deuda: 50, categoria: "VIP" });
claro.agregarCliente({ nombre: "Helen Chufe", calificacion: 7, promociones: [], deuda: 100, categoria: "Estándar" });
claro.agregarCliente({ nombre: "Armando Casas", calificacion: 9, promociones: ["Promo1"], deuda: 300, categoria: "Moroso" });
claro.agregarCliente({ nombre: "Paco Mer", calificacion: 6, promociones: ["Promo2"], deuda: 0, categoria: "VIP" });
claro.agregarCliente({ nombre: "Dolores Fuertes", calificacion: 5, promociones: ["Promo3"], deuda: 150, categoria: "Estándar" });


console.log('Clientes con mayor calificación para todos los Operadores:', obtenerMejoresClientesPorOperador(allOperadores));
console.log('Operador con más promociones:', obtenerOperadorConMasPromociones(allOperadores).nombre);
console.log('Clientes con deudas en Movistar (Estándar):', movistar.obtenerClientesConDeuda());
console.log('Clientes con deudas en Movistar (VIP):', movistar.obtenerClientesConDeuda('VIP'));


const fondo = new FondoPension();

let aportantesDePrueba = [
    { nombre: "Carlos Alvarado", aniosServicio: 22, montoAportado: 40000 },
    { nombre: "Luisa Martínez", aniosServicio: 30, montoAportado: 50000 },
    { nombre: "Mariana Vargas", aniosServicio: 25, montoAportado: 22000 },
    { nombre: "Jorge Torres", aniosServicio: 28, montoAportado: 30050 },
    { nombre: "Daniela Jiménez", aniosServicio: 21, montoAportado: 45000 },
    { nombre: "Carmen Rivas", aniosServicio: 23, montoAportado: 35000 },
    { nombre: "Pedro Gómez", aniosServicio: 24, montoAportado: 27500 },
    { nombre: "Sofía Castro", aniosServicio: 26, montoAportado: 40000 },
    { nombre: "Mario Ruiz", aniosServicio: 29, montoAportado: 20010 },
    { nombre: "Jimena López", aniosServicio: 27, montoAportado: 30500 }
];

aportantesDePrueba.forEach(aportante => fondo.agregarCliente(aportante));

fondo.informarJubilaciones();


const banco = new EntidadFinanciera('001', 'Banco Central', 'banco');
const cooperativa = new EntidadFinanciera('002', 'Cooperativa de Ahorro', 'cooperativa');


banco.agregarCliente(new Cliente('Juan Perez', 3500, true));  
banco.agregarCliente(new Cliente('Laura Jimenez', 2800, false)); 
banco.agregarCliente(new Cliente('Carlos Alvarado', 4000, true));
banco.agregarCliente(new Cliente('Luisa Martínez', 5000, true));
banco.agregarCliente(new Cliente('Mariana Vargas', 6000, true));
banco.agregarCliente(new Cliente('Jorge Torres', 3500, false)); 
banco.agregarCliente(new Cliente('Daniela Jiménez', 7500, true));
banco.agregarCliente(new Cliente('Hugo Sánchez', 4200, true));
banco.agregarCliente(new Cliente('Sara Conde', 5300, true));
banco.agregarCliente(new Cliente('Luz Clarita', 4800, true));
banco.agregarCliente(new Cliente('Ricardo Miro', 8100, true));
banco.agregarCliente(new Cliente('Paz Sierra', 7600, true));
cooperativa.agregarCliente(new Cliente('Ana Maria', 1500, false)); 
cooperativa.agregarCliente(new Cliente('Luis Solano', 900, false)); 
cooperativa.agregarCliente(new Cliente('Carmen Rivas', 2000, false));
cooperativa.agregarCliente(new Cliente('Pedro Gómez', 1500, false));
cooperativa.agregarCliente(new Cliente('Sofía Castro', 1200, false));
cooperativa.agregarCliente(new Cliente('Mario Ruiz', 1100, false));
cooperativa.agregarCliente(new Cliente('Jimena López', 1800, false));
cooperativa.agregarCliente(new Cliente('Laura Pausini', 2200, false));
cooperativa.agregarCliente(new Cliente('Miguel Angel', 1950, false));
cooperativa.agregarCliente(new Cliente('Andrea Noceti', 2400, false));
cooperativa.agregarCliente(new Cliente('Lina Tejeiro', 2600, false));
cooperativa.agregarCliente(new Cliente('Carlos Vives', 2800, false));


evaluarAccesoCredito([banco, cooperativa]);