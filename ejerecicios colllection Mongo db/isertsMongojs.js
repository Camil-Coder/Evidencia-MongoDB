//Profe estos son todos los inserts que hize 💚


db.clientes.insertMany([
    { id_cliente: "C001", nombre: "Juan Pérez", dirección: "Calle Falsa 123", teléfono: "1234567890", email: "juanperez@email.com", fecha_registro: ISODate("2023-01-01") },
    { id_cliente: "C002", nombre: "Ana López", dirección: "Avenida Siempre Viva 456", teléfono: "0987654321", email: "analopez@email.com", fecha_registro: ISODate("2023-02-01") },
    { id_cliente: "C003", nombre: "Carlos Martínez", dirección: "Boulevard de los Héroes 789", teléfono: "1231231234", email: "carlosmartinez@email.com", fecha_registro: ISODate("2023-03-01") },
    { id_cliente: "C004", nombre: "Laura García", dirección: "Calle del Sol 101", teléfono: "4564564567", email: "lauragarcia@email.com", fecha_registro: ISODate("2023-04-01") },
    { id_cliente: "C005", nombre: "Miguel Álvarez", dirección: "Plaza Central 202", teléfono: "7897897890", email: "miguelalvarez@email.com", fecha_registro: ISODate("2023-05-01") },
    { id_cliente: "C006", nombre: "Sofía Rodríguez", dirección: "Camino Largo 303", teléfono: "3213213210", email: "sofiarodriguez@email.com", fecha_registro: ISODate("2023-06-01") },
    { id_cliente: "C007", nombre: "Diego Hernández", dirección: "Avenida del Mar 404", teléfono: "6546546543", email: "diegohernandez@email.com", fecha_registro: ISODate("2023-07-01") },
    { id_cliente: "C008", nombre: "María Fernández", dirección: "Ruta del Bosque 505", teléfono: "9879879876", email: "mariafernandez@email.com", fecha_registro: ISODate("2023-08-01") },
    { id_cliente: "C009", nombre: "José Gómez", dirección: "Pasaje de la Luna 606", teléfono: "3693693690", email: "josegomez@email.com", fecha_registro: ISODate("2023-09-01") },
    { id_cliente: "C010", nombre: "Luisa Morales", dirección: "Vía Rápida 707", teléfono: "1471471470", email: "luisamorales@email.com", fecha_registro: ISODate("2023-10-01") }
]);


db.cuentas.insertMany([
    { id_cuenta: "CU001", id_cliente: "C001", tipo_cuenta: "Ahorros", saldo: 5000, moneda: "USD", fecha_apertura: ISODate("2023-03-01") },
    { id_cuenta: "CU002", id_cliente: "C002", tipo_cuenta: "Corriente", saldo: 3000, moneda: "USD", fecha_apertura: ISODate("2023-03-15") },
    { id_cuenta: "CU003", id_cliente: "C003", tipo_cuenta: "Ahorros", saldo: 6000, moneda: "USD", fecha_apertura: ISODate("2023-03-29") },
    { id_cuenta: "CU004", id_cliente: "C004", tipo_cuenta: "Corriente", saldo: 4500, moneda: "USD", fecha_apertura: ISODate("2023-04-12") },
    { id_cuenta: "CU005", id_cliente: "C005", tipo_cuenta: "Ahorros", saldo: 8000, moneda: "USD", fecha_apertura: ISODate("2023-04-26") },
    { id_cuenta: "CU006", id_cliente: "C006", tipo_cuenta: "Corriente", saldo: 2000, moneda: "USD", fecha_apertura: ISODate("2023-05-10") },
    { id_cuenta: "CU007", id_cliente: "C007", tipo_cuenta: "Ahorros", saldo: 5500, moneda: "USD", fecha_apertura: ISODate("2023-05-24") },
    { id_cuenta: "CU008", id_cliente: "C008", tipo_cuenta: "Corriente", saldo: 3500, moneda: "USD", fecha_apertura: ISODate("2023-06-07") },
    { id_cuenta: "CU009", id_cliente: "C009", tipo_cuenta: "Ahorros", saldo: 7000, moneda: "USD", fecha_apertura: ISODate("2023-06-21") },
    { id_cuenta: "CU010", id_cliente: "C010", tipo_cuenta: "Corriente", saldo: 4000, moneda: "USD", fecha_apertura: ISODate("2023-07-05") }
]);

