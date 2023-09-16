var unirest = require("unirest");


smsAPI = (number, name, msgType) => {
  let message = {
    reqApv: `\nHi, ${name} your Appointment is confirmed f!`,
    reqRej: `\nHi, ${name} your Appointment is confirmed f!`,
    // reqRej: `\nHi, ${name} your Appointment is confirmed f!`,
  }
  var req = unirest("POST", "https://www.fast2sms.com/dev/bulkV2");
  req.headers({
    "authorization": "feqMJ06RDgimslKNHrY3ut2v9EkhB1AUVb8S7IcapwxnQj4WXoiadpov75M0R9swItQKPqfOJBnbcLX4",
    "Content-Type": "application/json"
  }); req.form({
    "sender_id": "TXTIND",
    "message": message[`${msgType}`],
    "route": "v3",
    "numbers": number,
  });
  req.end(function (res) {
    if (res.error) throw new Error(res.error);
  });
}

smsAPI('7779885160', 'alex', 'reqApv')