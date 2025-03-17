import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HomeWrapper } from "./style";
import { Link } from "react-router-dom";

const Home = () => {
  const [showInvite, setShowInvite] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowInvite(true), 500);
  }, []);
  return (
    <HomeWrapper>
      <div className="container">
        {showInvite && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="card">
              <h1 className="title">Lời Mời Đám Cưới</h1>
              <p className="text">
                Hân hạnh kính mời mọi người đến dự lễ cưới của em.
              </p>
              <p className="highlightText" style={{ fontFamily: "'Dancing Script', cursive" }}>Tiến Hiệp 💖 Gia Mẫn</p>
              <p className="text">📅 Thời gian: 18:00, Ngày 12/04/2025</p>
              <p className="text">📍 Địa điểm: Nhà Hàng AquaJardin, TP.HCM</p>
              <button className="button">
                <Link to="/happywedding">
                  <span className="icon-confirm">
                    <img src="/assets/images/pink-icon.png" alt="" />
                  </span>
                  <span className="title-confirm">Chấp nhận lời mời</span>
                </Link>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </HomeWrapper>
  );
};

export default Home;
