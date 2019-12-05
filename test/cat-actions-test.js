import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../src/actions/catActions'
import { expect } from 'chai'
import nock from 'nock'
import fetch from 'isomorphic-fetch';


// change to redux thunk
const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const catPics = [{url: "www.example.com/cat1"}, {url: 'www.example.com/cat2'}]

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

})
