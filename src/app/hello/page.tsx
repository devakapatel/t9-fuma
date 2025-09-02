"use client";

import { useState, useEffect } from "react";

export default function HelloPage() {
  const [result, setResult] = useState<string>("Ready to call API...");
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);

  const fetchFromAPI = async () => {
    try {
      setLoading(true);
      setResult("Loading...");

      const response = await fetch(
        "https://remoteserver.liveblog365.com/hello.php"
      );

      if (!response.ok) {
        throw new Error(
          `Server returned ${response.status}: ${response.statusText}`
        );
      }

      const apiData = await response.json();
      setData(apiData);
      setResult(`Success! Message: ${apiData.message}`);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      setResult(`Error: ${errorMessage}`);
      console.error("API call failed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFromAPI();
  }, []);

  return (
    <main style={{ padding: "20px" }}>
      <h1>API Test Page</h1>

      <div style={{ marginBottom: "20px" }}>
        <p>
          <strong>Status:</strong> {result}
        </p>
      </div>

      {data && (
        <div
          style={{
            background: "#f5f5f5",
            padding: "15px",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        >
          <h3>API Response:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}

      <button
        onClick={fetchFromAPI}
        disabled={loading}
        style={{
          background: loading ? "#ccc" : "#0070f3",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Calling API..." : "Refresh API Call"}
      </button>
    </main>
  );
}
