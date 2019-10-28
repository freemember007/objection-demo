const { Usr } = require('./models/Usr')
const { UsrTag } = require('./models/UsrTag')
const { BookPatient } = require('./models/BookPatient')

// require('./ddysCrmDbInit')
// require('./ddysDbInit')

Usr.query().eager('usrTags').then(console.log)
UsrTag.query().eager('usr').then(console.log)
BookPatient.query().where('patient_id', 1).eager('usr').then(console.log)
