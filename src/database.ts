import mongoose, {ConnectionOptions} from 'mongoose'
import config from './config/config'

const options: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}
mongoose.connect(config.DB.URI, options)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))