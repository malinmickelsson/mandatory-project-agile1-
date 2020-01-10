const ok = (data, message) => {
  return {
    ok: true,
    data: data || null,
    message: message,
  }
}

const reject = (message) => {
  return {
    ok: false,
    data: null,
    message: message,
  }
}

module.exports = {
  ok, reject
}