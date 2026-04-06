import React from 'react';
import { useLoginPage } from '../hooks/useLoginPage';
import './LoginPage.css';

// SVG Icons
const EnvelopeIcon = () => (
  <svg className='input-icon' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
    <rect x='2' y='4' width='20' height='16' rx='2' ry='2'></rect>
    <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
  </svg>
);

const KeyIcon = () => (
  <svg className='input-icon' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
    <path d='M21 2l-9 4m0 0L5 2m7 4v7m3.5-6.5C20 8 23 11 23 15c0 4-3 7-7 7s-7-3-7-7c0-4 3-7 7-7z'></path>
  </svg>
);

const EyeIcon = () => (
  <svg className='input-icon' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
    <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
    <circle cx='12' cy='12' r='3'></circle>
  </svg>
);

const EyeOffIcon = () => (
  <svg className='input-icon' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
    <path d='M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24'></path>
    <line x1='1' y1='1' x2='23' y2='23'></line>
  </svg>
);

function LoginPage() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    rememberMe,
    setRememberMe,