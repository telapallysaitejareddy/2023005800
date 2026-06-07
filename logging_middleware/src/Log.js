import axios from "axios";
import { LOG_API } from "./constants";
import { ACCESS_TOKEN } from "./auth";
import { validateLog } from "./validator";

export const Log = async (stack, level, pkg, message) => {
  if (!validateLog(stack, level, pkg, message)) {
    return;
  }

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
    console.log(error);
  }
};
