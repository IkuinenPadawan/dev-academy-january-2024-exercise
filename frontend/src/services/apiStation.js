// API base URL
const API_URL = "http://localhost:3000/api";

// GET stations
export async function getStations(page = 1, limit = 10, order = "asc", search) {
  let url = `${API_URL}/stations?page=${page}&limit=${limit}&sortBy=station_name&order=${order}`;

  // Append search if not null
  if (search) {
    url += `&search=${search}`;
  }

  const res = await fetch(url);
  console.log(res);

  if (!res.ok) throw Error("Failed getting stations");

  const { data } = await res.json();
  console.log(data);
  return data;
}

// GET station by ID
export async function getStation(id) {
  const res = await fetch(`${API_URL}/stations/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

// GET Journey stats by station ID
export async function getJourneyStats(id) {
  const res = await fetch(`${API_URL}/journeys/stationstats/${id}`);
  if (!res.ok) throw Error(`Couldn't find stats #${id}`);

  const { data } = await res.json();
  return data;
}
