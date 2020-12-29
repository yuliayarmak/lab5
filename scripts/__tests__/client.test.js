import Client from '../client.js';


describe('get and post', () => {

  beforeAll(() => {
    const a = () => {
      return Promise.resolve({
        json() {
          return { id: 1 };
        }
      });
    };
    Object.defineProperty(window, 'fetch', {value: jest.fn(a)});
  });

  it('get', () => {
    const client = new Client();
    client.getData('main');
    expect(fetch).toBeCalledWith('http://my-json-server.typicode.com/yuliayarmak/test/main');

  });

  
  it('post', () => {
    const client = new Client();

    client.post({lachimolala: 31}, 'orders');
    expect(fetch).toBeCalledWith('https://my-json-server.typicode.com/yuliayarmak/test/orders', {
      method: 'POST',
      body: '{"lachimolala":31}'
    });

  });

});