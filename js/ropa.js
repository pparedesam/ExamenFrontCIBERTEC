export const generarCamisas = (ropaVestir) => {
    let camisas = ropaVestir.filter(item => item.tipo === 'camisa').map(({ marca, precio, descripcion }) => ({
      marca, precio, descripcion
    }));
  
    let precioMayor = Math.max(...camisas.map(camisa => camisa.precio));
    let precioMenor = Math.min(...camisas.map(camisa => camisa.precio));

    console.log('----------DETALLE DEL ARREGLO CAMISAS----------')
    camisas.forEach(camisa => console.log(`Marca: ${camisa.marca}, Precio: ${camisa.precio}, Descripción: ${camisa.descripcion}`));

    console.log('----------CAMISA DE MAYOR Y MENOR PRECIO----------')

    console.log('Camisa(s) de mayor precio:', camisas.filter(camisa => camisa.precio === precioMayor));
    console.log('Camisa(s) de menor precio:', camisas.filter(camisa => camisa.precio === precioMenor));
  
    return camisas;
  };