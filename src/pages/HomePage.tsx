import React, { useState, useEffect } from "react";
import AlienTable from "../components/AlienTable";
import { alienApi } from "../services/alienApi";
import { Alien } from "../types/alien.types";

const HomePage: React.FC = () => {
  const [aliens, setAliens] = useState<Alien[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAliens();
  }, []);

  const fetchAliens = async () => {
    try {
      setLoading(true);
      const data = await alienApi.getAllAliens();
      setAliens(data);
      setError(null);
    } catch (err: any) {
      console.error("Full error:", err);
      if (err.response?.status === 404) {
        setError(
          "Invalid ID. Please check your registration ID in alienApi.ts"
        );
      } else if (err.response?.status === 401) {
        setError("Unauthorized. Your ID might be incorrect.");
      } else {
        setError(`Failed to load alien data: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading alien data...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (aliens.length === 0) {
    return <div className="loading">No aliens found in the database</div>;
  }

  return (
    <div className="home-page">
      <AlienTable aliens={aliens} />
    </div>
  );
};

export default HomePage;
