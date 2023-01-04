function output(content) {
    try {
        return {
            statusCode: 200,
            body: JSON.stringify(content),
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }
    } catch (error) {
        return{
        statusCode: 500,
        body: error.toString(),
    }
    }
}

module.exports = output