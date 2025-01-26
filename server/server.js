import http from "http";
import https from "https";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from the .env file

const API_KEY = process.env.VITE_BEARER; // Your API key from the .env file

const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.url.startsWith("/movies/popular") && req.method === "GET") {
    // Fetch popular movies from the API
    const options = {
      hostname: "api.themoviedb.org",
      path: `/3/movie/popular`,
      method: "GET",
      headers: {
        Authorization: API_KEY,
        accept: "application/json",
      },
    };

    const apiRequest = https.request(options, (apiResponse) => {
      let data = "";

      apiResponse.on("data", (chunk) => {
        data += chunk;
      });

      apiResponse.on("end", () => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data); // Send data back to the frontend
      });
    });

    apiRequest.on("error", (err) => {
      console.error(err);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Failed to fetch data" }));
    });

    apiRequest.end();
  }else if (req.url.startsWith("/movies/search") && req.method === "GET") {
    const queryParams = new URL(req.url, `http://${req.headers.host}`).searchParams;
    const searchQuery = queryParams.get("query");

    if (!searchQuery) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Search query is required" }));
      return;
    }

    const options = {
      hostname: "api.themoviedb.org",
      path: `/3/search/movie?query=${encodeURIComponent(searchQuery)}&include_adult=false&language=en-US&page=1`,
      method: "GET",
      headers: {
        Authorization: API_KEY,
        accept: "application/json",
      },
    };

    const apiRequest = https.request(options, (apiResponse) => {
      let data = "";

      apiResponse.on("data", (chunk) => {
        data += chunk;
      });

      apiResponse.on("end", () => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data);
      });
    });

    apiRequest.on("error", (err) => {
      console.error(err);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Failed to fetch data" }));
    });

    apiRequest.end();

    // Handle other routes
  }
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
