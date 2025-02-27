"use client"

import { useState, useEffect } from "react";
import { Eye, EyeOff, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import backgroundImage from "@/assets/login.jpg";
import Cookies from "react-cookies";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userTypes, setUserTypes] = useState({});
  const router = useRouter();

  useEffect(() => {
    // Fetch user types on component mount
    const fetchUserTypes = async () => {
      try {
        const response = await fetch(
          "https://swm-api-stagging.vercel.app/api/master/getAllUserTypes",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        if (data.success) {
          const types = {};
          data.data.forEach((type) => {
            types[type.UserTypeID] = type.UserTypeName;
          });
          setUserTypes(types);
        } else {
          alert("Failed to fetch user types.");
        }
      } catch (error) {
        console.error("Error fetching user types:", error);
        alert("An error occurred while fetching user types.");
      }
    };

    fetchUserTypes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://swm-api-stagging.vercel.app/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: email, password }),
        }
      );
      const data = await response.json();

      if (data.success) {
        const { UserTypeID } = data.data;

        const jsonData = JSON.stringify(data?.data);
        const encodedData = window.btoa(encodeURIComponent(jsonData));
        Cookies.save("userData", encodedData, { path: "/", maxAge: 3 * 60 * 60 });
        router.push('/dashboard');

      } else {
        alert(data.message || "Invalid email or password.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="Login Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      <Card className="w-full max-w-md mx-4 bg-white/80 backdrop-blur-md shadow-xl relative z-10">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center text-green-700">Smart Waste Management</CardTitle>
          <div className="flex justify-center">
            <Trash2 className="h-12 w-12 text-green-600" />
          </div>
          <p className="text-sm text-gray-600 text-center">Enter your credentials to access the dashboard</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-green-200 focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div className="space-y-2 relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-green-200 focus:border-green-500 focus:ring-green-500"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 bottom-0.5 text-green-700 hover:text-green-800"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white" type="submit">
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
