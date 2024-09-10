function Usuario (nombre, apellidoP, apellidoM, rutNumero, rutDv, telefono, email, presupuesto) {
    //Propiedades Privadas # _ $ => Corresponde a Encapsulamiento

    let _nombre = nombre;
    let _apellidoP = apellidoP;
    let _apellidoM = apellidoM;
    let _rutNumero = rutNumero;
    let _rutDv = rutDv;
    let _telefono = telefono;
    let _email = email;
    let _presupuesto = presupuesto;
    let _gastos = []

    //Métodos públicos de accesibilidad y modificación (getters y setters)

    //Getters
    this.getAllProperties = function () {
        return {
            nombre: _nombre,
            apellidoP: _apellidoP,
            apellidoM: _apellidoM,
            rutNumero: _rutNumero,
            rutDv: _rutDv,
            email: _email,
            telefono: _telefono,
            presupuesto: _presupuesto,
            gastos: _gastos
        }
    }

    this.getNombreCompleto = function () {
        return `${_nombre} ${_apellidoP} ${_apellidoM}`
    }

    this.getNombre = function () {
        return _nombre
    }

    this.getNombreApellidoP = function () {
        return _apellidoP
    }

    this.getNombreApellidoM = function () {
        return _apellidoM
    }

    this.getEmail = function () {
        return _email
    }

    this.getTelefono = function () {
        return _telefono
    }

    this._getPresupuesto = function () {
        return _presupuesto
    }

    this._getGastos = function () {
        return _gastos
    }

    this.getRut = function () {
        return `${_rutNumero}-${_rutDv}`
    }

    //Setters
    this.setNombre = function (nuevoNombre) {
        //Validación Pendiente
        _nombre = nuevoNombre
    }

    this.setApellidoP = function (nuevoApellidoP) {
        //Validación Pendiente
        _apellidoP = nuevoApellidoP
    }

    this.setApellidoM = function (nuevoApellidoM) {
        //Validación Pendiente
        _apellidoM = nuevoApellidoM
    }

    this.setEmail = function (nuevoEmail) {
        //Validación Pendiente
        _email = nuevoEmail
    }

    this.setTelefono = function (nuevoTelefono) {
        //Validación Pendiente
        _telefono = nuevoTelefono
    }

    this.setPresupuesto = function (nuevoPresupuesto) {
        //Validación Pendiente
        _presupuesto = nuevoPresupuesto
    }

    this.setGastos = function (nuevoGastos) {
        //Validación Pendiente
        _gastos = nuevoGastos
    }

    this.setRut = function (nuevoRut) {
        //Validación Pendiente
        _rut = nuevoRut
    }
}

/*const usuario1 = new Usuario ('Alan', 'García', 'Muñoz')

usuario = usuario1.getAllProperties()
usuario.nombre ='Francisca'
console.log(usuario1.getAllProperties())*/