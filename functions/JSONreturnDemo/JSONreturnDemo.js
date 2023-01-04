const output = require("../../utils/output")
const pool = require('../../utils/pool')

const handler = async (event) => {
  if (event.httpMethod == "GET") {
    const result = await pool.query(`SELECT "cotizacion"."id", "cotizacion"."fecha_suscripcion", "pagos"."fecha_deposito", "parentesco"."nombre", "familiar"."fecha_nac_f", "estados"."estado", "familiar"."sexo", "familiar"."nac", "profesion"."nombre" as "profesion"

    FROM "cotizacion" LEFT JOIN "estados" ON "cotizacion"."id_estado_d" = "estados"."id" LEFT JOIN "familiar" ON "cotizacion"."id" = "familiar"."id_cotizacion" LEFT JOIN "parentesco" ON "familiar"."parentesco" = "parentesco"."id" LEFT JOIN "pagos" ON "cotizacion"."id" = "pagos"."id_solicitud" LEFT JOIN "profesion" ON "cotizacion"."id_profesion" = "profesion"."id"
	
    ORDER BY "pagos"."fecha_deposito" ASC`);
    return output(result.rows);
  }
}

module.exports = { handler }
