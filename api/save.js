export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password, content } = req.body || {};

  const expectedPassword = process.env.ADMIN_PASSWORD || 'nrb2025';
  if (!password || password !== expectedPassword) {
    return res.status(401).json({ error: 'Unauthorized', debug: `env_set:${!!process.env.ADMIN_PASSWORD}` });
  }

  const token  = process.env.GITHUB_TOKEN;
  const owner  = process.env.GITHUB_OWNER  || 'adserrat13-glitch';
  const repo   = process.env.GITHUB_REPO   || 'portfolio-natallia';
  const branch = 'master';
  const path   = 'data/content.json';

  if (!token || !owner || !repo) {
    return res.status(500).json({ error: 'Server misconfigured: missing env vars' });
  }

  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'Content-Type': 'application/json',
  };

  // GET current file SHA
  const getRes = await fetch(`${apiUrl}?ref=${branch}`, { headers });
  if (!getRes.ok) {
    const detail = await getRes.text();
    return res.status(502).json({ error: 'GitHub GET failed', detail });
  }
  const { sha } = await getRes.json();

  // PUT updated content
  const newContent = Buffer.from(JSON.stringify(content, null, 2)).toString('base64');
  const putRes = await fetch(apiUrl, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      message: 'chore: update content via admin panel',
      content: newContent,
      sha,
      branch,
    }),
  });

  if (!putRes.ok) {
    const detail = await putRes.text();
    return res.status(502).json({ error: 'GitHub PUT failed', detail });
  }

  return res.status(200).json({ ok: true, message: 'Salvo com sucesso!' });
}
