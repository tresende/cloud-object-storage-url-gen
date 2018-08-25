# Cloud Object Storage
Generate IBM Cloud Object Storage Public Url.

Follow Steps

1 - Log in to IBM Cloud Acoount.<br />
2 - Find by `Cloud Object Storage`<br />
3 - Service Credentials <br />
4 - New Credentials <br />
5 - In `Add Inline Configuration Parameters (Optional)` type `{"HMAC":true}` <br />
6 - Change code

```js
const bucket = '<YOUR-BUCKET-NAME>';
const ep = new AWS.Endpoint('<GET-ENDPOINT-IN-ENDPOINT-TAB>');
const cred = new AWS.Credentials('<ACCESS_KEY_ID>', '<SECRET_ACCESS_KEY>');
```
