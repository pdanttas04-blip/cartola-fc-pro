export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.cartola.globo.com/mercado/status");
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados" });
  }
}