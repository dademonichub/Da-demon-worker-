export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Da Demon Hub - Official</title>
<style>
body{background:#000;color:#fff;font-family:Arial;text-align:center;padding:40px;margin:0}
h1{font-size:50px;color:#ff0000;text-shadow:0 0 20px red}
.btn{background:red;color:#fff;padding:18px 35px;border-radius:30px;text-decoration:none;font-size:20px;display:inline-block;margin:15px;font-weight:bold;box-shadow:0 0 15px red}
.card{background:#111;border:1px solid #333;padding:20px;border-radius:15px;margin:20px auto;max-width:400px}
</style>
</head>
<body>
<h1>DA DEMON HUB</h1>
<p>🔥 Welcome to Official Da Demon Hub 🔥</p>
<div class="card">
<h2>⚡ Fast | Secure | Official</h2>
<p>Your #1 Hub is LIVE on Cloudflare</p>
<a class="btn" href="#">JOIN TELEGRAM</a><br>
<a class="btn" style="background:#fff;color:#000" href="#">DOWNLOAD APP</a>
</div>
<p style="margin-top:40px;color:#888">Powered by flatking43.workers.dev<br>Build: LIVE ✅</p>
</body>
</html>`;
    return new Response(html, { headers: { "content-type": "text/html" } });
  }
}
