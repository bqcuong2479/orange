import {FastifyReply, FastifyRequest} from 'fastify'

export const helloController = () => {
  const getHello = (request: FastifyRequest<any>, reply: FastifyReply<any>) => {
    const params: any = request.query
    const {name} = params
    reply
      .code(200)
      //.header('Content-Type', 'application/json; charset=utf-8')
      .send(`Hello ${name}!`)
  }

  return {
    getHello,
  }
}
