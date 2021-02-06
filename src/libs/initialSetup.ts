import User from '../models/user'

export const createUsers = async () => {
    try {
        const count = await User.estimatedDocumentCount()
        if (count > 0) return

        const values = await Promise.all([
            new User({ email: 'ramon@ramon.com', password: 'ramon'}).save(),
            new User({ email: 'jorge@jorge.com', password: 'jorge'}).save(),
            new User({ email: 'mariana@mariana.com', password: 'mariana'}).save(),
        ])
        console.log(values)
    } catch (err) {
        console.error(err)
    }
}