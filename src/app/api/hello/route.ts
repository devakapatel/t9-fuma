async function fetchMessage() {
  try {
    const response = await fetch(
      "https://remoteserver.liveblog365.com/hello.php",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // No need to set Origin header manually — browsers do this automatically
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data.message);
  } catch (error) {
    console.error("Error:", error);
  }
}
