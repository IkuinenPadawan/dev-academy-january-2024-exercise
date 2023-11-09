const API_URL = "http://localhost:3000/api";

export async function getStations(page = 1, limit = 10) {
  const res = await fetch(`${API_URL}/stations?page=${page}&limit=${limit}`);
  console.log(res);

  if (!res.ok) throw Error("Failed getting stations");

  const { data } = await res.json();
  console.log(data);
  return data;
}

export async function getStation(id) {
  const res = await fetch(`${API_URL}/stations/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

export async function getJourneyStats(id) {
  const res = await fetch(`${API_URL}/journeys/stationstats/${id}`);
  if (!res.ok) throw Error(`Couldn't find stats #${id}`);

  const { data } = await res.json();
  return data;
}
