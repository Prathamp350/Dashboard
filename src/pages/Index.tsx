
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  // Automatically redirect to the dashboard
  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return null; // No need to render anything as we redirect immediately
};

export default Index;
