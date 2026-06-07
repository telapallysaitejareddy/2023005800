import axios from "axios";
import { ACCESS_TOKEN } from "./auth";

const LOG_API = "http://4.224.186.213/evaluation-service/logs";

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
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
