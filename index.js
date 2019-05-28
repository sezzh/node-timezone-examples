const moment = require('moment-timezone')
const formatToUse = 'dddd, MMMM Do YYYY, h:mm:ss a Z'
const mexicoTimeZone = 'America/Mexico_City'
const canadaTimeZone = 'America/Toronto'
const universalTimeZone = 'UTC'
const alternativeUniversalTimeZone = 'Greenwich'
const anotherAlternativeUniversalTimeZone = 'GMT0'

console.log('moment locale list')

console.log(moment.locales())

console.log('current date')


console.log('timezones in moment-timezone:')

const currentUtcTime = moment(new Date()).tz(universalTimeZone)

console.log('universal time zone')
console.log(currentUtcTime.locale('es').format(formatToUse))
console.log('mexico:')
console.log(currentUtcTime.tz(mexicoTimeZone).locale('es').format(formatToUse))
console.log('canada:')
console.log(currentUtcTime.tz(canadaTimeZone).locale('eng').format(formatToUse))
