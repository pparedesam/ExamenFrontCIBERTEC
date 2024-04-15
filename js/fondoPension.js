export class FondoPension {
    constructor() {
      this.aportantes = [];
    }
  
    agregarCliente(aportante) {
      this.aportantes.push(aportante);
    }
  
    calcularJubilacion(aportante) {
      if (aportante.aniosServicio > 20 && aportante.montoAportado > 30000) {
        return aportante.montoAportado * 0.9;
      } else {
        return 0;
      }
    }
  
    informarJubilaciones() {
      this.aportantes.forEach(aportante => {
        const montoJubilacion = this.calcularJubilacion(aportante);
        console.log(`Aportante: ${aportante.nombre}, Monto de Jubilación: S/${montoJubilacion}`);
        if (montoJubilacion > 0) {
          console.log(`El aportante cumple con los requisitos para la jubilación anticipada.`);
        } else {
          console.log(`El aportante no cumple con los requisitos para la jubilación anticipada.`);
        }
      });
    }
  }