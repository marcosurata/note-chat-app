const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should the correct message object', () => {
    var from = 'Jen';
    var text = 'Some text';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from,
      text
    });

  });
});
