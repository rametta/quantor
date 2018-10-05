[![npm](https://img.shields.io/npm/v/quantor.svg)](http://npm.im/quantor)
[![travis](https://travis-ci.com/rametta/quantor.svg?branch=master)](https://travis-ci.com/rametta/quantor)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/rametta/quantor/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# 💃 Quantor

Blazing fast alternative to Swagger. [Demo](https://quantor.surge.sh/)

*Complete API docs up and running in less than 5 mins!*

### Features
- Premade and custimizable UI
- Extremely fast rendering with mustacheJS
- Easy to install and setup
- SSR 100% supported *(and recommended)*
- Tiny footprint - less than 3kb

## Install

`yarn add quantor`

## Usage

```js
import quantor from 'quantor'

const json = {...JSON API Docs}
quantor(json)(html => /* do something with html */)

// Express or GCF example
quantor(json)(html => res.set('Content-Type', 'text/html').send(new Buffer(html)))
```

## JSON Structure

Quantor generates the docs based on the JSON provided. The JSON must follow the Quantor JSON Spec. See this [example file](/sample.json) for the structure expected or see below.

Basic structure:
```json
{
  "title": "String",
  "description": "String",
  "base": "String",
  "endpoints": [
    {
      "name": "String",
      "display": "String",
      "description": "String",
      "handlers": {
        "GET": {
          "optionalQueryParams": [
            {
              "name": "String",
              "description": "String",
              "type": "String",
              "default": "Any"
            }
          ],
          "responses": [
            {
              "code": 200,
              "model": "User"
            }
          ]
        }
      }
    }
  ],
  "models": {
    "User": {
      "name": "String",
      "age": "Integer"
    }
  }
}
```

Facts:
- Endpoints expects an array of endpoint objects.
- Models is an optional map of objects used for response models.
- Each endpoint object should have a handlers property.
- The handlers property is a map of http methods like:
  + GET
  + POST
  + PUT
  + DELETE
  + PATCH
  + OPTIONS
  + HEAD
- Each http method should be an object with optional properties of:
  + requiredQueryParams
  + optionalQueryParams
  + requiredBodyParams
  + optionalBodyParams
  + requiredHeaders
  + optionalHeaders
  + responses
- Each of those properties should be an array of objects with a name, description, default & type.

## Contributing
Check out our [contributer docs](/CONTRIBUTING.md) and check out our [issues](https://github.com/rametta/quantor/issues). Pick anything that tickles your fancy or create an issue that you would find useful.