const UMI_ENV = process.env.UMI_ENV;

const api = UMI_ENV === 'dev'? require('./api.dev') : require('./api.sit')

export default api;