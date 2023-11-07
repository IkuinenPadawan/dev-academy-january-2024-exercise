const API_URL = "http://localhost:3000/api";

export async function getStations() {
  const res = await fetch(`${API_URL}/stations`);

  if (!res.ok) throw Error("Failed getting stations");

  const { data } = await res.json();
  console.log(data);
  return data;
}
