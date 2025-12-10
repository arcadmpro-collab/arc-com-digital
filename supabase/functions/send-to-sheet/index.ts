import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: EmailRequest = await req.json();
    
    console.log("Received email submission:", email);

    // Validate email
    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Email invalide" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Get webhook URL from environment
    const webhookUrl = Deno.env.get("GOOGLE_SHEET_WEBHOOK_URL");
    const systemeIoApiKey = Deno.env.get("SYSTEME_IO_API_KEY");
    
    if (!webhookUrl) {
      console.error("GOOGLE_SHEET_WEBHOOK_URL not configured");
      return new Response(
        JSON.stringify({ error: "Configuration manquante" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Prepare data for Google Sheet
    const timestamp = new Date().toLocaleString("fr-FR", {
      timeZone: "Europe/Paris",
    });

    const sheetData = {
      horodateur: timestamp,
      mail: email,
    };

    console.log("Sending to Google Sheet:", sheetData);

    // Send to Google Sheet webhook
    const sheetResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sheetData),
    });

    if (!sheetResponse.ok) {
      const errorText = await sheetResponse.text();
      console.error("Google Sheet webhook error:", errorText);
      throw new Error(`Webhook failed: ${sheetResponse.status}`);
    }

    console.log("Successfully sent to Google Sheet");

    // Send to Systeme.io
    if (systemeIoApiKey) {
      try {
        console.log("Sending to Systeme.io:", email);
        
        const systemeResponse = await fetch("https://api.systeme.io/api/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": systemeIoApiKey,
          },
          body: JSON.stringify({
            email: email,
          }),
        });

        if (!systemeResponse.ok) {
          const errorText = await systemeResponse.text();
          console.error("Systeme.io API error:", errorText);
          // Don't throw here, just log - we still want to succeed if Google Sheet worked
        } else {
          console.log("Successfully sent to Systeme.io");
        }
      } catch (systemeError) {
        console.error("Error sending to Systeme.io:", systemeError);
        // Don't throw here, just log
      }
    } else {
      console.warn("SYSTEME_IO_API_KEY not configured, skipping Systeme.io");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email enregistré avec succès" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-to-sheet function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Erreur lors de l'enregistrement" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
