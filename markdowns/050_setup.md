## Step 3: Setting up the integration  

Configure the integration for Genesys Cloud in ServiceNow and vice versa. The integration facilitates the external routing of ServiceNow chats and cases through Genesys Cloud, and routing voice interactions to the ServiceNow Agent Inbox in the ServiceNow Configurable Workspace.  

### ServiceNow
1. To setup agents ensure appropriate roles are assigned to users who will be logging in as agents into the CSM configurable agent workspace: 
    - [Setup Agents](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=32)
    
        <video width="600" controls>
            <source src="/static/images/test-vid.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

2. Create presence state:
    - [Create Presence](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=34)
        
        <video width="600" controls>
            <source src="/static/images/test-vid.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

3. Integrate Genesys Cloud Telephony to enable agent interaction by creating openframe embeddable framework:
    - [Create Openframe](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=34)
        
        <video width="600" controls>
            <source src="/static/images/test-vid.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

4. Go ahead to add provider channel identity:
    - [Add Provider Channel Identity](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=37)

        <video width="600" controls>
            <source src="/static/images/test-vid.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

## Genesys Cloud 
1. First thing is to create skills:
    - [Create Skill](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=38)

        <video width="600" controls>
            <source src="/static/images/test-vid.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

2. Then that is followed by creating a queue:
    - [Create a Queue](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=42)

        <video width="600" controls>
            <source src="/static/images/test-vid.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

3. Add users as agents by assigning roles and permissions
    - [Assign Agents](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=47)

        <video width="600" controls>
            <source src="/static/images/test-vid.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

4. Add users to a group:
    - [Setup Groups](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=58)

        <video width="600" controls>
            <source src="/static/images/test-vid.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

5. Setup agents status by retrieving available statues via Genesys API Explorer:
    - [Get Agents Status](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=59)

        <video width="600" controls>
            <source src="/static/images/test-vid.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

6. Configure status mapping between Genesys Cloud and ServiceNow:
    - [Map Status](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=63)

        <video width="600" controls>
            <source src="/static/images/test-vid.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

7. Setup Genesys Cloud Integration:
    - [Genesys Integration](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=66)

        <video width="600" controls>
            <source src="/static/images/test-vid.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

## ServiceNow
Update the openframework configuration for Unified Experience Integration
    - [Update Framework](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=71)

      <video width="600" controls>
            <source src="/static/images/test-vid.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>