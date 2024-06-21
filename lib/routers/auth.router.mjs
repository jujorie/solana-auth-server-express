import { randomUUID } from 'node:crypto'
import { Router } from 'express'
import md5 from 'md5'
import jwt from 'jsonwebtoken'

import models from '../database/models/index.mjs'
import { CryptoService } from './crypto.service.mjs'
import config from '../config/index.mjs'

const getChallenge = (address) => {
  const uuid = randomUUID()
  return md5(`${address}&${uuid}`)
}

export function authRouter () {
  const router = Router()
  const cryptoService = new CryptoService()

  router.post('/auth/challenge', async (req, res) => {
    const { body } = req
    const challenge = getChallenge(body.address)
    const user = await models.User.findOne({
      where: { address: body.address }
    })
    if (user === null) {
      const data = {
        address: body.address,
        challenge
      }
      await this.user.create(data)
    } else {
      user.challenge = challenge
      await user.save()
    }
    res.json({
      challenge
    })
  })

  router.post('/auth/login', async (req, res, next) => {
    try {
      const { body } = req
      const user = await models.User.findOne({
        where: { address: body.address }
      })
      if (user === null) {
        res.statusCode = 404
        return next(new Error('User not found'))
      }
      if (!cryptoService.verify(user.challenge, body.signature, body.address)) {
        res.statusCode = 403
        return next(new Error('Not Authorized'))
      }
      user.challenge = getChallenge(body.address)
      await user.save()

      const payload = {
        address: body.address
      }
      res.json({
        accessToken: jwt.sign(payload, config.get('jwtSecret')),
        payload
      })
    } catch (error) {
      next(error)
    }
  })

  return router
}
