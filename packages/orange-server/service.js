// implementation of the operations in the openapi specification

class Service {
  controller
  constructor(opts) {
    this.controller = opts
  }

  // Operation: getHello
  // URL: /hello
  // summary:	Greet the user
  // req.query
  //   type: object
  //   properties:
  //     name:
  //       type: string
  //       description: The name of the person to greet
  //   required:
  //     - name
  //
  // valid responses
  //   '200':
  //     content:
  //       application/json:
  //         schema:
  //           example:
  //             name: name
  //             message: message
  //           properties:
  //             message:
  //               type: string
  //             name:
  //               type: string
  //           type: object
  //     description: OK
  //

  async getHello(req, reply) {
    this.controller.getHello(req, reply)
  }
}
module.exports = (opts) => new Service(opts)
