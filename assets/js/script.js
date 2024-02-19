// Se crea la funcion constructora de Paciente

// function Paciente(nombre, edad, rut, diagnostico) {
//     let _nombre = nombre
//     let _edad = edad
//     let _rut = rut
//     let _diagnostico = diagnostico
// };

// Se crea la funcion constructora de Consultorio
function Consultorio(nombre, paciente) {
    this.nombre = nombre
    this.paciente = paciente

};

Consultorio.prototype.buscarPaciente = function(pac, nom) {
    for (let i; i < pac.length; i++) {
        if (pac[i].nombre == nom) {
            console.log(pac[i])
        } else {
            console.log('No hay coincidencia con los datos')
        }
    }
}
// Se encapsula las propiedades de los objetos con el método propio del objeto

function Paciente(nombre, edad, rut, diagnostico) {
    let _nombre = nombre;
    Object.defineProperty(this, "_getNombre", {
        get: function () {
        return _nombre
        }
        });
        Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
        _nombre = nombre
        }
        });
    
    let _edad = edad;
    Object.defineProperty(this, "_getEdad", {
        get: function () {
            return _edad
        }
    })
    Object.defineProperty(this, "_setEdad", {
        set: function (edad) {
            _edad = edad
        }
    });
    let _rut = rut;
    Object.defineProperty(this, "_getRut", {
        get: function () {
            return _rut
        }   
    })
    Object.defineProperty(this, "_setRut", {
        set: function (rut) {
            _rut = rut
        }
    });
    let _diagnostico = diagnostico;
    Object.defineProperty(this, "_getDiagnostico", {
        get: function () {
            return _diagnostico
        }
    })
    Object.defineProperty(this, "_setDiagnostico", {
        set: function (diagnostico) {
            _diagnostico = diagnostico
        }
    });
};

// Se crea los métodos de getter y setter

Paciente.prototype.getNombre = function () {
    return this._getNombre
}
Paciente.prototype.setNombre = function (nombre) {
    return this._setNombre = nombre
};

Paciente.prototype.getEdad = function () {
    return this._getEdad
}
Paciente.prototype.setEdad = function (edad) {
    return this._setEdad = edad
};

Paciente.prototype.getRut = function () {
    return this._getRut
}
Paciente.prototype.setRut = function (rut) {
    return this._setRut = rut
};
Paciente.prototype.getDiagnostico = function () {
    return this._getDiagnostico
}
Paciente.prototype.setDiagnostico = function (diagnostico) {
    return this._setDiagnostico
};

// Se instancia cada propiedad por su key para asignarles valores

const paciente1 = new Paciente(
    'Fabian Paredez',
    74,
    "13098098 - 0",
    "insuficiencia renal"
)
const paciente2 = new Paciente(
    'Carlos Andrade',
    55,
    12123123-9,
    "hígado graso"
)
let consulta = new Consultorio(
    "Erica Fernandez",
    "paciente5"
)
let consulta2 = new Consultorio(
    "Carla Martinez",
    "paciente10"
)
let usuarios = [consulta, consulta2]
let busqueda = Consultorio.buscarPaciente(usuarios, 'Maria')
// const paciente3 = new Paciente(
//     nombre = 'Amanda Gutierrez',
//     edad = 39,
//     rut = 14567890-3,
//     diagnostico = "Artritis"
// )
console.log(paciente1)
console.log(paciente2)
console.log(busqueda)
// console.log(paciente3)

//Crear el método de buscar paciente
