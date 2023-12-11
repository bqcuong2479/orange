;(async () => {
  const fastify = require('fastify')({
    logger: true,
  })
  const fastifyOpenapiGlue = await import('fastify-openapi-glue')
  const healthCheck = require('fastify-healthcheck')
  const helmet = require('@fastify/helmet')
  const path = require('path')

  const {service} = require('@orange/service')
  const factory = require('./service')

  const routes = service()

  const options = {
    specification: path.join(__dirname, 'openApi.json'),
    serviceHandlers: factory(routes),
    prefix: '/v1',
  }

  fastify.register(fastifyOpenapiGlue, options)
  // fastify.addHook('onSend', async (request, reply) => {
  //   reply.headers({'Content-Type': 'application/json; charset=utf-8'})
  // })

  // Health check
  fastify.register(healthCheck, {healthcheckUrl: '/v1/hc'})

  // Helmet
  fastify.register(helmet, {global: true})

  await fastify.listen({port: 5005}, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening on ${address}`)
  })
})()
