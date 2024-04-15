export const calcularPromedioExcluyendoNotaBaja = (alumnos) => {
    alumnos.forEach(alumno => {
  
      let notasOrdenadas = [...alumno.notas].sort((a, b) => a - b);
      notasOrdenadas.shift();
      let promedio = notasOrdenadas.reduce((acc, nota) => acc + nota, 0) / notasOrdenadas.length;

      console.log(`Alumno: ${alumno.nombre}, Promedio (excluyendo la nota más baja): ${promedio.toFixed(2)}`);
    });
  };