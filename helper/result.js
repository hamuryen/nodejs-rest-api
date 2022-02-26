const result = (_data = null, _statusCode = -1, _message = '') => {
    return new Promise((resolve, reject) => {
        resolve({
            isSuccess: (_statusCode == 0 || _data != null),
            statusCode: _statusCode == -1 ? (_data != null ? 0 : _statusCode) : _statusCode,
            message: _message == null ? (_data != null ? 'succes' : 'failed') : _message,
            data: _data
        });
    });
};

const send = (rep, res, status = 200) => {
    rep.status(status).json(res);
};

module.exports = { result, send };