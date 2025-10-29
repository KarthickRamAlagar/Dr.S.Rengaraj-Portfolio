// src/pages/NotFound.jsx
import React from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="flex flex-col h-[300px] w-[500px] mt-3 glass-strong">
        <CardHeader className="flex mt-3">
          <CardTitle className="flex flex-col justify-center items-center font-bold text-center text-xl">
            Oops! Page Not Found
            <span className="mt-5 text-7xl">
              <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center glow text-primary">
                <span className="text-xl font-bold">SR</span>
              </div>
            </span>
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex gap-2">
          <Button
            className="w-full text-xl"
            onClick={() => navigate("/Dr.S.Rengaraj-Portfolio")}
          >
            Go to Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotFound;
