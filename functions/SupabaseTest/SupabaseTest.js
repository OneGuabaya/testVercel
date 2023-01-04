const output = require("../../utils/output")
const supabase = require("../../supabase/supabase")
const middy = require("middy")
let { jsonBodyParser, cors } = require("middy/middlewares")

const fnAggUser = async (event) => {
  
  let {rol, username, password} = event.body;
  
  if (event.httpMethod == "POST") {
    
    const userPerfil = {
        rol,
        username,
        password
    }
    const {error} = await supabase.from('Users').insert(userPerfil)
    
    return output("Post Succefull");
  }
}

exports.handler = middy(fnAggUser)
                 .use(jsonBodyParser())
                 .use(cors())