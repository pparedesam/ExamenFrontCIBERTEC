export const generarNumerosPrimos = (cantidadPrimos = 40) => {
    const esPrimo = (numero) => {
        if (numero < 2) return false;
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) return false;
        }
        return true;
    };

    return Array.from({ length: cantidadPrimos }).reduce(
        (acumulador) => {
            const siguientePrimo = (numero) => {
                let posible = numero;
                while (!esPrimo(posible)) {
                    posible++;
                }
                return posible;
            };

            const ultimoPrimo = acumulador[acumulador.length - 1] || 1;
            return [...acumulador, siguientePrimo(ultimoPrimo + 1)];
        }, []
    );
};

