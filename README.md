# Automated Attendance


### College Attendance with AWS Rekognition and Cloud Computing
#### Demo video 
https://github.com/Denison-Library-Mandulo/Denison-Lib-Mandulo/assets/106914387/1bcee40d-54b4-4e60-9afd-48e6c3d127c8


### Description
Manage your attendance easily and efficiently with AWS{S3, DynamoDB, API Gateway, Lambda}, a python-based tool for automated deployment, and node-js. 

### AWS Rekognition
An AWS service that allows for image and video analysis. Using deep learning technology, Rekognition can idntify objects, people, text, scenes, and activities, as well as detect any inappropriate content. It also provides features for facial recognition and analysis, making it a versatile tool for various applications, including our attendance system where it assists in recognizing and verifying student faces for attendance tracking. 

rekognition Api is accessible through python. https://docs.aws.amazon.com/managedservices/latest/userguide/rekognition.html 

### Features
* Automated Deployment: Deploy AWS S3 buckets, DynamoDB, and Lambda by sending images from 'app.js' using interface via AWS Gateway. 
* Monitoring: Keep an eye on your resources and operations with AWS CloudWatch integration.

### Prerequisites
* AWS CLI installed and configured with the necessary permissions.
* Node.js 14.x

### Installation
Clone the repository
```
$ git clone https://github.com/Denison-Library-Mandulo/Denison-Lib-Mandulo.git

```

Navigate to the project directory:
```
cd Denison-Lib-Mandulo
```
###### Note: Required configurations or integrations are handled via API Gateway.

### Configuration
1. Ensure your AWS CLI is configured with the appropriate credentials
```
aws configure
```

### Usage
Execute workflows:
* Make sure you have these installed with right versions.
```
node -v
npm -v
```

run your Node.js file:
* Navigate to the directory containing your Node.js using the terminal command pormpt. For example, if your file is named 'app.js', you can run it by typing. 

Observe Output:
* Check on our AWS DynamoDB named 'student-record'. student-record stores the attendance infomation for each user from the original attendance.

### Contributing
* We welcome contributions! If you're looking to contribute or make changes, kindly reach out to a project member before proceeding. This ensures smooth collaboration and maintains the integrity of the project.

### Executing Program
You do not need to install and get the same setting on AWS. We already have all of them built in our own server. You only need to download the js files and open app.js. It will shows you a window with two buttons, 'choose files' and 'Upload files'. Choose your files from your device and upload the files to the server. The result of face rekognition will show up next to the pictures.

If desired, you can log in to the AWS Console to view the project's workflow 


