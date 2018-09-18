[![npm](https://img.shields.io/npm/v/quantor.svg)](http://npm.im/quantor)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/rametta/quantor/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# ☄ Quantor

Blazing fast Server Side Rendered API Docs engine.

## Install

`yarn add quantor`

## Usage

```js
import quantor from 'quantor'

const data = {...JSON API Docs}
const html = quantor(data)

// express or google cloud function
res.set('Content-Type', 'text/html');
res.send(new Buffer(html));
```