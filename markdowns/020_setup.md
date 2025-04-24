## Step 2: Secure Communication Link Setup  
Securing communication between the two systems is a critical step in the installation process. Register an application with a ServiceNow instance to use OAuth JWT API endpoints for external clients and allow Genesys Cloud as a third-party integration. The process encompasses generating public/private key pair in Genesys and configuring it within ServiceNow x509 certificate.  

1.  To set up Oauth client and Secret on Genesys Cloud: 
    - [Oauth set up](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=17)

        <video width="600" controls>
            <source src="/static/images/test-vid.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        
2. For generation self-signed certificate with OpenSSL 
    - [Certificate](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=20)
        
        <video width="600" controls>
            <source src="/static/images/test-vid.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

3. After creating the key pair from the above step, the next thing is to create a x509 certificate: 
    - [x509 Certificate](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=21)

        <video width="600" controls>
            <source src="/static/images/test-vid.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

4. To manage and control external applications, you create Application Registry in ServiceNow: 
    - [Application Registry](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=23)
        
        <video width="600" controls>
            <source src="/static/images/test-vid.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

5. After you create an X.509 certificate in ServiceNow, assign the certificate to the Application Registry created for managing Genesys Cloud: 
    - [Assign Certificate](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=25)

        <video width="600" controls>
            <source src="/static/images/test-vid.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

6. Create an integration user to have a dedicated user account for managing Genesys Cloud as external application in ServiceNow: 
    - [ServiceNow Integration](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=27)

        <video width="600" controls>
            <source src="/static/images/test-vid.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

7. Before an application integration can execute in ServiceNow, there's a need to  create and configure connection information, with corresponding credentials, and add an alias: 
    - [Credentials and Alias](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=29) 

        <video width="600" controls>
            <source src="/static/images/test-vid.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
