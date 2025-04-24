## Unified Voice Installation

### ServiceNow
1. Set up phone service channel in AWA:
    - [Phone Service Channel](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=76)
2. Create external queues within the ServiceNow platform that map back to the Genesys queues:
    - [Create External queues](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=77)

### Genesys
1. After creating a ServiceNow Phone Queue, the next step is to configure the Genesys Integration to set a default voice queue.
    - [Update the Unified Experience Integration for Voice](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=80)
2. Next is creating a simple Inbound call in Genesys Cloud to simulate a real customer interaction and validate the Unified Experience Routing functionality.
    - [Create Architect Flow with Inbound Call](https://gts-s3-demoscripts.s3.us-west-2.amazonaws.com/Assets/Implementation-Guide_Y+Unified+Experience+from+Genesys+and+ServiceNow+v2.2_EXT.pdf#page=84)