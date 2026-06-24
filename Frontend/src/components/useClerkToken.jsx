import { useAuth } from "@clerk/clerk-react";
import { useState, useEffect } from "react";

export const useClerkToken = () => {
  const { getToken, isLoaded, isSignedIn } = useAuth();
  const [token, setToken] = useState(null);

  console.log("My token " + token);
  

  useEffect(() => {
    const fetchToken = async () => {
      if (!isLoaded || !isSignedIn) return;

      const t = await getToken();
      setToken(t);
    };

    fetchToken();
  }, [isLoaded, isSignedIn]);

  return token;
};
