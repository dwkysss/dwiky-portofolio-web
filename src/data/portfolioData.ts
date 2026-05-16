// src/data/portfolioData.ts
import React from "react";

export const projectsData = [
  {
    id: 1,
    title: "Biometric Facial Recognition Attendance",
    description:
      "Sistem presensi otomatis menggunakan OpenCV dan ArcFace yang dideploy di Diskominfo Kabupaten Bandung.",
    githubUrl: "https://github.com/dwkysss/absensi-diskominfo",
    techStackLogos: [
      { name: "Python", url: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Flask", url: "https://cdn.simpleicons.org/flask/white" },
      { name: "OpenCV", url: "https://cdn.simpleicons.org/opencv/white" },
      {
        name: "PostgreSQL",
        url: "https://cdn.simpleicons.org/postgresql/white",
      },
    ],
  },
  {
    id: 2,
    title: "Hybrid CNN-Transformer Signal Classification",
    description:
      "Riset klasifikasi sinyal biologis menggunakan arsitektur deep learning hybrid untuk akurasi tinggi.",
    githubUrl: "https://ieeexplore.ieee.org/document/11335101",
    techStackLogos: [
      { name: "Python", url: "https://cdn.simpleicons.org/python/3776AB" },
      {
        name: "TensorFlow",
        url: "https://cdn.simpleicons.org/tensorflow/white",
      },
      { name: "PyTorch", url: "https://cdn.simpleicons.org/pytorch/white" },
    ],
  },
  {
    id: 3,
    title: "Sistem Manajemen Masjid Terpadu (Microservices)",
    description:
      "Platform manajemen masjid terintegrasi berbasis Microservices. Mengelola inventaris aset, jadwal khutbah real-time, dan transparansi keuangan umat.",
    githubUrl: "https://api-gateway-9225665346.asia-southeast2.run.app/",
    techStackLogos: [
      {
        name: "React",
        url: "https://cdn.simpleicons.org/react/61DAFB",
      },
      {
        name: "Laravel",
        url: "https://cdn.simpleicons.org/laravel/FF2D20",
      },
      {
        name: "MySQL",
        url: "https://cdn.simpleicons.org/mysql/4479A1",
      },
      {
        name: "Google Cloud",
        url: "https://cdn.simpleicons.org/googlecloud/4285F4",
      },
      {
        name: "Tailwind CSS",
        url: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      },
    ],
  },
  {
    id: 4,
    title: "TrashIssue - Smart Waste Management App",
    description:
      "Aplikasi berbasis mobile untuk klasifikasi sampah menggunakan machine learning dengan sistem rekomendasi.",
    githubUrl: "https://github.com/C242-PS482/Capstone-Project-TrashIssue", // Isinya bray!
    techStackLogos: [
      {
        name: "TensorFlow",
        url: "https://cdn.simpleicons.org/tensorflow/FF6F00",
      },
      { name: "Python", url: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Firebase", url: "https://cdn.simpleicons.org/firebase/FFCA28" },
      { name: "Android", url: "https://cdn.simpleicons.org/android/3DDC84" },
      { name: "React", url: "https://cdn.simpleicons.org/react/61DAFB" },
    ],
  },
];

export const techStackData = {
  languages: [
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "Java", icon: "/java.svg" },
    {
      name: "JavaScript",
      icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.simpleicons.org/typescript/3178C6",
    },
    { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
    { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
    { name: "SQL", icon: "https://cdn.simpleicons.org/postgresql/white" },
  ],
  frontend: [
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    {
      name: "Tailwind",
      icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
    { name: "Vue.js", icon: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
    { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    // SVG CSS3 lu tetep aman di sini bray
    {
      name: "CSS3",
      icon: React.createElement(
        "svg",
        { width: "24", height: "24", viewBox: "0 0 24 24", fill: "#1572B6" },
        React.createElement("path", {
          d: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z",
        }),
      ),
    },
  ],
  backend: [
    {
      name: "Spring Boot",
      icon: "https://cdn.simpleicons.org/springboot/6DB33F",
    },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Flask", icon: "https://cdn.simpleicons.org/flask/white" },
    { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
    {
      name: "CodeIgniter",
      icon: "https://cdn.simpleicons.org/codeigniter/EF4223",
    },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
  ],
  tools: [
    { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv/white" },
    {
      name: "TensorFlow",
      icon: "https://cdn.simpleicons.org/tensorflow/FF6F00",
    },
    { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "Blender", icon: "https://cdn.simpleicons.org/blender/F5792A" },
    { name: "Unity", icon: "https://cdn.simpleicons.org/unity/white" },
  ],
};

export const experiencesData = [
  {
    id: 0,
    title: "Machine Learning Cohort (Distinction Graduate)",
    company: "Bangkit Academy led by Google, GoTo, & Traveloka",
    description:
      "Terpilih sebagai salah satu lulusan terbaik (Distinction) dari 4.000+ peserta.",
    startDate: "Februari 2025",
    endDate: "Juli 2025",
  },
  {
    id: 1,
    title: "Staff Strategic Research and Advocacy (KASTRAD)",
    company: "BEM KMF MIPA UNJANI",
    description:
      "Bertanggung jawab dalam riset strategis dan advokasi kebijakan fakultas.",
    startDate: "Juni 2025",
    endDate: "Januari 2026",
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "Diskominfo Kabupaten Bandung",
    description:
      "Mengembangkan sistem absensi berbasis wajah (Face Recognition) menggunakan library OpenCV.",
    startDate: "Oktober 2025",
    endDate: "Desember 2025",
  },
];
