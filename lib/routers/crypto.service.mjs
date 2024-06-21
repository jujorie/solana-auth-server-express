import bs58 from 'bs58'
import nacl from 'tweetnacl'

export class CryptoService {
  /**
   * @param {string} message
   * @returns {Uint8Array}
   */
  encode (message) {
    const encoder = new TextEncoder()
    return encoder.encode(message)
  }

  /**
   * @param {string} message
   * @param {string} signature
   * @param {string} address
   * @returns {boolean}
   */
  verify (message, signature, address) {
    const publicKey = new Uint8Array(bs58.decode(address))
    const encodedMessage = this.encode(message)
    const encodedSignature = new Uint8Array(bs58.decode(signature))
    return nacl.sign.detached.verify(encodedMessage, encodedSignature, publicKey)
  }
}
