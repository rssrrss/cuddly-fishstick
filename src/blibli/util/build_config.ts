import { v4 as uuid } from 'uuid'
import { Blibli } from ".."

export interface BuildConfigParam {
  method: string,
  path: string,
  params: Record<string, string>[],
  headers: Record<string, string>[],
  body: Record<string, string>[],
  is_username_need: boolean
}

function BuildConfigParam(p: BuildConfigParam) {
  const host = Blibli.Config.host
  const clientID = Blibli.Config.client_id
  const clientSecret = Blibli.Config.client_secret
  const channelID = Blibli.Config.channel_id
  const storeId = Blibli.Config.store_id
  const request_id = Blibli.Config.request_id
  const username = Blibli.Config.username

  let is_username_needed = true
  if (p.is_username_need === false) {
    is_username_needed = false
  }

  const requestID = request_id + '-' + uuid()

  let _params = [
    `requestId=${requestID}`,
    `channelId=${channelID}`,
    `storeId=${storeId}`
  ]

  if (is_username_needed) {
    _params.push(`username=${username}`)
  }

  if (p.params.length > 0) {
    for (let i = 0; i < p.params.length; i++) {
      const param = p.params[i]
      _params.push(`${param.name}=${param.value}`)
    }
  }

  const url = `${host}${p.path}?${_params.join('&')}`

  const token = `${clientID}:${clientSecret}`
  const encodedToken = Buffer.from(token).toString('base64')
  const signatureTime = new Date().getTime() * 1000

  let _headers: Record<string, string | number> = {
    'Signature-Time': signatureTime,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Basic ${encodedToken}`
  }

  if (p.headers.length > 0) {
    for (let i = 0; i < p.headers.length; i++) {
      const header = p.headers[i]
      _headers[header.name] = header.value
    }
  }

  let conf: Record<string, any> = {
    method: p.method,
    url: url,
    headers: _headers,
    data: {}
  }

  if (p.body.length > 0) {
    for (let i = 0; i < p.body.length; i++) {
      const b = p.body[i]
      conf.data[b.name] = b.value
    }
  }

  if (conf.data) {
    conf.data = JSON.stringify(conf.data)
  }

  return conf
}
