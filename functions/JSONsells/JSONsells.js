const output = require("../../utils/output")
const pool = require('../../utils/pool')

const handler = async (event) => {
  if (event.httpMethod == "GET") {
    const result = await pool.query(`SELECT "cotizacion"."fecha_suscripcion", "pagos"."fecha_deposito", "cotizacion"."id", "cotizacion"."nombre_t", "cotizacion"."apellido_t", "cotizacion"."email_t", "cotizacion"."local_t", "cotizacion"."celular_t", "estatus"."nombre"

    FROM "cotizacion"  LEFT JOIN "estatus" ON "cotizacion"."estatus" = "estatus"."id" LEFT JOIN "pagos" ON "cotizacion"."id" = "pagos"."id_solicitud" 

    ORDER BY "cotizacion"."fecha_suscripcion" ASC `);
    return output(result.rows);
  }
}

module.exports = { handler }
