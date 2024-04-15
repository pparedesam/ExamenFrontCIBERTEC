export class OperadorTelefonia {
    constructor(nombre) {
        this.nombre = nombre;
        this.clientes = [];
    }

    agregarCliente(cliente) {
        this.clientes.push(cliente);
    }

    obtenerClientesConMayorCalificacion() {
        const maxCalificacion = Math.max(...this.clientes.map(c => c.calificacion));
        return this.clientes.filter(c => c.calificacion === maxCalificacion);
    }

    obtenerClientesConDeuda(categoria = 'Estándar') {
        return this.clientes.filter(c => c.deuda > 0 && c.categoria === categoria);
    }
}

export function obtenerOperadorConMasPromociones(operadores) {
    return operadores.reduce((prev, current) => {
        const prevPromoCount = prev.clientes.reduce((sum, cliente) => sum + cliente.promociones.length, 0);
        const currentPromoCount = current.clientes.reduce((sum, cliente) => sum + cliente.promociones.length, 0);
        return (prevPromoCount > currentPromoCount) ? prev : current;
    });

}

export function obtenerMejoresClientesPorOperador(operadores) {
    const mejoresClientes = {};
    operadores.forEach(operador => {
        mejoresClientes[operador.nombre] = operador.obtenerClientesConMayorCalificacion();
    });
    return mejoresClientes;
}

