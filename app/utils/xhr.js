import axios from 'axios';

exports.getJSON = (url, cb) => {
    axios.get(url).then(res => {
      cb(null, res);
    }).catch(err => {
      cb(new Error(err), null);
    });
};

exports.postJSON = (url, obj, cb) => {
  axios.post(url, obj).then( res => {
    cb(null, res);
  }).catch(err => {
    cb(new Error(err), null);
  })
};
