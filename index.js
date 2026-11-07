export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };
    if (request.method === "OPTIONS") return new Response(null, {headers:cors});
    
    try {
      const { message } = await request.json();
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{role:"user", content: message}]
        })
      });
      const data = await res.json();
      return new Response(JSON.stringify({reply: data.choices[0].message.content}), {
        headers: {...cors, "Content-Type":"application/json"}
      });
    } catch(e){
      return new Response(JSON.stringify({reply:"Error: "+e.message}), {headers:cors});
    }
  }
}
