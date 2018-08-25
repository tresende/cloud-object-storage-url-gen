const AWS = require('ibm-cos-sdk');

const bucket = 'xxx';
const ep = new AWS.Endpoint('xxx');
const cred = new AWS.Credentials('xxx', 'xxx');
const config = {
    endpoint: ep,
    credentials: cred,
    signatureVersion: 'v4',
};

const s3 = new AWS.S3(config);
const params = { Bucket: bucket };

const getLinkFile = (fileName) => {
    return new Promise((resolve, reject) => {
        s3.listObjects(params, function (err, data) {
            if (data.Contents) {
                const file = data.Contents.find((item) => item.Key == fileName);
                const params = { Bucket: bucket, Key: file.Key, Expires: 600 };
                s3.getSignedUrl('getObject', params, function (err, url) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(url);
                    }
                });
            }else{
                reject('No Data');
            }
        });
    });
}

getLinkFile('foto.png')
.then(url => console.log(url))
.catch(err => console.log(err));
