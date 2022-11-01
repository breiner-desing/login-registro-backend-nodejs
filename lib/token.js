import jwt from 'jsonwebtoken'

export const createTokens = async (user) => {
    return jwt.sign(user, process.env.PRIVATE_KEY, { expiresIn: 60 * 60  })
}
export const Validate =  async (req, res,  next) => {

    const { token } = req.headers
    
    jwt.verify(token, process.env.PRIVATE_KEY, (error, decode) => {
        
        if (error) {
           throw error
        }

        req.validadoToken = decode
        next()
    })

}