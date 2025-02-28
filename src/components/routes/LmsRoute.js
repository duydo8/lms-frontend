import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../trang-chu/DashBoard'

const LmsRoute = () => {
    return (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/view-students" element={<StudentsView />} />
          <Route path="/add-students" element={<AddStudent />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
          <Route path="/student-profile/:id" element={<ViewStudent />} /> */}
        </Routes>
      )
}

export default LmsRoute
