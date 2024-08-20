import mailjet from "node-mailjet";



const mailjetClient = mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE,
  {
    config: {},
    options: {},
  }
);

export async function POST(req) {
  try {
    // Parse the JSON body from the request
    const { email, prenom, nom, message } = await req.json();

    // Send email using Mailjet
    const request = mailjetClient.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "contact@ducompagnon.fr",
            Name: "Le Compagnon de Com !",
          },
          To: [
            {
              Email: email,
              // Name: "Mail de : " + prenom + " " + nom,
            },
          ],
          TemplateID: 6219791,
          TemplateLanguage: true,
          Subject: "Message envoyé à Compagnon de Com",
          Variables: {
            nom, prenom, message, email,
          },
        },
      ],
    });

    // Wait for the request to complete
    const result = await request;

    // Return success response
    return new Response(
      JSON.stringify({ status: "success", data: result.body }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    // Return error response
    return new Response(
      JSON.stringify({ error: "Erreur lors de l'envoi du mail" }),
      { status: 500 }
    );
  }
}
