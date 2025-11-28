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
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sheetData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Google Sheet webhook error:", errorText);
      throw new Error(`Webhook failed: ${response.status}`);
    }

    console.log("Successfully sent to Google Sheet");

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
