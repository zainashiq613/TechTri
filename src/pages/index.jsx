import React from 'react';
import { Outlet } from 'react-router';
import Header from '../pages/layout/Header';
import Footer from '../pages/layout/Footer';

function WebLayout() {
  return (
    <section>
      <div className="w-full absolute">
        <Header />
      </div>
      <main className="">
        <div className="max-w-[1444px] mx-auto w-full">
          <Outlet />
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default WebLayout;
