# whatsapp-business-api-doc

 This documentation is created for easy understanding of integrating WhatsApp business API.


# Register Business
First need to register the business and verify it using official documents.

# Add Number
Then add a number associated to WhatsApp in WhatsApp Manager

# Create System User
Now create System User 

Settings >> Users >> System Users

Now Genetate Token inside system user. This token will be used as access token accross the API calls. You may revoke this, if not needed or regenerate new one

# Verify Number
Then need to set 2-Factor PIN. This will register your sim.
POST Request to
```
https://graph.facebook.com/v15.0/{WA_PHONE_NUMBER_ID}/register
```
Body Params
```
"messaging_product":"whatsapp",
"pin":"123456" // use 6 digit pin for 2 factor
```
Header
```
Bearer Token: {ACCESS_TOKEN_GENERATED_IN_SYSTEM_USER}
```

# Create Webhook
Now create a `webhook` and add it to Configuration and Subscribe to `messages`

Check Sample Code : [webhook-sample.ts](webhook-sample.ts)
# Subscribe to Webhook
```
https://graph.facebook.com/v20.0/{WA_BUSINESS_ID}/subscribed_apps
```
Header
```
Bearer Token: {ACCESS_TOKEN_GENERATED_IN_SYSTEM_USER}
```

# Send Message
```
https://graph.facebook.com/v20.0/{WA_PHONE_NUMBER_ID}/messages
```
Header
```
Bearer Token: {ACCESS_TOKEN_GENERATED_IN_SYSTEM_USER}
```











































