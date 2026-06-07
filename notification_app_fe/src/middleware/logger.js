import axios from "axios";

const LOG_API = "http://4.224.186.213/evaluation-service/logs";

const ACCESS_TOKEN = "PASTE_YOUR_ACCESS_TOKEN_HERE";

export async function Log(stack, level, pkg, message) {
  try {
    const response = await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error("Logging failed", error);
  }
}
