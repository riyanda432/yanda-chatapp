const moment = require('moment');
var moments = require('moment-timezone');



function formatMessage(username, text) {
  return {
    username,
    text,
    time: moments().tz("Asia/Jakarta").format('h:mm a')

  };
}

module.exports = formatMessage;
