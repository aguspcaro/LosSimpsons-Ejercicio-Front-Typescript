export function queTipoSoy<T>(arg: T) {
    console.log(arg);

    return;
}

const soyNumero = queTipoSoy(1)

const soyString = queTipoSoy('pepe')

const soyBooleano = queTipoSoy(true)
