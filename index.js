async function talkToDemon(message) {
  const res = await fetch("https://da-demon-worker.flatking43.workers.dev", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });
  const data = await res.json();
  return data.reply;
}
