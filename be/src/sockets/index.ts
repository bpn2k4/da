import { Server } from 'socket.io'

class Io {
  private io: Server

  constructor() {
    this.io = new Server()
  }

  setServer(server: Server) {
    this.io = server
  }

  getServer() {
    return this.io
  }
}

const io = new Io()
export default io