db.transacciones.insertMany([
    { id_transacción: "T001", id_cuenta: "CU001", tipo: "Depósito", monto: 1000, fecha_transacción: ISODate("2023-04-01"), detalle: "Depósito nómina" },
    { id_transacción: "T002", id_cuenta: "CU002", tipo: "Retiro", monto: 500, fecha_transacción: ISODate("2023-04-02"), detalle: "Retiro ATM" },
    { id_transacción: "T003", id_cuenta: "CU003", tipo: "Depósito", monto: 1500, fecha_transacción: ISODate("2023-04-03"), detalle: "Transferencia recibida" },
    { id_transacción: "T004", id_cuenta: "CU004", tipo: "Retiro", monto: 700, fecha_transacción: ISODate("2023-04-04"), detalle: "Pago servicios" },
    { id_transacción: "T005", id_cuenta: "CU005", tipo: "Depósito", monto: 2000, fecha_transacción: ISODate("2023-04-05"), detalle: "Ingreso de cheques" },
    { id_transacción: "T006", id_cuenta: "CU006", tipo: "Retiro", monto: 300, fecha_transacción: ISODate("2023-04-06"), detalle: "Retiro ATM" },
    { id_transacción: "T007", id_cuenta: "CU007", tipo: "Depósito", monto: 2500, fecha_transacción: ISODate("2023-04-07"), detalle: "Depósito nómina" },
    { id_transacción: "T008", id_cuenta: "CU008", tipo: "Retiro", monto: 400, fecha_transacción: ISODate("2023-04-08"), detalle: "Pago tarjeta crédito" },
    { id_transacción: "T009", id_cuenta: "CU009", tipo: "Depósito", monto: 1100, fecha_transacción: ISODate("2023-04-09"), detalle: "Transferencia recibida" },
    { id_transacción: "T010", id_cuenta: "CU010", tipo: "Retiro", monto: 600, fecha_transacción: ISODate("2023-04-10"), detalle: "Retiro cajero" }
]);

db.préstamos.insertMany([
    { id_préstamo: "P001", id_cliente: "C001", monto_préstamo: 20000, tipo_préstamo: "Hipoteca", tasa_interés: 5.5, plazo: 20, fecha_inicio: ISODate("2023-05-01"), estado: "Activo" },
    { id_préstamo: "P002", id_cliente: "C002", monto_préstamo: 10000, tipo_préstamo: "Personal", tasa_interés: 6.0, plazo: 5, fecha_inicio: ISODate("2023-05-15"), estado: "Activo" },
    { id_préstamo: "P003", id_cliente: "C003", monto_préstamo: 15000, tipo_préstamo: "Automotriz", tasa_interés: 4.5, plazo: 7, fecha_inicio: ISODate("2023-05-29"), estado: "Activo" },
    { id_préstamo: "P004", id_cliente: "C004", monto_préstamo: 5000, tipo_préstamo: "Personal", tasa_interés: 6.5, plazo: 3, fecha_inicio: ISODate("2023-06-12"), estado: "Activo" },
    { id_préstamo: "P005", id_cliente: "C005", monto_préstamo: 25000, tipo_préstamo: "Hipoteca", tasa_interés: 5.0, plazo: 15, fecha_inicio: ISODate("2023-06-26"), estado: "Activo" },
    { id_préstamo: "P006", id_cliente: "C006", monto_préstamo: 8000, tipo_préstamo: "Personal", tasa_interés: 7.0, plazo: 4, fecha_inicio: ISODate("2023-07-10"), estado: "Activo" },
    { id_préstamo: "P007", id_cliente: "C007", monto_préstamo: 12000, tipo_préstamo: "Educación", tasa_interés: 3.5, plazo: 6, fecha_inicio: ISODate("2023-07-24"), estado: "Activo" },
    { id_préstamo: "P008", id_cliente: "C008", monto_préstamo: 20000, tipo_préstamo: "Renovación Hogar", tasa_interés: 4.0, plazo: 10, fecha_inicio: ISODate("2023-08-07"), estado: "Activo" },
    { id_préstamo: "P009", id_cliente: "C009", monto_préstamo: 10000, tipo_préstamo: "Automotriz", tasa_interés: 5.5, plazo: 5, fecha_inicio: ISODate("2023-08-21"), estado: "Activo" },
    { id_préstamo: "P010", id_cliente: "C010", monto_préstamo: 6000, tipo_préstamo: "Personal", tasa_interés: 6.0, plazo: 2, fecha_inicio: ISODate("2023-09-04"), estado: "Activo" }
]);
