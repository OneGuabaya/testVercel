const output = require("../../utils/output")
const pool = require('../../utils/pool')

const handler = async (event) => {
  if (event.httpMethod == "GET") {
    const result = await pool.query(`SELECT "cotizacion"."fecha_suscripcion", "cotizacion"."id", "cotizacion"."nac", "cotizacion"."sexo", "cotizacion"."nombre_t", "cotizacion"."apellido_t", "cotizacion"."fecha_nac", "cotizacion"."sexo", "cotizacion"."email_t", "cotizacion"."local_t", "cotizacion"."celular_t", "estados"."estado", "municipios"."municipio", "parroquias"."parroquia", "cotizacion"."direccion", "familiar"."nombre_f", "familiar"."apellido_f", "familiar"."cedula_f", "familiar"."nac", "familiar"."sexo", "familiar"."fecha_nac_f", "pagos"."fecha_deposito", "pagos"."idtipopago", "pagos"."montobs", "pagos"."montod", "bancoefectivo"."nombre", "pagos"."referencia"
    
    FROM "cotizacion"  LEFT JOIN "civil" ON "cotizacion"."civil" = "civil"."id" LEFT JOIN "profesion" ON "cotizacion"."id_profesion" = "profesion"."id" LEFT JOIN "estados" ON "cotizacion"."id_estado_d" = "estados"."id" LEFT JOIN "municipios" ON "cotizacion"."id_municipio_d" = "municipios"."id" LEFT JOIN "parroquias" ON "cotizacion"."id_parroquia_d" = "parroquias"."id" LEFT JOIN "familiar" ON "cotizacion"."id" = "familiar"."id_cotizacion" LEFT JOIN "parentesco" ON "familiar"."parentesco" = "parentesco"."id" LEFT JOIN "pagos" ON "cotizacion"."id" = "pagos"."id_solicitud" LEFT JOIN "estatus" ON "pagos"."idtipopago" = "estatus"."id" LEFT JOIN "bancoefectivo" ON "pagos"."id_banco" = "bancoefectivo"."id"
    
    ORDER BY "pagos"."fecha_deposito" ASC `);
    return output(result.rows);
  }
}

module.exports = { handler }
