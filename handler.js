const aws = require('aws-sdk');
const s3 = new aws.S3();

exports.s3put = async (event) => {
    const bucket = 'sample-website-sls';
    const key = 'index.html';
    var body = 'Welcome!';
    
    // Setting
    const params = {
        Bucket: bucket,
        Key: key,
        Body: body,
        ContentType: 'text/html'
    };

    // Upload
    try {
        var data = await s3.putObject(params).promise();
        console.log(data);
    } catch (error) {
        console.log (error);
        return;
    }
    console.log('File uploaded successfully.');
};
