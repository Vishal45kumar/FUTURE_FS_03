import { verifyToken } from "@clerk/express";

export const verifyClerkToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log("yes come in verifyClerkToken");
  

  console.log("auth header : " + authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY,
      clockSkewInMs: 145000, // allow 15 seconds of clock skew
    });

    req.userId = payload.sub; // Clerk user ID
    next();
  } catch (err) {
    console.error("Token verification failed:", err);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};
