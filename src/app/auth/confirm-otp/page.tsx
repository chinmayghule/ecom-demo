"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, ArrowLeft } from "lucide-react";
import { redirect } from "next/navigation";

interface OtpInputProps {
  phoneNumber?: string;
  onBack?: () => void;
  onVerify?: (otp: string) => void;
  onResend?: () => void;
}

export default function OtpInput({
  phoneNumber = "+1 (555) 123-4567",
  onBack,
  onVerify,
  onResend,
}: OtpInputProps) {
  const [otp, setOtp] = useState("");
  const [, setTimeLeft] = useState(60);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length >= 4) {
      onVerify?.(otp);
      console.log("OTP submitted:", otp);
    }
    redirect("/products");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Only allow digits
    if (value.length <= 6) {
      setOtp(value);
    }
  };

  const handleResend = () => {
    setTimeLeft(60);
    setOtp("");
    onResend?.();
    console.log("Resending OTP to:", phoneNumber);
  };

  return (
    <div className="min-h-screen flex items-center justify-center sm:p-4">
      <Card className="w-full max-w-md max-sm:border-none max-sm:shadow-none">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2">
            {onBack && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="p-1 h-8 w-8"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            )}
            <div className="flex-1">
              <CardTitle className="text-2xl font-bold text-center">
                Verify Your Phone
              </CardTitle>
            </div>
          </div>
          <CardDescription className="text-center">
            Enter the verification code sent to{" "}
            <span className="font-medium">{phoneNumber}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="otp">Verification Code</Label>
              <div className="relative">
                <Shield className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="otp"
                  name="otp"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Enter 6-digit code"
                  value={otp}
                  onChange={handleInputChange}
                  className="pl-10 text-center text-lg font-mono tracking-widest"
                  maxLength={6}
                  autoComplete="one-time-code"
                  required
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Enter the 6-digit code from your SMS
              </p>
            </div>

            <Button type="submit" className="w-full" disabled={otp.length < 4}>
              Verify Code
            </Button>

            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Didn&apos;t receive the code?
              </p>
              <Button
                type="button"
                variant="link"
                onClick={handleResend}
                className="p-0 h-auto text-primary"
              >
                Resend code
              </Button>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              Having trouble?{" "}
              <a href="#" className="underline hover:text-primary">
                Contact Support
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
