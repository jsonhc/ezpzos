import { Platform } from "./Common/Constants";

/* Common used by Web and Express */
export * from "./Handler/LogHandler";
export * from "./Domain/User";
export * from "./Common/Constants";

/* Express Only Section */
export const UserRepository = async () => {
	return process.env.PLATFORM !== Platform.Web ? await import("./Repository/UserRepository") : null;
};


//TODO Add more exports on demand