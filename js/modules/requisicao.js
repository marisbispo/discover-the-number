export default async function iniciarJogo() {
  let dados;
  try {
    dados = await fetch(
      'https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300',
    );
    const fetchJson = await dados.json();
    return fetchJson;
  } catch (error) {}
}
