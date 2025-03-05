import React, { useEffect, useState } from 'react'

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <footer className="footer">
        <p>© 2025Eduzio Class. Template by duydo8</p>
        <p>Time: {currentTime}</p>
      </footer>
    </div>
  )
}

export default Footer
