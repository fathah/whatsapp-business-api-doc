

import { NextRequest } from "next/server";


export async function GET(request:NextRequest) {
    const { searchParams } = new URL(request.url);
    
    console.log("Got verification request");
    // Extract the query parameters sent by WhatsApp for verification
    const mode = searchParams.get('hub.mode');
    const token = searchParams.get('hub.verify_token');
    const challenge = searchParams.get('hub.challenge');
  
    // Your verify token stored in environment variable
    const VERIFY_TOKEN = process.env.WP_VERIFY_TOKEN;
  
    // Check if the mode and token match your expected values
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      // Respond with the hub.challenge parameter to verify the webhook
      return new Response(challenge, { status: 200 });
    } else {
      // If verification fails, respond with 403 (Forbidden)
      return new Response('Verification failed', { status: 403 });
    }
  }


export async function POST(request:NextRequest) {
    try {
      // Parse the incoming request body as JSON
      const body = await request.json();
      console.log("Got the request");
      
      console.log("Messages==>",JSON.stringify(body));

      // Log incoming message details
      if (body.messages && body.messages.length > 0) {
        
        const message = body.messages[0].text.body; // The actual message content
        const senderName = body.contacts[0].profile.name; // Sender's name
  
        console.log(`Received a message from ${senderName}: ${message}`);
        
        // Process or respond to the message
        // Example: You could send an automated response back using the WhatsApp API
      }
  
      // Respond with 200 OK to acknowledge receipt of the webhook
      return new Response('Webhook received successfully', { status: 200 });
    } catch (error) {
      console.error('Error processing WhatsApp webhook:', error);
      return new Response('Error processing webhook', { status: 500 });
    }
  }
  
