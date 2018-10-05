declare module 'quantor' {

  type Docs = {
    title: string
    description?: string
    base: string
    endpoints: Endpoint[]
    models?: Models
  }

  type Models = {
    [model: string]: any
  }

  type Endpoint = {
    name: string
    display: string
    description?: string
    handlers: Handlers
  }

  type Handlers = {
    GET?: Handler
    POST?: Handler
    PUT?: Handler
    DELETE?: Handler
    PATCH?: Handler
    HEAD?: Handler
    OPTIONS?: Handler
  }

  type Handler = {
    responses?: DocResponse[]
    requiredQueryParams?: Param[]
    optionalQueryParams?: Param[]
    requiredBodyParams?: Param[]
    optionalBodyParams?: Param[]
    requiredHeaders?: Param[]
    optionalHeaders?: Param[]
  }

  type DocResponse = {
    code: number
    model: string
  }

  type Param = {
    name: string
    description?: string
    default?: String|Number|Boolean,
    type?: string
  }

  type Quantor = (docs: Docs) => (callback: (html: string) => any) => void

  const quantor: Quantor

  export = quantor
}
