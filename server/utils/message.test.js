const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Jen';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps?q=15,19';

    var message = generateLocationMessage(from, latitude,longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({ from, url });
  });
});
