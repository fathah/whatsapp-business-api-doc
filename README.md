# whatsapp-business-api-doc

### This documentation is created for easy understanding of integrating WhatsApp business API.

# Register Business
Firs need to register the business and verify it using official documents.

# Add Number
Then add a number associated to WhatsApp in WhatsApp Manager

# Verify Number
Then need to set 2-Factor PIN. This will register your sim.
POST Request to
```
https://graph.facebook.com/v15.0/{WA_PHONE_NUMBER_ID}/register
```
Body Params
```json
"messaging_product":"whatsapp",
"pin":"123456" // use 6 digit pin for 2 factor
```

# Create Webhook
Now create a `webhook` and add it to Configuration and Subscribe to `messages`

Check Sample Code : [webhook-sample.ts](webhook-sample.ts)
# Subscribe to Webhook
```
https://graph.facebook.com/v20.0/{WA_BUSINESS_ID}/subscribed_apps
```











































