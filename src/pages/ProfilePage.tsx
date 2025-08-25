import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import AlienProfile from "../components/AlienProfile";
import { alienApi } from "../services/alienApi";
import { Alien } from "../types/alien.types";

const ProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [alien, setAlien] = useState<Alien | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchAlien(id);
    }
  }, [id]);

  const fetchAlien = async (alienId: string) => {
    try {
      setLoading(true);
      const data = await alienApi.getAlienById(alienId);
      setAlien(data);
      setError(null);
    } catch (err) {
      setError("Failed to load alien profile");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!id) {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return <div className="loading">Loading alien profile...</div>;
  }

  if (error || !alien) {
    return <div className="error">{error || "Alien not found"}</div>;
  }

  return (
    <div className="profile-page">
      <AlienProfile alien={alien} />
    </div>
  );
};

export default ProfilePage;
