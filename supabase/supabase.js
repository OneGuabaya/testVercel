const { createClient } = require('@supabase/supabase-js')
const { SUPABASE_URL, SUPABASE_KEY } = require('./config')

module.exports = supabase = createClient(SUPABASE_URL, SUPABASE_KEY);