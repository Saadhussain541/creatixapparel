import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SocialLogin() {
  return (
    <div className="tp-login-social mb-10 d-flex flex-wrap align-items-center justify-content-center">
      <div className="tp-login-option-item has-google">
        <Link href="#">
          <span>G</span>
          Sign in with google
        </Link>
      </div>
      <div className="tp-login-option-item">
        <Link href="#">
          <span>f</span>
        </Link>
      </div>
      <div className="tp-login-option-item">
        <Link href="#">
          <span>🍎</span>
        </Link>
      </div>
    </div>
  );
}
