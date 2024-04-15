export class EntidadFinanciera {
    constructor(codigo, nombre, tipo) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.tipo = tipo;
      this.clientes = [];
    }
  
    agregarCliente(cliente) {
      this.clientes.push(cliente);
    }
  }
  
  export class Cliente {
    constructor(nombre, saldo, tieneAval) {
      this.nombre = nombre;
      this.saldo = saldo;
      this.tieneAval = tieneAval;
    }
  }
  
  export const evaluarAccesoCredito = (entidades) => {
    entidades.forEach(entidad => {
      console.log(`Evaluando acceso a crédito para clientes de ${entidad.nombre}:`);
      entidad.clientes.forEach(cliente => {
        const limiteCredito = entidad.tipo === 'banco' ? 3000 : 1000;
        if (cliente.saldo > limiteCredito && (entidad.tipo !== 'banco' || cliente.tieneAval)) {
          console.log(`Cliente ${cliente.nombre} accede a crédito.`);
        } else {
          console.log(`Cliente ${cliente.nombre} no accede a crédito.`);
        }
      });
    });
  };
  