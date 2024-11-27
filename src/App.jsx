import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import StudentDashboard from "./components/StudentDashboard"; 
import TeacherDashboard from "./components/TeacherDashboard"; 
import MultipleChoiceLayout from "./components/test"; 
import ProtectedPage from "./components/ProtectedPage";
import Dashboard from "./components/Dashboard";
import QuizPage from "./components/quiz";
import "./App.css";

const App = () => {
  return (
    <Router>
      <AuthProvider> 
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/student-dashboard"
            element={
              <ProtectedRoute requiredRole="Student">
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher-dashboard"
            element={
              <ProtectedRoute requiredRole="Teacher">
                <TeacherDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quiz"
            element={<QuizPage />}
          />
          <Route
            path="/test/:testId"
            element={<MultipleChoiceLayout />}
          />    
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
